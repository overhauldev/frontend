import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function CarbonTracker() {
	return (
		<div className="flex flex-col items-center justify-center p-4">
			<Card className="w-full max-w-4xl shadow-lg">
				<CardHeader>
					<CardTitle className="text-2xl font-bold">Carbon Tracker</CardTitle>
					<CardDescription className="text-lg">
						Track your carbon footprint using the calculator below.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="w-full">
						{/* Embed the iframe */}
						<iframe
							style={{
								width: "100%", // Full width of the parent container
								height: "80vh", // 80% of the viewport height
							}}
							frameBorder="0"
							scrolling="yes"
							src="https://calculator.carbonfootprint.com/calculator.aspx"
							className="border rounded-lg"
						></iframe>
					</div>
				</CardContent>
				<CardFooter>
					<p className="text-sm text-gray-500">
						Powered by Carbon Footprint Calculator.
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
