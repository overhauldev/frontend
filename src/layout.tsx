import { ReactNode } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/sonner";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="relative min-h-screen">
			{/* Light Mode Background */}
			<div className="absolute inset-0 -z-10 bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:hidden"></div>

			{/* Dark Mode Background */}
			<div className="absolute inset-0 -z-10 hidden dark:block bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

			{/* App Content */}
			{children}

			{/* Mode Toggle */}
			<ModeToggle />

			{/* Notifications */}
			<Toaster position="bottom-center" />
		</div>
	);
};
