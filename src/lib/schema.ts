import { z } from 'zod';

export const submitFormMessageSchema = z.object({
	email: z
		.string({ required_error: 'The email field is required.' })
		.min(1, 'The email field is required.')
		.email('Enter a valid email.'),
	message: z
		.string({ required_error: 'The message field is required.' })
		.min(2, 'Message is too short.')
		.max(100, 'Message is too long.'),
});

export const submitFormUserSchema = z.object({
	email: z
		.string({ required_error: 'The email field is required.' })
		.min(1, 'The email field is required.')
		.email('Enter a valid email.'),
	name: z
		.string({ required_error: 'The name field is required.' })
		.min(2, 'Name is too short.')
		.max(100, 'Name is too long.'),
	age: z
		.string({
			required_error: 'The age field is required.',
		})
		.refine(
			val => {
				const parsed = parseInt(val, 10);
				return !isNaN(parsed) && parsed >= 18 && parsed <= 150;
			},
			{
				message: 'Enter a valid age (at least 18).',
			},
		),
});
