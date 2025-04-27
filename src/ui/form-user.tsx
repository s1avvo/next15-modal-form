'use client';

import { Loader2 } from 'lucide-react';
import { useFormModal } from '@/context/form-modal';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/ui/shadcn/button';
import { Input } from '@/ui/shadcn/input';
import { Label } from '@/ui/shadcn/label';

import { submitUserForm } from '@/app/actions';

const initialState = {
	values: {
		email: '',
		name: '',
		age: '',
	},
	success: false,
};

export function FormUser() {
	const [state, formAction, pending] = useActionState(
		submitUserForm,
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
				<Label htmlFor="name">Name</Label>
				<Input
					name="name"
					placeholder="Enter your name"
					defaultValue={state?.values?.name ?? ''}
				/>
				{state?.error?.name && (
					<p className="text-destructive text-sm" aria-live="polite">
						{state.error.name[0]}
					</p>
				)}
			</fieldset>
			<fieldset className="space-y-1.5">
				<Label htmlFor="age">Age</Label>
				<Input
					name="age"
					placeholder="Enter your age"
					defaultValue={state?.values?.age ?? ''}
				/>
				{state?.error?.age && (
					<p className="text-destructive text-sm" aria-live="polite">
						{state.error.age[0]}
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
