// src/routes.tsx
import { RouteObject } from "react-router-dom";
import TestPage from "@/pages/TestPage";
import LandingPage from "@/pages/LandingPage";

export const routes: RouteObject[] = [
	{ path: "/", element: <TestPage /> },
	{ path: "/home", element: <LandingPage /> },
];
