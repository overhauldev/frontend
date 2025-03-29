import { useEffect, useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

// Import components
import { AppSidebar } from "@/components/Dashboard/app-sidebar";
import { SiteHeader } from "@/components/Dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// Import content components for each section
import DashboardHome from "@/app/dashboard/pages/DashboardHome";
import CarbonTracker from "@/app/dashboard/pages/CarbonTracker";

export default function Page() {
	interface DashboardData {
		user: {
			username: string;
			email: string;
			user_id: string;
		};
	}

	const [dashboardData, setDashboardData] = useState<DashboardData | null>(
		null
	); // Store the fetched data
	const navigate = useNavigate();

	useEffect(() => {
		const fetchDashboardData = async () => {
			const token = localStorage.getItem("token");
			if (!token) {
				navigate("/login"); // Redirect to login if no token
				return;
			}

			try {
				const response = await fetch(
					`${import.meta.env.VITE_APP_API_URL}/dashboard`,
					{
						method: "GET",
						headers: {
							Authorization: token,
						},
					}
				);
				if (response.ok) {
					const data = await response.json();
					setDashboardData(data); // Store the fetched data
				} else {
					navigate("/login"); // Redirect to login if token is invalid
				}
			} catch (error) {
				console.error("Error fetching dashboard data:", error);
				navigate("/login");
			}
		};

		fetchDashboardData();
	}, [navigate]);

	if (!dashboardData) {
		return <div>Loading...</div>; // Show a loading state while data is being fetched
	}

	return (
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
				</Routes>
			</SidebarInset>
		</SidebarProvider>
	);
}
