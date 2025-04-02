import { BrowserRouter, useRoutes } from "react-router-dom";
import { ThemeProvider } from "@/context/theme-provider";
import { ColorProvider } from "@/context/color-provider";
import { FontProvider } from "@/context/font-provider";
import { DashboardDataProvider } from "@/context/dashboard-data-provider";

import { routes } from "@/routes";
import { Layout } from "@/layout";

const AppRoutes = () => {
	return useRoutes(routes);
};

export const AppRouter = () => {
	return (
		<DashboardDataProvider>
			<FontProvider>
				<ThemeProvider>
					<ColorProvider>
						<BrowserRouter>
							<Layout>
								<AppRoutes />
							</Layout>
						</BrowserRouter>
					</ColorProvider>
				</ThemeProvider>
			</FontProvider>
		</DashboardDataProvider>
	);
};
