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
						<span className="text-muted-foreground">(04)</span>
					</div>

					<div className="flex flex-col gap-4 py-10">
						<SlideText
							text="Web Development"
							src="/1.png"
							order={1}
						/>
						<SlideText
							text="App Development"
							src="/1.png"
							order={2}
						/>
						<SlideText
							text="UI/UX Design"
							src="/1.png"
							order={3}
						/>
						<SlideText
							text="Optimization"
							src="/1.png"
							order={4}
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