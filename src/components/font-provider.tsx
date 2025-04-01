import { createContext, useContext, useEffect, useState } from "react";

type FontType = "primary" | "secondary" | "tertiary" | "quaternary";

type FontProviderProps = {
	children: React.ReactNode;
	defaultFont?: FontType;
	storageKey?: string;
};

type FontProviderState = {
	font: FontType;
	setFont: (font: FontType) => void;
};

const FontProviderContext = createContext<FontProviderState | undefined>(
	undefined
);

export function FontProvider({
	children,
	defaultFont = "primary",
	storageKey = "vite-ui-font",
}: FontProviderProps) {
	console.log("FontProvider is rendering"); // Debugging
	const [font, setFont] = useState<FontType>(
		() => (localStorage.getItem(storageKey) as FontType) || defaultFont
	);

	useEffect(() => {
		console.log("FontProvider initialized with font:", font); // Debugging
		const root = document.documentElement;

		// Remove all font classes
		root.classList.remove(
			"font-primary",
			"font-secondary",
			"font-tertiary",
			"font-quaternary"
		);

		// Add the selected font class
		root.classList.add(`font-${font}`);

		// Persist the selected font in localStorage
		localStorage.setItem(storageKey, font);

		console.log("FontProvider updated font:", font); // Debugging
	}, [font]);

	return (
		<FontProviderContext.Provider value={{ font, setFont }}>
			{children}
		</FontProviderContext.Provider>
	);
}

export function useFont() {
	const context = useContext(FontProviderContext);
	if (context === undefined) {
		throw new Error("useFont must be used within a FontProvider");
	}
	return context;
}
