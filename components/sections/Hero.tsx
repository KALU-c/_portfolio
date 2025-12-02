"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import Image from "next/image"
import { motion } from "motion/react"

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
	})

	return (
		<section>
			<div className="flex flex-col items-center md:justify-between justify-end leading-0 min-h-dvh py-28 max-md:gap-4">
				<div className="md:hidden relative h-[550px] w-full overflow-hidden rounded-2xl flex-1">
					<AnimatedImage
						src={"/1.png"}
						className="absolute w-full h-full object-cover"
						alt="my-img"
						whileHover={{ scale: 1.1 }}
						// transition={{ ease: "easeInOut", duration: 0.5 }}
						fill
					/>
				</div>
				<h1 className="text-[clamp(3rem,15vw,280px)] font-medium leading-none text-primary font-korium name">
					ENDEKALU ZEMENU
				</h1>

				<div className="self-center text-center font-medium tracking-tighter flex flex-col text-primary gap-4">
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
				</div>
			</div>
		</section>
	)
}

export default Hero