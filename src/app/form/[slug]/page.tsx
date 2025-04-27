import { z } from 'zod';
import { notFound } from 'next/navigation';
import { FormMessage } from '@/ui/form-message';
import { FormUser } from '@/ui/form-user';

const SLUG = z.enum(['user', 'message']);

export default async function FormPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const safeSlug = SLUG.safeParse(slug);

	if (!safeSlug.success && !safeSlug.data) {
		notFound();
	}

	return (
		<div className="container mt-8">
			{slug === 'user' && <FormUser />}
			{slug === 'message' && <FormMessage />}
		</div>
	);
}
