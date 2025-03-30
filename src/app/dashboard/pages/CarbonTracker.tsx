import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function CarbonTracker() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 h-screen">
			{/* Left Section: Calculator and User Input */}
			<div className="flex flex-col gap-4">
				{/* Carbon Footprint Calculator */}
				<Card className="w-full shadow-lg flex-1">
					<CardHeader>
						<CardTitle className="text-2xl text-center font-bold">
							Carbon Footprint Calculator
						</CardTitle>
						<CardDescription className="text-center">
							Use the calculator below to estimate your carbon footprint.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="w-full h-[50vh] md:h-[40vh]">
							<iframe
								className="w-full h-full border rounded-lg"
								frameBorder="0"
								scrolling="yes"
								src="https://calculator.carbonfootprint.com/calculator.aspx"
							></iframe>
						</div>
					</CardContent>
					<CardFooter>
						<p className="text-sm text-gray-500">
							Powered by Carbon Footprint Calculator.
						</p>
					</CardFooter>
				</Card>

				{/* User Input Section */}
				<Card className="w-full shadow-lg flex-1">
					<CardHeader>
						<CardTitle className="text-xl font-bold">Input Your Data</CardTitle>
						<CardDescription>
							Enter your details to save your carbon footprint.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form className="flex flex-col gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Vehicle Mileage (miles/month)
								</label>
								<input
									type="number"
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									placeholder="Enter miles"
								/>
							</div>
							<Button type="submit">Submit</Button>
						</form>
					</CardContent>
				</Card>
			</div>

			{/* Right Section: Graph */}
			<div className="flex items-center justify-center">
				<Card className="w-full h-full shadow-lg">
					<CardHeader>
						<CardTitle className="text-2xl text-center font-bold">
							Carbon Footprint Graph
						</CardTitle>
						<CardDescription className="text-center">
							Visualize your carbon footprint data.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="w-full h-[50vh] md:h-[80vh]">
							{/* Placeholder for Graph */}
							<div className="w-full h-full bg-gray-100 border rounded-lg flex items-center justify-center">
								<p className="text-gray-500">Graph will be displayed here.</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
