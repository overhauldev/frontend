import { Routes, Route } from "react-router-dom";
import { useDashboardData } from "@/context/dashboard-data-provider";

// Import components
import { AppSidebar } from "@/components/Dashboard/app-sidebar";
import { SiteHeader } from "@/components/Dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// Import content components for each section
import DashboardHome from "@/app/dashboard/pages/DashboardHome";
import CarbonTracker from "@/app/dashboard/pages/CarbonTracker";
import SettingsPage from "@/app/dashboard/pages/SettingsPage";
import InfoPage from "@/app/dashboard/pages/InfoPage";

export default function Page() {
	const { dashboardData } = useDashboardData();
	if (!dashboardData) {
		return <div>Loading...</div>; // Show a loading state while data is being fetched
	}

	return (
		<>
			<SidebarProvider>
				<AppSidebar
					user={{
						name: dashboardData.user.username,
						email: dashboardData.user.email,
					}}
					variant="inset"
				/>
				<SidebarInset>
					<SiteHeader />
					<Routes>
						<Route path="/" element={<DashboardHome />} />
						<Route path="carbon-tracker" element={<CarbonTracker />} />
						<Route
							path="electricity-tracker"
							element={<div>Electricity Tracker</div>}
						/>
						<Route path="settings" element={<SettingsPage />} />
						<Route path="info" element={<InfoPage />} />
					</Routes>
				</SidebarInset>
			</SidebarProvider>
		</>
	);
}
