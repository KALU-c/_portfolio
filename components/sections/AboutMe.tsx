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
						className="absolute w-full h-full object-cover"
					/>
				</div>

				<div className="flex flex-col justify-between flex-1 py-4">
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl font-medium tracking-tight font-telma">Endekalu Zemenu - <span className="font-medium text-xl tracking-wider text-muted-dark">Fullstack Developer</span></h1>
						<p className="text-lg pr-20 text-muted-dark">
							I’m a <span className="text-primary text-lg">full stack developer who enjoys building interfaces that feel effortless to use.</span> I care about <span className="text-primary text-lg">clean code, smooth interactions,</span> and making sure every detail has a reason to exist. I mostly work with<span className="text-primary text-lg"> React, Next.js, and NestJS,</span> and I love projects that balance design and logic. When I’m not coding, I’m probably <span className="text-primary text-lg">experimenting with animations,</span> experimenting with animations, trying new tools, or <span className="text-primary text-lg">figuring out how to make tech feel less like tech.</span>
						</p>
					</div>

					<div className="pt-8 flex flex-col gap-6">
						<div className="flex flex-row gap-6 text-muted-dark items-center">
							<p className="text-primary text-xl font-telma mr-4">Frontend - </p>
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
						<div className="flex flex-row gap-6 text-muted-dark items-center">
							<p className="text-primary text-xl font-telma mr-4">Backend - </p>
							<SiNextdotjs />
							<SiNestjs />
							<SiExpress />
							<SiNodedotjs />
							<SiSupabase />
							<SiFirebase />
							<SiNginx />
							<SiRedis />
						</div>

						<div className="flex flex-row gap-6 text-muted-dark items-center">
							<p className="text-primary text-xl font-telma mr-4">Tools - </p>
							<SiPrisma />
							<SiDocker />
							<SiGit />
							<SiGithub />
							<SiVercel />
							<SiFigma />
							<SiHostinger />
						</div>

						<div className="flex flex-row gap-6 text-muted-dark items-center">
							<p className="text-primary text-xl font-telma mr-4">Database - </p>
							<SiPostgresql />
							<SiMongodb />
							<SiMysql />
							<SiSqlite />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default AboutMe