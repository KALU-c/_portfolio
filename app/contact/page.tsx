"use client"

import { ContactUsForm } from "@/components/contact-form";
import FlipText from "@/components/motion/FlipText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
	return (
		<div className="min-h-dvh flex justify-center items-center lg:px-28">
			<ContactUsPageContent />
		</div>
	)
}

const ContactUsPageContent = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-between gap-16 w-full">
			<div className="lg:flex-1 flex flex-col gap-10">
				<div className="flex flex-col flex-1 gap-6">
					<div className="flex flex-col">
						<h2 className="text-6xl font-semibold tracking-tight">Contact me</h2>
						<p className="text-lg font-light text-muted-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, non?</p>
					</div>

					<div className="flex gap-24">
						<div>
							<p className="text-lg font-semibold">Phone</p>
							<Link href={"tel:+251934898608"}>
							<FlipText className="text-muted-dark">+251 934 898 608</FlipText>
							</Link>
						</div>
						<div>
							<p className="text-lg font-semibold">Email</p>
							<Link href={"mailto:endekaluzemenu6@gmail.com"}>
								<FlipText className="text-muted-dark">endekaluzemenu6@gmail.com</FlipText>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:flex-1">
				<ContactUsForm />
			</div>
		</div>
	)
}

export default ContactPage
