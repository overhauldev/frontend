import React, { useEffect, useState } from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type AccountDetailsFormValues = {
	id?: string;
	name: string;
	username: string;
	email: string;
	phone: string;
	zipCode: string;
	address: string;
};

const AccountDetailsCard = () => {
	const [loading, setLoading] = useState(true);
	const form = useForm<AccountDetailsFormValues>({
		defaultValues: {
			name: "",
			username: "",
			email: "",
			phone: "",
			zipCode: "",
			address: "",
		},
	});

	// Fetch account details on mount
	useEffect(() => {
		const fetchAccountDetails = async () => {
			try {
				const token = localStorage.getItem("token");
				const response = await fetch(
					`${import.meta.env.VITE_APP_API_URL}/account`,
					{
						method: "GET",
						headers: {
							Authorization: `${token}`, // Include the token
						},
					}
				);

				if (!response.ok) {
					throw new Error("Failed to fetch account details");
				}

				const data = await response.json();
				console.log("Fetched account details:", data);

				// Update the form's default values with the fetched data
				form.reset(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching account details:", error);
				toast.error("Failed to fetch account details. Please try again.");
				setLoading(false);
			}
		};

		fetchAccountDetails();
	}, [form]);

	const onSubmit = async (data: AccountDetailsFormValues) => {
		console.log("Form submitted with data:", data);
		try {
			const token = localStorage.getItem("token");

			const response = await fetch(
				`${import.meta.env.VITE_APP_API_URL}/account`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `${token}`, // Include the token here
					},
					body: JSON.stringify(data),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to update account details");
			}

			const result = await response.json();
			console.log("Account details updated successfully:", result);
			toast.success("Account details updated successfully!");
		} catch (error) {
			console.error("Error updating account details:", error);
			toast.error("Failed to update account details. Please try again.");
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl font-bold underline-soft">
					Account Details
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{/* Name */}
							<FormItem>
								<FormLabel htmlFor="name">Name</FormLabel>
								<FormControl>
									<Input
										id="name"
										{...form.register("name", { required: "Name is required" })}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>

							{/* Username */}
							<FormItem>
								<FormLabel htmlFor="username">Username</FormLabel>
								<FormControl>
									<Input
										id="username"
										{...form.register("username", {
											required: "Username is required",
										})}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>

							{/* Email */}
							<FormItem>
								<FormLabel htmlFor="email">Email</FormLabel>
								<FormControl>
									<Input
										id="email"
										type="email"
										{...form.register("email", {
											required: "Email is required",
											pattern: {
												value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
												message: "Invalid email address",
											},
										})}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>

							{/* Phone */}
							<FormItem>
								<FormLabel htmlFor="phone">Phone Number</FormLabel>
								<FormControl>
									<Input
										id="phone"
										type="tel"
										{...form.register("phone", {
											required: "Phone number is required",
										})}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>

							{/* Zip Code */}
							<FormItem>
								<FormLabel htmlFor="zipCode">Zip Code</FormLabel>
								<FormControl>
									<Input
										id="zipCode"
										{...form.register("zipCode", {
											required: "Zip code is required",
										})}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>

							{/* Address */}
							<FormItem>
								<FormLabel htmlFor="address">Address</FormLabel>
								<FormControl>
									<Input
										id="address"
										{...form.register("address", {
											required: "Address is required",
										})}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</div>
						<CardFooter>
							<Button type="submit">Save Changes</Button>
						</CardFooter>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default AccountDetailsCard;
