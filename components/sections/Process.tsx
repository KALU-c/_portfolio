import { Plus } from "lucide-react"
import { MotionButton } from "../ui/button"

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

					<div className="flex-1 flex flex-col gap-2 bg-muted p-2 rounded-md">
						<div className="flex flex-col gap-2 bg-background p-6 rounded-md">
							<div className="flex flex-row items-start justify-between">
								<h2 className="text-[22px] font-medium text-primary">Discover</h2>
								<span className="text-sm text-muted-dark">1</span>
							</div>

							<p>
								I take time to understand the problem, the audience, and the goals. This phase sets the foundation for everything that follows.
							</p>
						</div>

						<div className="flex flex-col gap-2 bg-background p-6 rounded-md">
							<div className="flex flex-row items-start justify-between">
								<h2 className="text-[22px] font-medium text-primary">Plan</h2>
								<span className="text-sm text-muted-dark">2</span>
							</div>

							<p>
								With clarity in mind, I outline the structure, choose the right tools, and shape a roadmap tailored to the project's needs.
							</p>
						</div>

						<div className="flex flex-col gap-2 bg-background p-6 rounded-md">
							<div className="flex flex-row items-start justify-between">
								<h2 className="text-[22px] font-medium text-primary">Build</h2>
								<span className="text-sm text-muted-dark">3</span>
							</div>

							<p>
								I translate ideas into fast, accessible, and scalable code — with thoughtful design, clean logic, and performance in focus.
							</p>
						</div>

						<div className="flex flex-col gap-2 bg-background p-6 rounded-md">
							<div className="flex flex-row items-start justify-between">
								<h2 className="text-[22px] font-medium text-primary">Refine</h2>
								<span className="text-sm text-muted-dark">4</span>
							</div>

							<p>
								Once live, I iterate based on real feedback. From UX tweaks to performance boosts, I make sure it works beautifully.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Process