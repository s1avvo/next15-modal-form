import { z } from 'zod';
import { submitFormMessageSchema, submitFormUserSchema } from '@/lib/schema';

export type FormError<T> = {
	error?: Partial<Record<keyof T, string[]>>;
	globalError?: string;
};

export type FormState<T> = {
	values?: T;
	success?: boolean;
} & FormError<T>;

export type MessageFormDataType = z.infer<typeof submitFormMessageSchema>;
export type MessageFormState = FormState<MessageFormDataType>;

export type UserFormDataType = z.infer<typeof submitFormUserSchema>;
export type UserFormState = FormState<UserFormDataType>;
