"use client"

import { projects } from "@/constants/projects"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ProjectCard from "../ProjectCard"
import { useRef } from "react"

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
		<section className="flex flex-col gap-2 md:px-10 py-40 projects-container">
			<div className="overflow-hidden flex flex-col">
				<div className="overflow-hidden">
					<h1 className="text-7xl font-korium font-light leading-none animate-text h-fit">
						Selected Projects
					</h1>
				</div>
				<div className="overflow-hidden">
					<p className="text-muted-dark animate-text">
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