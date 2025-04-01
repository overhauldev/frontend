import PageHeader from "@/components/Dashboard/Settings/PageHeader";
import PasswordChangeCard from "@/components/Dashboard/Settings/PasswordChangeCard";
import AccessibilityCard from "@/components/Dashboard/Settings/AccessibilityCard";
import AccountDetailsCard from "@/components/Dashboard/Settings/AccountDetailsCard";

const SettingsPage = () => {
	return (
		<div className="p-6 space-y-6">
			<PageHeader />
			<div className="flex flex-col md:flex-row gap-6">
				<PasswordChangeCard />
				<AccessibilityCard />
			</div>
			<AccountDetailsCard />
		</div>
	);
};

export default SettingsPage;
