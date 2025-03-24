import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const [identifier, setIdentifier] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			const response = await fetch(
				`${import.meta.env.VITE_APP_API_URL}/login`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ identifier, password }),
				}
			);
			console.log({ identifier, password });
			const data = await response.json();
			if (response.ok) {
				console.log("Login successful:", data);
			} else {
				console.error("Login failed:", data);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Login to your account</CardTitle>
					<CardDescription>
						Enter your username or email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleLogin}>
						<div className="flex flex-col gap-6">
							<div className="grid gap-3">
								<Label htmlFor="identifier">Username/Email</Label>
								<Input
									id="identifier"
									type="text"
									value={identifier}
									onChange={(e) => setIdentifier(e.target.value)}
									required
								/>
							</div>
							<div className="grid gap-3">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<a
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
										Forgot your password?
									</a>
								</div>
								<Input
									id="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className="flex flex-col gap-3">
								<Button type="submit" className="w-full curser-pointer">
									Login
								</Button>
								<Button variant="outline" className="w-full">
									Login with Google
								</Button>
							</div>
						</div>
						<div className="mt-4 text-center text-sm">
							Don&apos;t have an account?{" "}
							<a href="#" className="underline underline-offset-4">
								Sign up
							</a>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
