"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import FlipText from "../motion/FlipText"

const Footer = () => {
	useGSAP(() => {
		gsap.to('.footer', {
			marginLeft: 0,
			marginRight: 0,
			borderTopRightRadius: 0,
			borderTopLeftRadius: 0,
			scrollTrigger: {
				trigger: '.footer',
				start: 'top center',
				end: 'top top',
				scrub: true
			}
		})
	})

	return (
		<footer className="min-h-dvh bg-primary text-white flex flex-col items-center justify-center footer md:mx-[50px] xl:mx-[180px] mx-3 md:rounded-t-4xl rounded-t-3xl">
			<h1 className="text-[clamp(3rem,15vw,280px)] uppercase font-korium flex-1 max-md:pt-14">
				Endekalu Zemenu
			</h1>

			<div className="flex-1 flex flex-col justify-between w-full lg:px-[330px] px-3 pb-6">
				<div className="flex flex-col md:flex-row md:items-center max-md:gap-4 justify-between w-full">
					<p className="text-muted-foreground">
						Every project starts with a hello. Drop me a message and let’s see where it goes.
					</p>

					<div className="flex flex-col">
						<FlipText className="text-lg font-semibold">realkal.ez@gmail.com</FlipText>
						<FlipText className="text-sm text-muted-dark">+251 934 898 608</FlipText>
					</div>
				</div>

				<div className="flex md:flex-row items-end justify-between w-full">
					<div className="flex flex-col gap-1.5">
						<FlipText className="text-sm">Home</FlipText>
						<FlipText className="text-sm">About</FlipText>
						<FlipText className="text-sm">Projects</FlipText>
						<FlipText className="text-sm">Blog</FlipText>
						<FlipText className="text-sm">Contact</FlipText>
					</div>

					<div className="flex flex-col gap-1.5">
						<FlipText className="text-sm">Twitter/X</FlipText>
						<FlipText className="text-sm">LinkedIn</FlipText>
						<FlipText className="text-sm">Telegram</FlipText>
					</div>

					<div className="flex flex-col gap-1.5 max-sm:hidden">
						<p className="text-sm text-muted-foreground">Design By <Link href={'https://t.me/Real_Kal'}><span className="text-white cursor-pointer hover:text-white/70 ease-in-out duration-400">Endekalu</span></Link></p>

						<span className="text-sm text-muted-dark">@{new Date().getFullYear()} All right reserved</span>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer