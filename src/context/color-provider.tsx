import { createContext, useContext, useEffect, useState } from "react";

type ColorTheme = "green" | "red" | "blue" | "high-contrast";

type ColorProviderProps = {
	children: React.ReactNode;
	defaultColor?: ColorTheme;
	storageKey?: string;
};
type ColorProviderState = {
	color: ColorTheme;
	setColor: (color: ColorTheme) => void;
};

const ColorProviderContext = createContext<ColorProviderState | undefined>(
	undefined
);

export function ColorProvider({
	children,
	defaultColor = "green",
	storageKey = "vite-ui-color",
}: ColorProviderProps) {
	const [color, setColor] = useState<ColorTheme>(
		() => (localStorage.getItem(storageKey) as ColorTheme) || defaultColor
	);

	useEffect(() => {
		const root = window.document.documentElement;

		// Remove all color theme classes
		root.classList.remove("green", "red", "blue", "high-contrast");

		// Add the selected color theme class
		root.classList.add(color);

		// Persist the selected color theme in localStorage
		localStorage.setItem(storageKey, color);
	}, [color]);

	return (
		<ColorProviderContext.Provider value={{ color, setColor }}>
			{children}
		</ColorProviderContext.Provider>
	);
}
export function useColor() {
	const context = useContext(ColorProviderContext);
	if (context === undefined) {
		throw new Error("useColor must be used within a ColorProvider");
	}

	return context;
}
