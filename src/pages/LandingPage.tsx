import React from "react";
import NavBar from "@/components/NavBar/nav-bar";

const LandingPage = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<div className="flex flex-col items-center justify-center flex-1">
					<h1 className="text-4xl font-bold">Rolsa Technologies</h1>
					<p className="mt-4 text-lg">Help us beat climate change</p>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
