import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Define the schema using Zod
const bookingSchema = z
	.object({
		meetingType: z.enum(["Booking", "Consultation"], {
			required_error: "Meeting type is required",
		}),
		productInstall: z.string().optional(),
		date: z
			.string({
				required_error: "Date is required",
			})
			.refine((value) => !isNaN(Date.parse(value)), {
				message: "Date must be in a valid format (e.g., YYYY-MM-DD)",
			}),
		time: z
			.string({
				required_error: "Time is required",
			})
			.refine((value) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(value), {
				message: "Time must be in a valid format (e.g., HH:mm)",
			}),
	})
	.refine((data) => data.meetingType !== "Booking" || data.productInstall, {
		message: "Product Install is required for Booking",
		path: ["productInstall"],
	});

type BookingFormValues = z.infer<typeof bookingSchema>;

const BookingForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<BookingFormValues>({
		resolver: zodResolver(bookingSchema),
	});

	// Watch the meetingType field to conditionally show the productInstall dropdown
	const selectedMeetingType = watch("meetingType");

	// Handle form submission
	const onSubmit = (data: BookingFormValues) => {
		// Combine date and time into a single datetime string
		const datetime = `${data.date}T${data.time}`;

		const formattedMessage = `
            Booking has been created with the following details:
            - Meeting Type: ${data.meetingType}
            ${
							data.productInstall
								? `- Product Install: ${data.productInstall}`
								: ""
						}
            - Date and Time: ${datetime}
        `;

		console.log("Form Data:", { ...data, datetime });
		toast(formattedMessage, {
			duration: 3000,
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

			{/* Date Input */}
			<div>
				<label className="block text-sm font-medium text-foreground">
					Date
				</label>
				<input
					type="date"
					{...register("date")}
					placeholder="Enter a date"
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
				/>
				{errors.date && (
					<p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
				)}
			</div>

			{/* Time Input */}
			<div>
				<label className="block text-sm font-medium text-foreground">
					Time
				</label>
				<input
					type="time"
					{...register("time")}
					placeholder="Enter a time"
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
				/>
				{errors.time && (
					<p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
				)}
			</div>

			{/* Submit Button */}
			<Button type="submit">Submit</Button>
		</form>
	);
};

export default BookingForm;
