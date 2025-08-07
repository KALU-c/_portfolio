"use client"

import { ArrowUpRight } from "lucide-react"
import SlideText from "../motion/SlideText"
import { MotionButton } from "../ui/button"


const Services = () => {
	return (
		<section className="min-h-dvh py-10 flex items-center justify-center">
			<div className="h-full w-full bg-primary text-white py-20 px-10 rounded-2xl">
				<div className="flex flex-col gap-4">
					<div className="flex flex-row items-center justify-between">
						<h1 className="text-lg">/Services</h1>
						<span className="text-muted-foreground">(03)</span>
					</div>

					<div className="flex flex-col gap-4 py-10">
						<SlideText
							order={1}
							src="/1.png"
							text="Web Development"
							tools={["Next.js", "Tailwind CSS", "React", "TypeScript", "Javascript"]}
							description="I build fast, responsive websites that feel great to use and are easy to maintain. From landing pages to full-stack apps, everything is designed to scale and perform."
						/>
						<SlideText
							order={2}
							src="/1.png"
							text="App Development"
							tools={["React Native (Expo)", "NestJS", "PostgreSQL", "Firebase", "Stripe"]}
							description="I create mobile apps that run smoothly on any device. Whether it's a simple MVP or a full product, I focus on speed, usability, and clean architecture."
						/>
						<SlideText
							order={3}
							src="/1.png"
							text="UI/UX Design"
							description="I design clean, user-friendly interfaces that feel intuitive and look great. It's all about solving problems with thoughtful design."
							tools={["Figma", "Tailwind CSS", "GSAP", "Motion/Framer Motion", "Lottie"]}
						/>
						<SlideText
							order={4}
							src="/1.png"
							text="Optimization"
							tools={["Vercel Analytics", "SEO Tools", "Redis", "Responsive Design", "Code Splitting"]}
							description="I make things faster, smoother, and more accessible — from performance tweaks to SEO improvements and responsive fixes."
						/>
					</div>

					<MotionButton
						size={'lg'}
						className="self-start bg-background text-primary hover:bg-background/90 rounded-full h-14 text-xl"
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