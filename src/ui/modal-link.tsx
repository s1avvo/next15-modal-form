'use client';

import Link from 'next/link';
import { useFormModal } from '@/context/form-modal';
import { ModalButton } from '@/ui/modal-button';

export function ModalLink() {
	const { setOpen } = useFormModal();

	return (
		<Link
			href={{ pathname: '/form' }}
			onNavigate={() => setOpen(true)}
			scroll={false}
		>
			<ModalButton />
		</Link>
	);
}
