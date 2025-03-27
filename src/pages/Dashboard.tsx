import { AppSidebar } from "@/components/Dashboard/app-sidebar";
import { ChartAreaInteractive } from "@/components/Dashboard/chart-area-interactive";
import { DataTable } from "@/components/Dashboard/data-table";
import { SectionCards } from "@/components/Dashboard/section-cards";
import { SiteHeader } from "@/components/Dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Template data for testing purposes
const data = [
	{
		header: "Header 1",
		id: 1,
		type: "Type 1",
		status: "Status 1",
		target: "Target 1",
		limit: "Limit 1",
		reviewer: "Reviewer 1",
		name: "Product 1",
		description: "Description for product 1",
		price: 100,
		category: "Category 1",
		image_url: "https://via.placeholder.com/150",
	},
	{
		header: "Header 2",
		id: 2,
		type: "Type 2",
		status: "Status 2",
		target: "Target 2",
		limit: "Limit 2",
		reviewer: "Reviewer 2",
		name: "Product 2",
		description: "Description for product 2",
		price: 200,
		category: "Category 2",
		image_url: "https://via.placeholder.com/150",
	},
	{
		header: "Header 3",
		id: 3,
		type: "Type 3",
		status: "Status 3",
		target: "Target 3",
		limit: "Limit 3",
		reviewer: "Reviewer 3",
		name: "Product 3",
		description: "Description for product 3",
		price: 300,
		category: "Category 3",
		image_url: "https://via.placeholder.com/150",
	},
];

export default function Page() {
	const [userId, setUserId] = useState(null);
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
					setUserId(data.userId); // Set user ID from the response
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
	return (
		<SidebarProvider>
			<AppSidebar variant="inset" />
			<SidebarInset>
				<SiteHeader />
				<div>
					<h1>Welcome to the Dashboard</h1>
					{userId && <p>Your User ID: {userId}</p>}
				</div>
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							<SectionCards />
							<div className="px-4 lg:px-6">
								<ChartAreaInteractive />
							</div>
							<DataTable data={data} />
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
