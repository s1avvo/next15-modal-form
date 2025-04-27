import { ModalDrawer } from '@/ui/modal-drawer';
import { FormMessage } from '@/ui/form-message';
import { FormUser } from '@/ui/form-user';

export default async function FormModalPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	return (
		<>
			{slug === 'user' && (
				<ModalDrawer
					title="Add user"
					description="Here you can create a new user!"
				>
					<FormUser />
				</ModalDrawer>
			)}
			{slug === 'message' && (
				<ModalDrawer
					title="Add message"
					description="Here you can send me a message!"
				>
					<FormMessage />
				</ModalDrawer>
			)}
		</>
	);
}
