"use client"

import { ArrowUpRight } from "lucide-react";
import SlideText from "../motion/SlideText";
import { MotionButton } from "../ui/button";

const slideTexts = [
	{
		order: 1,
		src: "/1.png",
		text: "Web Development",
		tools: ["Next.js", "Tailwind CSS", "React", "TypeScript", "Javascript"],
		description: "I build fast, responsive websites that feel great to use and are easy to maintain, from landing pages to full-stack apps."
	},
	{
		order: 2,
		src: "/1.png",
		text: "App Development",
		tools: ["React Native (Expo)", "NestJS", "PostgreSQL", "Firebase", "Stripe"],
		description: "I create mobile apps that run smoothly on any device. Whether it's a simple MVP or a full product, I focus on speed, usability, and clean architecture."
	},
	{
		order: 3,
		src: "/1.png",
		text: "UI/UX Design",
		tools: ["Figma", "Tailwind CSS", "GSAP", "Motion/Framer Motion", "Lottie"],
		description: "I design clean, user-friendly interfaces that feel intuitive and look great. It's all about solving problems with thoughtful design."
	},
	{
		order: 4,
		src: "/1.png",
		text: "Backend Development",
		tools: ["NestJS", "PostgreSQL", "Prisma", "Supabase", "Node.js"],
		description: "I build reliable and scalable backend systems with clean architecture, secure APIs, and efficient database design."
	},
	{
		order: 5,
		src: "/1.png",
		text: "DevOps & Deployment",
		tools: ["Docker", "Vercel", "Railway", "Fly.io", "GitHub Actions"],
		description: "I handle deployment pipelines, containerization, and continuous integration to keep projects running smoothly and efficiently."
	},
	{
		order: 6,
		src: "/1.png",
		text: "System Architecture",
		tools: ["Redis", "Socket.io", "BullMQ", "Microservices", "PostGIS"],
		description: "I design scalable architectures capable of handling real-time data, background jobs, and large user bases with high performance."
	}
];

const Services = () => {
	return (
		<section className="min-h-dvh py-10 flex items-center justify-center">
			<div className="h-full w-full bg-primary text-white md:py-20 py-14 md:px-10 px-6 rounded-2xl">
				<div className="flex flex-col gap-4">
					<div className="flex flex-row items-center justify-between">
						<h1 className="text-lg">/Services</h1>
						<span className="text-muted-foreground">(03)</span>
					</div>

					<div className="flex flex-col gap-4 md:py-10 py-2">
						{slideTexts.map((slide) => (
							<SlideText key={`${slide.order}-service`} {...slide} />
						))}
					</div>

					<MotionButton
						size={'lg'}
						className="self-start bg-background text-primary hover:bg-background/90 rounded-full md:h-14 text-xl"
					>
						<span className="text-xl">Contact</span>
						<ArrowUpRight className="ml-2" />
					</MotionButton>
				</div>
			</div>
		</section>
	)
}
export default Services