"use client"

import { useGSAP } from "@gsap/react"
import {
	SiCss,
	SiDocker,
	SiExpress,
	SiFigma,
	SiFirebase,
	SiGit,
	SiGithub,
	SiGreensock,
	SiHostinger,
	SiHtml5,
	SiJavascript,
	SiJest,
	SiMongodb,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiNginx,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiRedis,
	SiSqlite,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
	SiVercel
} from "@icons-pack/react-simple-icons"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { motion } from "motion/react"
import Image from "next/image"

const AnimatedImage = motion.create(Image)

const AboutMe = () => {
	useGSAP(() => {
		const splitTextDesc = SplitText.create('.about-me-desc', { type: 'lines' })

		gsap.from('.animate-about-me-text', {
			scrollTrigger: {
				trigger: '.about-me-container',
				scrub: true,
				start: 'top 90%',
				end: 'top 55%'
			},
			y: 200,
			duration: 0.5,
			opacity: 0,
			filter: "blur(4px)",
			scale: 0.8,
		})

		gsap.from('.animate-img', {
			y: 100,
			duration: 0.5,
			opacity: 0,
			scrollTrigger: {
				trigger: '.about-me-container',
				scrub: true,
				start: 'top 60%',
				end: 'top 40%',
			}
		})

		gsap.from(splitTextDesc.lines, {
			y: 100,
			duration: 0.5,
			opacity: 0,
			stagger: 0.05,
			filter: "blur(4px)",
			scrollTrigger: {
				trigger: '.about-me-container',
				scrub: true,
				start: 'top 60%',
				end: 'top 40%',
			}
		})

		gsap.from('.about-me-name', {
			y: 50,
			duration: 0.5,
			opacity: 0,
			filter: "blur(4px)",
			scrollTrigger: {
				trigger: '.about-me-container',
				scrub: true,
				start: 'top 60%',
				end: 'top 40%',
			}
		})

		gsap.from('.icons-1', {
			y: 100,
			duration: 2,
			opacity: 0,
			scrollTrigger: {
				trigger: '.about-me-container',
				scrub: true,
				start: 'top 35%',
				end: 'top 10%',
			}
		})
	})

	return (
		<section className="md:py-40 md:px-10 py-20 flex flex-col gap-2 about-me-container">
			<div className="overflow-hidden flex flex-col">
				<div className="overflow-hidden flex flex-row items-end justify-between">
					<h1 className="text-[clamp(3rem,2.5714rem+2.1429vw,4.5rem)] font-korium font-light leading-none animate-about-me-text h-fit text-center sm:text-start">
						About Me
					</h1>

					<p className="text-lg text-muted-dark animate-text animate-about-me-text">(02)</p>
				</div>
				<div className="overflow-hidden">
					<p className="text-muted-dark animate-about-me-text text-center sm:text-start">
						Keeping things simple and meaningful is what I do.
					</p>
				</div>
			</div>

			<div className="py-10 flex sm:flex-row flex-col gap-10">
				<div className="hidden sm:block relative h-[500px] max-w-[450px] overflow-hidden rounded-2xl flex-1">
					<AnimatedImage
						src={"/1.png"}
						className="absolute w-full h-full object-cover animate-img"
						alt="my-img"
						whileHover={{ scale: 1.1 }}
						transition={{ ease: "easeInOut", duration: 0.5 }}
						fill
					/>
				</div>

				<div className="flex flex-col justify-between flex-1 py-4">
					<div className="flex flex-col gap-4">
						{/* <h1 className="text-4xl font-medium tracking-tighter about-me-name">Endekalu Zemenu - <span className="font-medium text-xl tracking-wider text-muted-dark">Fullstack Developer</span></h1> */}
						<p className="text-lg pr-20 text-muted-dark about-me-desc">
							I’m a full stack developer who enjoys building interfaces that feel effortless to use. I care about clean code, smooth interactions, and making sure every detail has a reason to exist. I mostly work with React, Next.js, and NestJS, and I love projects that balance design and logic. When I’m not coding, I’m probably experimenting with animations, experimenting with animations, trying new tools, or figuring out how to make tech feel less like tech.
						</p>
					</div>

					<div className="pt-8 flex flex-col gap-6">
						<div className="flex flex-row gap-6 text-muted-dark sm:items-center items-start icons-1">
							<p className="text-primary text-xl font-medium mr-4">Database - </p>
							<div className="flex flex-row gap-8 flex-wrap">
								<SiPostgresql />
								<SiMongodb />
								<SiMysql />
								<SiSqlite />
							</div>
						</div>

						<div className="flex flex-row gap-6 text-muted-dark sm:items-center items-start icons-1">
							<p className="text-primary text-xl font-medium mr-4">Tools - </p>
							<div className="flex flex-row gap-8 flex-wrap">
								<SiPrisma />
								<SiDocker />
								<SiGit />
								<SiGithub />
								<SiVercel />
								<SiFigma />
								<SiHostinger />
							</div>
						</div>

						<div className="flex flex-row gap-6 text-muted-dark sm:items-center items-start icons-1">
							<p className="text-primary text-xl font-medium mr-4">Backend - </p>
							<div className="flex flex-row gap-8 flex-wrap">
								<SiNextdotjs />
								<SiNestjs />
								<SiExpress />
								<SiNodedotjs />
								<SiSupabase />
								<SiFirebase />
								<SiNginx />
								<SiRedis />
							</div>
						</div>


						<div className="flex flex-row gap-6 text-muted-dark sm:items-center items-start icons-1">
							<p className="text-primary text-xl font-medium mr-4">Frontend - </p>
							<div className="flex flex-row gap-8 flex-wrap">
								<SiHtml5 />
								<SiCss />
								<SiTailwindcss />
								<SiJavascript className="rounded-xs" />
								<SiTypescript className="rounded-xs" />
								<SiReact />
								<SiNextdotjs />
								<SiGreensock />
								<SiJest />
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}
export default AboutMe