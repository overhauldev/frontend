import PageHeader from "@/components/Dashboard/Settings/PageHeader";
import PasswordChangeCard from "@/components/Dashboard/Settings/PasswordChangeCard";
import AccessibilityCard from "@/components/Dashboard/Settings/AccessibilityCard";
import AccountDetailsCard from "@/components/Dashboard/Settings/AccountDetailsCard";
import { useState } from "react";

const SettingsPage = () => {
	const [accountDetails, setAccountDetails] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
		address: "",
		zipCode: "",
	});

	const handleAccountDetailsChange = (field: string, value: string) => {
		setAccountDetails((prevDetails) => ({
			...prevDetails,
			[field]: value,
		}));
	};

	const updateAccountDetails = () => {
		console.log("Updating account details:", accountDetails);
	};

	return (
		<div className="p-6 space-y-6">
			<PageHeader />
			<div className="flex flex-col md:flex-row gap-6">
				<PasswordChangeCard />
				<AccessibilityCard />
			</div>
			<AccountDetailsCard
				accountDetails={accountDetails}
				handleAccountDetailsChange={handleAccountDetailsChange}
				updateAccountDetails={updateAccountDetails}
			/>
		</div>
	);
};

export default SettingsPage;
