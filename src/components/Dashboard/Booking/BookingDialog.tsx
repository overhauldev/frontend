import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import BookingForm from "@/components/forms/booking-form"; // Adjust the import path as necessary

const BookingDialog = ({ children }: { children: React.ReactNode }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create a Booking</DialogTitle>
					<DialogDescription>
						Fill in the details below to create a new booking.
					</DialogDescription>
				</DialogHeader>
				<BookingForm /> {/* Add the form here */}
			</DialogContent>
		</Dialog>
	);
};

export default BookingDialog;
