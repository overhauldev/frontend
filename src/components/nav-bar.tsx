import { useNavigate } from "react-router-dom";
import Logo from "./ui/logo";

const NavList = () => {
	return (
		<nav className="flex items-center justify-between">
			<ul className="flex items-center space-x-8">
				<li>
					<a href="/" className="text-foreground hover:text-gray-500">
						Home
					</a>
				</li>
				<li>
					<a href="#about" className="text-foreground hover:text-gray-500">
						About
					</a>
				</li>
				<li>
					<a href="/contact" className="text-foreground hover:text-gray-500">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

const NavBar = () => {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	};

	return (
		<header className="navbar bg-background fixed top-0 z-20 w-full flex items-center justify-between border-b border-accent p-8">
			<Logo />
			<NavList />
			<button
				className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded-xl cursor-pointer "
				onClick={handleLoginClick}
			>
				Login
			</button>
		</header>
	);
};

export default NavBar;
