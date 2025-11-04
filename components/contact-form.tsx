"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/schema/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

type Schema = z.infer<typeof contactSchema>;

export function ContactUsForm() {
	const form = useForm<Schema>({
		resolver: zodResolver(contactSchema as any),
	});

	// const formAction = useAction(contactAction);

	// const handleSubmit = form.handleSubmit(async (data: Schema) => {
	// 	try {
	// 		toast.promise(formAction.executeAsync(data), {
	// 			loading: "Sending your message...",
	// 			success: "Message sent successfully! We'll get back to you soon.",
	// 			error: "Failed to send message. Please try again.",
	// 		});
	// 	} catch (error) {
	// 		console.error("Form submission error:", error);
	// 		toast.error("Unexpected error occurred. Please try again.");
	// 	}
	// });

	// const { isExecuting, hasSucceeded } = formAction;

	// if (hasSucceeded) {
	// 	return (
	// 		<div className="p-2 sm:p-5 md:p-8 w-full rounded-md gap-2 border">
	// 			<motion.div
	// 				initial={{ opacity: 0, y: -16 }}
	// 				animate={{ opacity: 1, y: 0 }}
	// 				transition={{ duration: 0.4, stiffness: 300, damping: 25 }}
	// 				className="h-full py-6 px-3"
	// 			>
	// 				<motion.div
	// 					initial={{ scale: 0.5 }}
	// 					animate={{ scale: 1 }}
	// 					transition={{
	// 						delay: 0.3,
	// 						type: "spring",
	// 						stiffness: 500,
	// 						damping: 15,
	// 					}}
	// 					className="mb-4 flex justify-center border rounded-full w-fit mx-auto p-2"
	// 				>
	// 					<Check className="size-8" />
	// 				</motion.div>
	// 				<h2 className="text-center text-2xl font-bold mb-2">
	// 					Thank You!
	// 				</h2>
	// 				<p className="text-center text-lg text-muted-foreground">
	// 					Your message has been sent successfully — our team will reach out soon.
	// 				</p>
	// 			</motion.div>
	// 		</div>
	// 	);
	// }

	return (
		<Card className="p-0">
			<Form {...form}>
				<form
					// onSubmit={handleSubmit}
					className="flex flex-col p-4 py-6 sm:p-5 md:p-8 md:px-5 w-full rounded-md gap-6 border"
				>
					<FormField
						control={form.control}
						name="full-name"
						rules={{ required: true }}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Full Name * </FormLabel>
								<FormControl>
									<Input
										type="text"
										// disabled={isExecuting}
										value={field.value}
										onChange={(e) => {
											const val = e.target.value;
											field.onChange(val);
										}}
										placeholder="Enter your full name"
										className="h-11 focus-visible:ring-[1px]"
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone-number"
						rules={{ required: true }}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Phone Number * </FormLabel>
								<FormControl>
									<PhoneInput
										type="tel"
										// disabled={isExecuting}
										placeholder="Enter your phone number"
										{...field}
										defaultCountry="ET"
										maxLength={17}
										minLength={9}
										className="h-11 focus-visible:ring-[1px]"
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						rules={{ required: false }}
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Email Address <span className="text-sm text-muted-foreground font-light">(optional)</span> </FormLabel>
								<FormControl>
									<Input
										type="email"
										// disabled={isExecuting}
										value={field.value}
										onChange={(e) => {
											const val = e.target.value;
											field.onChange(val);
										}}
										placeholder="Enter your email address"
										className="h-11 focus-visible:ring-[1px]"
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						rules={{ required: true }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Your Message * </FormLabel>
								<FormControl>
									<Textarea
										{...field}
										// disabled={isExecuting}
										placeholder="Type your message here..."
										className="resize-none min-h-[200px] focus-visible:ring-[1px]"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-end items-center w-full pt-3">
						<Button
							// disabled={isExecuting} 
							className="rounded-full"
							size="lg"
						>
							Send Message
						</Button>
					</div>
				</form>
			</Form>
		</Card>
	);
}
