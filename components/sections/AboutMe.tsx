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

const AboutMe = () => {
	useGSAP(() => {
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
			filter: "blur(4px)"
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

		gsap.from('.about-me-desc', {
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

		gsap.from('.about-me-name', {
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
		<section className="py-40 px-10 flex flex-col gap-2 about-me-container">
			<div className="overflow-hidden flex flex-col">
				<div className="overflow-hidden">
					<h1 className="text-7xl font-korium font-light leading-none animate-about-me-text h-fit">
						About Me
					</h1>
				</div>
				<div className="overflow-hidden">
					<p className="text-muted-dark animate-about-me-text">
						Keeping things simple and meaningful is what I do.
					</p>
				</div>
			</div>

			<div className="py-10 flex flex-row gap-10">
				<div className="relative h-[500px] max-w-[450px] overflow-hidden rounded-2xl flex-1">
					<img
						src={"/1.png"}
						className="absolute w-full h-full object-cover animate-img"
					/>
				</div>

				<div className="flex flex-col justify-between flex-1 py-4">
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl font-medium tracking-tight font-telma about-me-name">Endekalu Zemenu - <span className="font-medium text-xl tracking-wider text-muted-dark">Fullstack Developer</span></h1>
						<p className="text-lg pr-20 text-muted-dark about-me-desc">
							I’m a full stack developer who enjoys building interfaces that feel effortless to use. I care about clean code, smooth interactions, and making sure every detail has a reason to exist. I mostly work with React, Next.js, and NestJS, and I love projects that balance design and logic. When I’m not coding, I’m probably experimenting with animations, experimenting with animations, trying new tools, or figuring out how to make tech feel less like tech.
						</p>
					</div>

					<div className="pt-8 flex flex-col gap-6">
						<div className="flex flex-row gap-6 text-muted-dark items-center">
							<p className="text-primary text-xl font-telma mr-4">Frontend - </p>
							<div className="flex flex-row gap-8 icons-1">
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
						<div className="flex flex-row gap-6 text-muted-dark items-center">
							<p className="text-primary text-xl font-telma mr-4">Backend - </p>
							<div className="flex flex-row gap-8 icons-1">
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

						<div className="flex flex-row gap-6 text-muted-dark items-center">
							<p className="text-primary text-xl font-telma mr-4">Tools - </p>
							<div className="flex flex-row gap-8 icons-1">
								<SiPrisma />
								<SiDocker />
								<SiGit />
								<SiGithub />
								<SiVercel />
								<SiFigma />
								<SiHostinger />
							</div>
						</div>

						<div className="flex flex-row gap-6 text-muted-dark items-center">
							<p className="text-primary text-xl font-telma mr-4">Database - </p>
							<div className="flex flex-row gap-8 icons-1">
								<SiPostgresql />
								<SiMongodb />
								<SiMysql />
								<SiSqlite />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default AboutMe