import React, { useState } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Define the schema using Zod
const bookingSchema = z.object({
	meetingType: z.enum(["Booking", "Consultation"], {
		required_error: "Meeting type is required",
	}),
	productInstall: z.string().optional(),
	date: z.string().optional(), // Placeholder for the date picker
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const BookingForm = () => {
	const [meetingType, setMeetingType] = useState<string>("");
	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm<BookingFormValues>({
		resolver: zodResolver(bookingSchema),
	});

	// Watch the meetingType field to conditionally show the productInstall dropdown
	const selectedMeetingType = watch("meetingType");

	// Handle form submission
	const onSubmit = (data: BookingFormValues) => {
		const formattedMessage = `${data.meetingType}
			${data.productInstall ? `${data.productInstall}` : ""}
			${data.date ? `${data.date}` : ""}
		`;

		console.log("Form Data:", data);
		toast("Booking created", {
			description: formattedMessage,
			action: {
				label: "Undo",
				onClick: () => {
					console.log("Undo action clicked");
				},
			},
			duration: 5000,
		});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 p-4 border rounded-md shadow-md"
		>
			{/* Meeting Type Dropdown */}
			<div>
				<label className="block text-sm font-medium text-foreground">
					Meeting Type
				</label>
				<select
					{...register("meetingType")}
					onChange={(e) => setMeetingType(e.target.value)}
					className="mt-1 block w-full rounded-md border-accent-foreground bg-background shadow-sm sm:text-sm"
				>
					<option value="">Select a meeting type</option>
					<option value="Booking">Booking</option>
					<option value="Consultation">Consultation</option>
				</select>
				{errors.meetingType && (
					<p className="text-red-500 text-sm mt-1">
						{errors.meetingType.message}
					</p>
				)}
			</div>

			{/* Product Install Dropdown (conditionally rendered) */}
			{selectedMeetingType === "Booking" && (
				<div>
					<label className="block text-sm font-medium text-foreground">
						Product Install
					</label>
					<select
						{...register("productInstall")}
						className="mt-1 block w-full rounded-md border-accent-foreground bg-background shadow-sm sm:text-sm"
					>
						<option value="">Select a product</option>
						<option value="Solar Panel Installation">
							Solar Panel Installation
						</option>
						<option value="Battery Storage Installation">
							Battery Storage Installation
						</option>
						<option value="EV Charger Installation">
							EV Charger Installation
						</option>
					</select>
					{errors.productInstall && (
						<p className="text-red-500 text-sm mt-1">
							{errors.productInstall.message}
						</p>
					)}
				</div>
			)}

			{/* Date Picker Placeholder */}
			<div>
				<label className="block text-sm font-medium text-foreground">
					Date
				</label>
				<div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 h-10 flex items-center justify-center text-gray-500">
					Date Picker Placeholder
				</div>
			</div>

			{/* Submit Button */}
			<Button type="submit">Submit</Button>
		</form>
	);
};

export default BookingForm;
