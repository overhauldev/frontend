import { LoginForm } from "@/components/login-form";
import { ModeToggle } from "@/components/mode-toggle";
export default function Test() {
	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm">
				<LoginForm />
				<ModeToggle />
			</div>
		</div>
	);
}
