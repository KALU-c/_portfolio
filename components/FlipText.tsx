import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const FlipText = ({ children, className }: { children: string | React.ReactNode, className?: string }) => {
	return (
		<motion.div
			className="relative overflow-hidden cursor-default"
			initial={"initial"}
			whileHover={"hovered"}
		>
			<motion.div
				variants={{
					hovered: {
						y: "-100%"
					}
				}}
				transition={{ ease: "easeInOut", duration: 0.3 }}
				className={cn("tracking-tight", className)}
			>
				{children}
			</motion.div>
			<motion.div
				className={cn("absolute tracking-tight", className)}
				variants={{
					hovered: {
						y: "-100%"
					}
				}}
				transition={{ ease: "easeInOut", duration: 0.3 }}
			>
				{children}
			</motion.div>
		</motion.div>
	)
}
export default FlipText