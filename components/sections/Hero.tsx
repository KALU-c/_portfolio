"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Hero = () => {
	useGSAP(() => {
		const splitTextName = SplitText.create(".name", { type: "chars", tag: "span", charsClass: "char" });
		// const splitTextDesc1 = SplitText.create(".desc-1", { type: "words", wordsClass: "words-1" })
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
			},
			ease: "power3"
		})

		// gsap.from(splitTextDesc1.words, {
		// 	opacity: 0,
		// 	filter: "blur(16px)",
		// 	scale: 1.1,
		// 	stagger: {
		// 		amount: 0.5,
		// 		from: "random"
		// 	}
		// })
	})

	return (
		<section>
			<div className="flex flex-col items-center justify-between leading-0 min-h-dvh py-28">
				<h1 className="text-[clamp(3rem,15vw,250px)] font-medium leading-none text-primary font-korium name">
					ENDEKALU ZEMENU
				</h1>
				<div className="self-center text-center font-medium tracking-tighter flex flex-col text-primary gap-4">
					<div className="text-3xl desc-1 text-muted-dark">
						<span className="text-5xl font-telma font-medium text-primary">Code, </span>
						<span className="text-5xl font-telma font-medium text-primary">design, </span>
						and{" "}
						<span className="text-5xl font-telma font-medium text-primary">flow, </span>
						<span className="text-3xl text-muted-dark">— all in one mind.</span>
					</div>

					<span className="text-muted-dark max-w-4xl desc-2">
						I love turning ideas into things people actually enjoy using. Whether it's designing clean interfaces or writing solid, maintainable code, I care about the little details that make the experience feel smooth and natural.
					</span>
				</div>
			</div>
		</section>
	)
}

export default Hero