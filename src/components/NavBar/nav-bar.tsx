import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<header className="sticky top-0 w-full border-b border-dashed border-primary">
			<div className="h-14 container flex items-center">
				<MainNav />
				<MobileNav />
				<Link to="/login" className="ml-auto">
					Login
				</Link>
			</div>
		</header>
	);
}
