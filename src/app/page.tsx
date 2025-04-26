import { ModalLink } from '@/ui/modal-link';

export default function Home() {
	return (
		<div className="relative min-h-svh">
			<header className="bg-muted flex h-24 items-center justify-between px-16">
				<h1 className="text-3xl">
					<span className="font-bold">Next.js</span> | Modal Form
				</h1>
				<ModalLink />
			</header>
		</div>
	);
}
