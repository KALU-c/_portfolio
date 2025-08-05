import { projects } from "@/constants/projects"
import ProjectCard from "../ProjectCard"

const Projects = () => {
	return (
		<div className="flex flex-col gap-2 px-10 py-40">
			<div>
				<h1 className="text-7xl font-korium font-light leading-none">Selected Projects</h1>
				<p className="text-muted-dark">A curated selection of projects that reflect my commitment to simplicity and purposeful design.</p>
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
		</div>
	)
}
export default Projects