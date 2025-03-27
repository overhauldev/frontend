// src/routes.tsx
import { RouteObject } from "react-router-dom";
import TestPage from "@/pages/TestPage";
import LandingPage from "@/pages/LandingPage";
import Dashboard from "@/pages/Dashboard";

export const routes: RouteObject[] = [
	{ path: "/", element: <LandingPage /> },
	{ path: "/home", element: <LandingPage /> },
	{ path: "/login", element: <TestPage /> },
	{ path: "/dashboard", element: <Dashboard /> },
];
