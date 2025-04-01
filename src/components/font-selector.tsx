import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFont } from "@/components/font-provider";

export function FontSelector() {
	const { font, setFont } = useFont();

	return (
		<div className="flex flex-col items-center">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">
						<span className="capitalize">{font} Font</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onClick={() => setFont("primary")}>
						Primary Font
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setFont("secondary")}>
						Secondary Font
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setFont("tertiary")}>
						Tertiary Font
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setFont("quaternary")}>
						Quaternary Font
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
