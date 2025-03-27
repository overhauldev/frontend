import { BrowserRouter, useRoutes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { routes } from "@/routes";
import { Layout } from "@/layout";

const AppRoutes = () => {
	return useRoutes(routes);
};

export const AppRouter = () => {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Layout>
					<AppRoutes />
				</Layout>
			</BrowserRouter>
		</ThemeProvider>
	);
};
