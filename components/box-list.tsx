type Props = {
	id: string
	title: string
	description: string
}[]

const BoxList = ({ steps }: { steps: Props }) => {
	return (
		<div className="flex-1 flex flex-col gap-2 bg-muted p-2 rounded-md">
			{steps.map((step, index) => (
				<div key={`${step.id}-${index}`} className="flex flex-col gap-2 bg-background p-6 rounded-md">
					<div className="flex flex-row items-start justify-between">
						<h2 className="text-lg font-semibold text-primary">{step.title}</h2>
						<span className="text-sm text-muted-dark">0{index + 1}</span>
					</div>

					<p className="text-muted-dark">
						{step.description}
					</p>
				</div>
			))}
		</div>
	)
}

export default BoxList
