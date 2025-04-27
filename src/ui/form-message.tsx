'use client';

import { Loader2 } from 'lucide-react';
import { useFormModal } from '@/context/form-modal';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/ui/shadcn/button';
import { Input } from '@/ui/shadcn/input';
import { Label } from '@/ui/shadcn/label';
import { Textarea } from '@/ui/shadcn/textarea';

import { submitMessageForm } from '@/app/actions';

const initialState = {
	values: {
		email: '',
		message: '',
	},
	success: false,
};

export function FormMessage() {
	const [state, formAction, pending] = useActionState(
		submitMessageForm,
		initialState,
	);
	const { setOpen } = useFormModal();

	useEffect(() => {
		if (state && (state.success || state.globalError)) {
			setOpen(false);

			if (state.globalError) toast.error(state.globalError);

			if (state.success) toast.success('Message submitted!');
		}
	}, [state, setOpen]);

	return (
		<form action={formAction} className="mx-auto w-full max-w-sm space-y-4">
			<fieldset className="space-y-1.5">
				<Label htmlFor="email">Email</Label>
				<Input
					autoComplete="email"
					name="email"
					placeholder="Enter your email"
					defaultValue={state?.values?.email ?? ''}
				/>
				{state?.error?.email && (
					<p className="text-destructive text-sm" aria-live="polite">
						{state.error.email[0]}
					</p>
				)}
			</fieldset>
			<fieldset className="space-y-1.5">
				<Label htmlFor="message">Message</Label>
				<Textarea
					name="message"
					placeholder="Enter your message"
					defaultValue={state?.values?.message ?? ''}
				/>
				{state?.error?.message && (
					<p className="text-destructive text-sm" aria-live="polite">
						{state.error.message[0]}
					</p>
				)}
			</fieldset>

			<Button type="submit" className="w-full" disabled={pending}>
				{pending ? (
					<Loader2 className="text-muted size-5 animate-spin" />
				) : (
					<>Submit</>
				)}
			</Button>
		</form>
	);
}
