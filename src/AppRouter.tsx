import { BrowserRouter, useRoutes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { routes } from "@/routes";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/sonner";
const AppRoutes = () => {
	return useRoutes(routes);
};

export const AppRouter = () => {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<div className="relative min-h-screen">
					<AppRoutes />
					<ModeToggle />
				</div>
			</BrowserRouter>
			<Toaster position="bottom-center" />
		</ThemeProvider>
	);
};
