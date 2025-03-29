import * as React from "react";

import { NavMain } from "@/components/Dashboard/nav-main";
import { NavSecondary } from "@/components/Dashboard/nav-secondary";
import { NavUser } from "@/components/Dashboard/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar({
	user,
	...props
}: React.ComponentProps<typeof Sidebar> & {
	user: { name: string; email: string }; // Expect "name" and "email"
}) {
	const data = {
		user: {
			name: user.name,
			email: user.email,
		},
		navMain: [
			{ title: "Dashboard", url: "/dashboard" },
			{ title: "Carbon Tracker", url: "/dashboard/carbon-tracker" },
			{ title: "Electricity Tracker", url: "/dashboard/electricity-tracker" },
		],
		navSecondary: [{ title: "Settings", url: "/dashboard/settings" }],
	};

	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5 cursor-pointer"
						>
							<a href="#">
								<span className="text-base font-semibold">Rolsa</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
