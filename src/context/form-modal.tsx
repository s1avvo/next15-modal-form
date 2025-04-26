'use client';

import { createContext, use, useState } from 'react';

type FormModalProviderValue = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

const FormModalContext = createContext<FormModalProviderValue | null>(null);

export const FormModalProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [open, setOpen] = useState(false);

	return (
		<FormModalContext.Provider value={{ open, setOpen }}>
			{children}
		</FormModalContext.Provider>
	);
};

export const useFormModal = () => {
	const ctx = use(FormModalContext);
	if (!ctx) throw new Error('useModal must be used inside FormModalProvider');

	return ctx;
};
