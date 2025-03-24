import React from "react";
import NavBar from "@/components/nav-bar";

const LandingPage = () => {
	return (
		<div className="min-h-screen flex flex-col ">
			<NavBar />
			<div className="flex flex-col items-center justify-center flex-1">
				<h1 className="text-4xl font-bold">Welcome to the landing page</h1>
				<p className="mt-4 text-lg">This is the landing page</p>
			</div>
		</div>
	);
};

export default LandingPage;
