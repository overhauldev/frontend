import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<div className="fixed bottom-4 right-4 flex flex-col items-center">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" size="icon" style={{ cursor: "pointer" }}>
						<Sun
							className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
							style={{ cursor: "pointer" }}
						/>
						<Moon
							className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
							style={{ cursor: "pointer" }}
						/>
						<span className="sr-only">Toggle theme</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem
						onClick={() => setTheme("light")}
						style={{ cursor: "pointer" }}
					>
						Light
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => setTheme("dark")}
						style={{ cursor: "pointer" }}
					>
						Dark
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => setTheme("system")}
						style={{ cursor: "pointer" }}
					>
						System
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
