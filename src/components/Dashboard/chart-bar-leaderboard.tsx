"use client";
import { useDashboardData } from "@/context/dashboard-data-provider";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

export function ChartBarLeaderboard() {
	const { dashboardData } = useDashboardData();
	console.log("Dashboard Data:", dashboardData); // Debugging
	if (!dashboardData) {
		return <div>Loading...</div>;
	}

	// Get the most recent carbon footprint for the user
	const mostRecentCarbon = dashboardData.carbonCalculations.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	)[0];

	const worldAverageCarbon = 4.8; // Example world average carbon footprint
	const userCarbon = mostRecentCarbon ? mostRecentCarbon.carbon_output : 0;

	// Calculate the percentage difference from the world average
	const percentageDifference =
		((worldAverageCarbon - userCarbon) / worldAverageCarbon) * 100;

	// Update the "You" bar with the most recent carbon footprint
	const chartData = [
		{ country: "United Kingdom", carbon: 5 },
		{ country: "United States", carbon: 14.21 },
		{ country: "Japan", carbon: 8.89 },
		{ country: "China", carbon: 8.86 },
		{
			country: "You",
			carbon: userCarbon,
		},
	];

	return (
		<Card className="bg-background text-foreground shadow-lg flex-1">
			<CardHeader>
				<CardTitle>Average Carbon Footprint per Capita</CardTitle>
				<CardDescription>CO2 emissions per capita</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={{}}>
					<BarChart data={chartData} width={500} height={300}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="country"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
						/>
						<Tooltip content={<ChartTooltipContent hideLabel />} />
						<Bar
							dataKey="carbon"
							fill="var(--primary)" // Default bar color
							radius={[8, 8, 0, 0]} // Rounded corners
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="leading-none text-foreground">
					{userCarbon > 0 ? (
						<>
							<p>
								You are{" "}
								<strong>
									{Math.abs(percentageDifference).toFixed(1)}%
									{percentageDifference > 0 ? " below" : " above"}
								</strong>{" "}
								the world average per capita ({worldAverageCarbon} CO2).
							</p>
							{percentageDifference > 0 && (
								<p className="text-primary mt-4 font-bold">Well done!</p>
							)}
						</>
					) : (
						<p>No recent carbon data available.</p>
					)}
				</div>
			</CardFooter>
		</Card>
	);
}
