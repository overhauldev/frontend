import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";

import { ColorSelector } from "@/components/color-selector";

const AccessibilityCard = () => {
	return (
		<Card className="flex-1">
			<CardHeader>
				<CardTitle className="text-xl font-bold underline-soft">
					Accessibility
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<ColorSelector />
			</CardContent>
			<CardFooter className="text-sm text-accent-foreground">
				Customize the app's accessibility settings to suit your needs. You can
				change the light/dark mode with the selector bottom right of your
				screen.
			</CardFooter>
		</Card>
	);
};

export default AccessibilityCard;
