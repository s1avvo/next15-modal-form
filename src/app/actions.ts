'use server';

import { revalidatePath } from 'next/cache';
import { submitFormMessageSchema, submitFormUserSchema } from '@/lib/schema';
import {
	MessageFormDataType,
	MessageFormState,
	UserFormDataType,
	UserFormState,
} from '@/lib/types';

export async function submitMessageForm(
	state: MessageFormState,
	formData: FormData,
): Promise<MessageFormState> {
	try {
		const formValues = Object.fromEntries(
			formData,
		) as unknown as MessageFormDataType;

		const { success, error, data } =
			submitFormMessageSchema.safeParse(formValues);

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

export async function submitUserForm(
	state: UserFormState,
	formData: FormData,
): Promise<UserFormState> {
	try {
		const formValues = Object.fromEntries(
			formData,
		) as unknown as UserFormDataType;

		const { success, error, data } = submitFormUserSchema.safeParse(formValues);

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
