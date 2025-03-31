import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const AccountDetailsCard = ({
	accountDetails,
	handleAccountDetailsChange,
	updateAccountDetails,
}: {
	accountDetails: {
		name: string;
		username: string;
		email: string;
		phone: string;
		zipCode: string;
		address: string;
	};
	handleAccountDetailsChange: (field: string, value: string) => void;
	updateAccountDetails: () => void;
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl font-bold underline-soft">
					Account Details
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<Label htmlFor="name" className="pb-1">
							Name
						</Label>
						<Input
							id="name"
							placeholder="Enter your name"
							value={accountDetails.name}
							onChange={(e) =>
								handleAccountDetailsChange("name", e.target.value)
							}
						/>
					</div>
					<div>
						<Label htmlFor="username" className="pb-1">
							Username
						</Label>
						<Input
							id="username"
							placeholder="Enter your username"
							value={accountDetails.username}
							onChange={(e) =>
								handleAccountDetailsChange("username", e.target.value)
							}
						/>
					</div>
					<div>
						<Label htmlFor="email" className="pb-1">
							Email
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="Enter your email"
							value={accountDetails.email}
							onChange={(e) =>
								handleAccountDetailsChange("email", e.target.value)
							}
						/>
					</div>
					<div>
						<Label htmlFor="phone" className="pb-1">
							Phone Number
						</Label>
						<Input
							id="phone"
							type="tel"
							placeholder="Enter your phone number"
							value={accountDetails.phone}
							onChange={(e) =>
								handleAccountDetailsChange("phone", e.target.value)
							}
						/>
					</div>
					<div>
						<Label htmlFor="zipCode" className="pb-1">
							Zip Code
						</Label>
						<Input
							id="zipCode"
							placeholder="Enter your zip code"
							value={accountDetails.zipCode}
							onChange={(e) =>
								handleAccountDetailsChange("zipCode", e.target.value)
							}
						/>
					</div>
					<div>
						<Label htmlFor="address" className="pb-1">
							Address
						</Label>
						<Input
							id="address"
							placeholder="Enter your address"
							value={accountDetails.address}
							onChange={(e) =>
								handleAccountDetailsChange("address", e.target.value)
							}
						/>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button onClick={updateAccountDetails}>Save Changes</Button>
			</CardFooter>
		</Card>
	);
};

export default AccountDetailsCard;
