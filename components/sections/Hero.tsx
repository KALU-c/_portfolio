"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import Image from "next/image"
import { motion } from "motion/react"
import { Button, MotionButton } from "../ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

const AnimatedImage = motion.create(Image)

const Hero = () => {
	useGSAP(() => {
		const splitTextName = SplitText.create(".name", { type: "chars", tag: "span", charsClass: "char" });
		const splitTextDesc2 = SplitText.create(".desc-2", { type: "words" });

		gsap.from(splitTextName.chars, {
			opacity: 0,
			stagger: {
				amount: 0.5,
				from: "random"
			},
			filter: "blur(16px)",
			ease: "power1.inOut",
			duration: 1,
			scale: 1.1
		});

		gsap.from(splitTextDesc2.words, {
			y: 100,
			opacity: 0,
			stagger: {
				amount: 0.5,
				from: "random"
			},
			filter: "blur(16px)",
			ease: "power1.inOut",
		})

		gsap.from(".button-div", {
			y: 100,
			opacity: 0,
			filter: "blur(16px)",
			delay: 0.5
		})
	})

	return (
		<section>
			<div className="flex flex-col items-center md:justify-evenly justify-end leading-0 min-h-dvh py-28 max-md:gap-4">
				<div className="md:hidden relative h-[550px] w-full overflow-hidden rounded-2xl flex-1">
					<AnimatedImage
						src={"https://framerusercontent.com/images/7P2v0b7fdEwf2A2lE1d37Fu8c.jpeg"}
						className="absolute w-full h-full object-cover"
						alt="my-img"
						whileHover={{ scale: 1.1 }}
						// transition={{ ease: "easeInOut", duration: 0.5 }}
						fill
						priority
					/>
				</div>
				<h1 className="text-[clamp(3rem,15vw,280px)] font-medium leading-none text-primary font-korium name">
					ENDEKALU ZEMENU
				</h1>

				<div className="self-center text-center font-medium tracking-tighter flex flex-col items-center text-primary gap-4">
					<div className="text-3xl text-muted-dark max-md:hidden">
						<span className="text-[clamp(1.875rem,1.5536rem+1.6071vw,3rem)] font-telma font-medium text-primary">Code, </span>
						<span className="text-[clamp(1.875rem,1.5536rem+1.6071vw,3rem)] font-telma font-medium text-primary">design, </span>
						and{" "}
						<span className="text-[clamp(1.875rem,1.5536rem+1.6071vw,3rem)] font-telma font-medium text-primary">flow, </span>
						<span className="text-3xl text-muted-dark">— all in one mind.</span>
					</div>

					<span className="text-muted-dark max-w-4xl desc-2 overflow-hidden">
						I love turning ideas into things people actually enjoy using. Whether it's designing clean interfaces or writing solid, maintainable code, I care about the little details that make the experience feel smooth and natural.
					</span>
					<div className="button-div">
						<Link
							href={"https://raw.githubusercontent.com/KALU-c/files/afb0b8bc9e8b19e426528f4160ad1d4aa835025d/Endekalu_Zemenu_Resume_2025.pdf"}
							target="_blank"
						>
							<MotionButton size={'lg'} className="w-fit">
								<Download className="mr-2" />
								Download Resume
							</MotionButton>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero