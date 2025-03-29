import React from "react";
import { RouteObject } from "react-router-dom";

import LoadingPage from "@/pages/LoadingPage";
// Lazy load pages
const TestPage = React.lazy(() => import("@/pages/TestPage"));
const LandingPage = React.lazy(() => import("@/pages/LandingPage"));
const Dashboard = React.lazy(() => import("@/app/dashboard/Dashboard"));

export const routes: RouteObject[] = [
	{
		path: "/",
		element: (
			<React.Suspense fallback={<LoadingPage />}>
				<LandingPage />
			</React.Suspense>
		),
	},
	{
		path: "/login",
		element: (
			<React.Suspense fallback={<LoadingPage />}>
				<TestPage />
			</React.Suspense>
		),
	},
	{
		path: "/dashboard/*",
		element: (
			<React.Suspense fallback={<LoadingPage />}>
				<Dashboard />
			</React.Suspense>
		),
	},
];
