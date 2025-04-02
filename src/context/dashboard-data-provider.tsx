// filepath: c:\Projects\shad-cn-tests\frontend\src\context\DashboardDataContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
interface DashboardData {
	user: {
		username: string;
		email: string;
		user_id: string;
	};
	carbonCalculations: {
		calc_id: number; // Unique ID for the calculation
		user_id: number; // ID of the user who made the calculation
		carbon_output: number; // Carbon output value
		date: string; // Timestamp of the calculation
		details: string | null; // Additional details about the calculation
	}[];
}
console.log("DashboardDataContext.tsx loaded"); // Debugging
interface DashboardDataContextProps {
	dashboardData: DashboardData | null;
	setDashboardData: React.Dispatch<React.SetStateAction<DashboardData | null>>;
}

const DashboardDataContext = createContext<
	DashboardDataContextProps | undefined
>(undefined);

export const DashboardDataProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [dashboardData, setDashboardData] = useState<DashboardData | null>(
		null
	);
	console.log("DashboardDataProvider initialized"); // Debugging

	useEffect(() => {
		const fetchDashboardData = async () => {
			const token = localStorage.getItem("token");
			if (!token) {
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
					setDashboardData(data);
					console.log("Fetched dashboard data:", data); // Debugging
				}
			} catch (error) {
				console.error("Error fetching dashboard data:", error);
			}
		};

		fetchDashboardData();
	}, []);

	return (
		<DashboardDataContext.Provider value={{ dashboardData, setDashboardData }}>
			{children}
		</DashboardDataContext.Provider>
	);
};

export const useDashboardData = () => {
	const context = useContext(DashboardDataContext);
	if (!context) {
		throw new Error(
			"useDashboardData must be used within a DashboardDataProvider"
		);
	}
	return context;
};
