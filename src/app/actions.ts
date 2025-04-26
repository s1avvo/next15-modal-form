'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const submitFormSchema = z.object({
	email: z
		.string({ required_error: 'The email field is required.' })
		.min(1, 'The email field is required.')
		.email('Use correct email.'),
	message: z
		.string({ required_error: 'The message field is required.' })
		.min(2, 'Message is too short.')
		.max(100, 'Message is too long.'),
});

type FormDataType = z.infer<typeof submitFormSchema>;

type FormError = {
	error?: Partial<Record<keyof FormDataType, string[]>>;
	globalError?: string;
};

type FormState = {
	values?: FormDataType;
	success?: boolean;
} & FormError;

export async function submitForm(
	_: unknown,
	formData: FormData,
): Promise<FormState> {
	try {
		const formValues = Object.fromEntries(formData) as FormDataType;

		const { success, error, data } = submitFormSchema.safeParse(formValues);

		if (!success) {
			return {
				error: error.flatten().fieldErrors,
				values: formValues,
			};
		}

		// Simulate a server request
		await new Promise(resolve => setTimeout(resolve, 1000));

		console.log(data);

		return { success: true };
	} catch (error: unknown) {
		return {
			globalError: (error as Error)?.message || 'Something goes wrong!',
		};
	} finally {
		// revalidate path or cache tag
		revalidatePath('/');
	}
}
