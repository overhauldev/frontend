import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useColor } from "@/components/color-provider";

export function ColorSelector() {
	const { color, setColor } = useColor();

	return (
		<div className="flex flex-col">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button>
						<span className="capitalize">{color} Theme</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem
						onClick={() => setColor("green")}
						style={{ cursor: "pointer" }}
					>
						Green
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => setColor("red")}
						style={{ cursor: "pointer" }}
					>
						Red
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => setColor("blue")}
						style={{ cursor: "pointer" }}
					>
						Blue
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => setColor("high-contrast")}
						style={{ cursor: "pointer" }}
					>
						High Contrast
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
