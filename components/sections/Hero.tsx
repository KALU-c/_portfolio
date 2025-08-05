"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Hero = () => {
	useGSAP(() => {
		const splitTextName = SplitText.create(".name", { type: "chars", tag: "span", charsClass: "char" });

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
	})

	return (
		<section>
			<div className="flex flex-col items-center justify-between leading-0 min-h-dvh py-28">
				<h1 className="text-[clamp(3rem,15vw,250px)] font-medium leading-none text-primary font-korium name">
					ENDEKALU ZEMENU
				</h1>
				<div className="self-center text-center font-medium tracking-tighter flex flex-col text-primary gap-2">
					<div>
						<span className="text-3xl">
							<span className="text-5xl font-telma font-medium">Code, </span>
							<span className="text-5xl font-telma font-medium">design, </span>
							and{" "}
							<span className="text-5xl font-telma font-medium">flow, </span>
						</span>
						<span className="text-3xl leading-snug">— all in one mind.</span>
					</div>
					<span className="text-muted-dark max-w-4xl">
						I love turning ideas into things people actually enjoy using. Whether it's designing clean interfaces or writing solid, maintainable code, I care about the little details that make the experience feel smooth and natural.
					</span>
				</div>
			</div>
		</section>
	)
}

export default Hero