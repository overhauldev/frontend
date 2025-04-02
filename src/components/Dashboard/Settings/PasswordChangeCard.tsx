import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PasswordChecklist from "react-password-checklist";
import { useState } from "react";
import { toast } from "sonner";

const PasswordChangeCard = () => {
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handlePasswordChange = async () => {
		if (newPassword !== confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		try {
			const token = localStorage.getItem("token");

			const response = await fetch(
				`${import.meta.env.VITE_APP_API_URL}/password`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `${token}`, // Include the token
					},
					body: JSON.stringify({ currentPassword, newPassword }),
				}
			);

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || "Failed to update password");
			}

			toast.success("Password updated successfully!");
			setCurrentPassword("");
			setNewPassword("");
			setConfirmPassword("");
		} catch (error) {
			console.error("Error updating password:", error);
			toast.error(
				(error instanceof Error
					? error.message
					: "An unknown error occurred") || "Failed to update password"
			);
		}
	};

	return (
		<Card className="flex-1">
			<CardHeader>
				<CardTitle className="text-xl font-bold underline-soft">
					Password Change
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Password Inputs */}
					<div className="space-y-4">
						<div>
							<Label htmlFor="current-password" className="pb-1">
								Current Password
							</Label>
							<Input
								id="current-password"
								type="password"
								placeholder="Enter current password"
								value={currentPassword}
								onChange={(e) => setCurrentPassword(e.target.value)}
							/>
						</div>
						<div>
							<Label htmlFor="new-password" className="pb-1">
								New Password
							</Label>
							<Input
								id="new-password"
								type="password"
								placeholder="Enter new password"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
							/>
						</div>
						<div>
							<Label htmlFor="confirm-password" className="pb-1">
								Confirm Password
							</Label>
							<Input
								id="confirm-password"
								type="password"
								placeholder="Confirm new password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
						<Button onClick={handlePasswordChange}>Update Password</Button>
					</div>

					{/* Password Requirements */}
					<div>
						<PasswordChecklist
							className="text-sm"
							rules={["minLength", "specialChar", "number", "capital", "match"]}
							minLength={8}
							value={newPassword}
							valueAgain={confirmPassword}
							messages={{
								minLength: "At least 8 characters",
								specialChar: "At least one special character",
								number: "At least one number",
								capital: "At least one uppercase letter",
								match: "Passwords match",
							}}
						/>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default PasswordChangeCard;
