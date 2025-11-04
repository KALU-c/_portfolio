import { z } from "zod";

export interface ActionResponse<T = any> {
	success: boolean;
	message: string;
	errors?: {
		[K in keyof T]?: string[];
	};
	inputs?: T;
}

export const contactSchema = z.object({
	"full-name": z
		.string({ error: "Full name is required" })
		.min(2, "Full name must be at least 2 characters long"),
	"phone-number": z
		.string("Please enter a valid phone number as text.")
		.min(6, "Phone number must be at least 6 digits")
		.max(20, "Phone number must be at most 20 digits"),
	email: z.email({ error: "Please enter a valid email" }).optional(),
	message: z
		.string({ error: "This field is required" })
		.min(5, "Message should be at least 5 characters long"),
});
