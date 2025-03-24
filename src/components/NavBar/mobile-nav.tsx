import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Recycle } from "lucide-react";
import { Link } from "react-router-dom";
const MobileNav = () => {
	return (
		<div className="md:hidden">
			<Sheet>
				<SheetTrigger className="cursor-pointer">
					<Menu />
				</SheetTrigger>
				<SheetContent side="left" className="p-6">
					<Link to="/">
						<Recycle className="w-8 h-8" />
					</Link>
					<nav className="flex flex-col gap-3 lg:gap-4 mt-6">
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link>
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileNav;
