import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PasswordChecklist from "react-password-checklist";
import { useState } from "react";

const PasswordChangeCard = () => {
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

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
						<Button>Update Password</Button>
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
