import { Recycle } from "lucide-react";
import { Link } from "react-router-dom";

const MainNav = () => {
	return (
		<div className="hidden md:flex w-full items-center">
			<Link to="/" className="mr-auto">
				<Recycle className="w-8 h-8" />
			</Link>
			<nav className="flex items-center gap-3 lg:gap-4 ml-auto p-12">
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav>
		</div>
	);
};

export default MainNav;
