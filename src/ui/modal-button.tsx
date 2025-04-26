'use client';

import { Loader2 } from 'lucide-react';
import { useLinkStatus } from 'next/link';

import { Button } from '@/ui/shadcn/button';

export function ModalButton() {
	const { pending } = useLinkStatus();

	return (
		<Button size={'lg'} className="min-w-24">
			{pending ? <Loader2 className="size-5 animate-spin" /> : <>Add</>}
		</Button>
	);
}
