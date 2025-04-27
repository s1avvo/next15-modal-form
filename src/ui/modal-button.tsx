'use client';

import { Loader2 } from 'lucide-react';
import { useLinkStatus } from 'next/link';

import { Button } from '@/ui/shadcn/button';

export function ModalButton({ children }: { children: React.ReactNode }) {
	const { pending } = useLinkStatus();

	return (
		<Button
			variant={'ghost'}
			size={'sm'}
			className="w-full min-w-24 cursor-pointer"
		>
			{pending ? <Loader2 className="size-5 animate-spin" /> : <>{children}</>}
		</Button>
	);
}
