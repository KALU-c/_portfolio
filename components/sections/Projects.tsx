"use client"

import { projects } from "@/constants/projects"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ProjectCard from "../ProjectCard"

const Projects = () => {
	useGSAP(() => {
		gsap.from('.animate-text', {
			scrollTrigger: {
				trigger: '.projects-container',
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
		<section className="flex flex-col gap-2 md:px-10 md:py-40 py-20 projects-container">
			<div className="overflow-hidden flex flex-col">
				<div className="overflow-hidden flex flex-row items-end justify-between">
					<h1 className="text-[clamp(3rem,2.5714rem+2.1429vw,4.5rem)] font-korium font-light leading-none animate-text h-fit text-center sm:text-start">
						Selected Projects
					</h1>

					<p className="text-lg text-muted-dark animate-text">(01)</p>
				</div>
				<div className="overflow-hidden">
					<p className="text-muted-dark animate-text text-center sm:text-start">
						A selection of projects that show my focus on simple, purposeful design with meaningful details.
					</p>
				</div>
			</div>
			<div className="py-10 grid lg:grid-cols-2 gap-6 grid-cols-1">

				{projects.map(({ title, description, src, year }, index) => (
					<ProjectCard
						key={index}
						title={title}
						description={description}
						src={src}
						year={year}
					/>
				))}
			</div>
		</section>
	)
}
export default Projects