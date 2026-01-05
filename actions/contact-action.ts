"use server"

import { actionClient } from "@/lib/safe-action"
import { contactSchema } from "@/schema/contact-schema"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

const transport = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MY_EMAIL,
		pass: process.env.MY_PASSWORD
	}
})

export const sendEmail = actionClient
	.inputSchema(contactSchema)
	.action(async ({ parsedInput }) => {
		const mailOptions: Mail.Options = {
			from: process.env.MY_EMAIL,
			to: process.env.MY_EMAIL,
			subject: `Message from Your Portfolio Website`,
			text: `Full Name: ${parsedInput["full-name"]}\n\nMessage: \n${parsedInput.message} \n\n\nEmail Address: ${parsedInput.email}\nPhone Number: ${parsedInput["phone-number"]}`
		}

		const sendMailPromise = () =>
			new Promise<string>((resolve, reject) => {
				transport.sendMail(mailOptions, function (err) {
					if (!err) {
						resolve('Email sent');
					} else {
						reject(err.message);
					}
				});
			});

		try {
			await sendMailPromise();
			return {
				success: true,
				message: "Email sent successfully"
			}
		} catch (error) {
			console.error(error)
			return {
				success: false,
				message: "Error while sending email"
			}
		}
	})