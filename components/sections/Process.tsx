import { Plus } from "lucide-react"
import BoxList from "../box-list"
import { MotionButton } from "../ui/button"

const processSteps = [
	{
		id: 'process-01',
		title: "Discover",
		description: "I take time to understand the problem, the audience, and the goals. This phase sets the foundation for everything that follows."
	},
	{
		id: 'process-02',
		title: "Plan",
		description: "With clarity in mind, I outline the structure, choose the right tools, and shape a roadmap tailored to the project's needs."
	},
	{
		id: 'process-03',
		title: "Build",
		description: "I translate ideas into fast, accessible, and scalable code — with thoughtful design, clean logic, and performance in focus."
	},
	{
		id: 'process-04',
		title: "Refine",
		description: "Once live, I iterate based on real feedback. From UX tweaks to performance boosts, I make sure it works beautifully."
	},
]

const Process = () => {
	return (
		<section className="min-h-dvh sm:px-10 flex flex-col items-center justify-center overflow-hidden">
			<div className="flex flex-col">
				<div className="flex flex-row items-center justify-between">
					<p className="text-lg">/Process</p>
					<span className="text-muted-dark">(04)</span>
				</div>

				<div className="flex flex-row justify-between py-10 gap-20">
					<div className="flex flex-col gap-10 flex-1">
						<div className="flex flex-col gap-3">
							<h1 className="text-5xl font-medium tracking-tight">
								My process is clear, intentional, and flexible.
							</h1>
							<p>I believe great work comes from deep understanding, open collaboration, and attention to detail.</p>
						</div>
						<MotionButton className="self-start rounded-full bg-muted text-primary hover:bg-muted-foreground/80">
							Let's talk
							<Plus className="ml-2" />
						</MotionButton>
					</div>

					<BoxList steps={processSteps} />
				</div>
			</div>
		</section>
	)
}
export default Process