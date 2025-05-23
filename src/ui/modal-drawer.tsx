'use client';

import { useFormModal } from '@/context/form-modal';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from '@/ui/shadcn/drawer';

export function ModalDrawer({
	children,
	title,
	description,
}: {
	children: React.ReactNode;
	title: string;
	description: string;
}) {
	const router = useRouter();
	const { open, setOpen } = useFormModal();

	useEffect(() => {
		if (!open) {
			//  flash layout shift issue
			const timeout = setTimeout(() => {
				router.back();
			}, 150);

			return () => clearTimeout(timeout);
		}
	}, [open, router]);

	return (
		<Drawer
			open={open}
			onOpenChange={setOpen}
			shouldScaleBackground={true}
			direction={'bottom'}
			autoFocus
		>
			<DrawerContent aria-describedby="form-drawer-modal">
				<div className="mx-auto w-full max-w-sm px-4">
					<DrawerHeader className="mb-2">
						<DrawerTitle>{title}</DrawerTitle>
						<DrawerDescription>{description}</DrawerDescription>
					</DrawerHeader>
					{children}
					<DrawerFooter />
				</div>
			</DrawerContent>
		</Drawer>
	);
}
