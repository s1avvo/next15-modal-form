'use client';

import Link from 'next/link';
import { useFormModal } from '@/context/form-modal';
import { ModalButton } from '@/ui/modal-button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/ui/shadcn/dropdown-menu';
import { Button } from '@/ui/shadcn/button';

export function ModalLink() {
	const { setOpen } = useFormModal();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size={'lg'} className="cursor-pointer">
					ADD
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="space-y-2">
				<DropdownMenuItem asChild className="p-0">
					<Link
						href={{ pathname: '/form/user' }}
						onNavigate={() => setOpen(true)}
						scroll={false}
					>
						<ModalButton>User</ModalButton>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild className="p-0">
					<Link
						href={{ pathname: '/form/message' }}
						onNavigate={() => setOpen(true)}
						scroll={false}
					>
						<ModalButton>Messsage</ModalButton>
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
