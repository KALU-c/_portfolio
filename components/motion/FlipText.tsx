import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const FlipText = ({ children, className }: { children: string | React.ReactNode, className?: string }) => {
	return (
		<motion.div
			className="relative overflow-hidden cursor-pointer"
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

export const FlipMultipleText = ({ text1, text2, className1, className2 }: { text1: string, text2?: string, className1?: string, className2?: string }) => {
	return (
		<motion.div
			className="relative overflow-hidden cursor-pointer flex flex-row justify-between w-full"
			initial={"initial"}
			whileHover={"hovered"}
		>
			<div>
				<motion.div
					variants={{
						hovered: {
							y: "-100%"
						}
					}}
					transition={{ ease: "easeInOut", duration: 0.3 }}
					className={cn("tracking-tight", className1)}
				>
					{text1}
				</motion.div>
				<motion.div
					className={cn("absolute tracking-tight", className1)}
					variants={{
						hovered: {
							y: "-100%"
						}
					}}
					transition={{ ease: "easeInOut", duration: 0.3 }}
				>
					{text1}
				</motion.div>
			</div>


			<div>
				<motion.div
					variants={{
						hovered: {
							y: "-100%"
						}
					}}
					transition={{ ease: "easeInOut", duration: 0.3 }}
					className={cn("tracking-tight", className2)}
				>
					{text2}
				</motion.div>
				<motion.div
					className={cn("absolute tracking-tight", className2)}
					variants={{
						hovered: {
							y: "-100%"
						}
					}}
					transition={{ ease: "easeInOut", duration: 0.3 }}
				>
					{text2}
				</motion.div>
			</div>
		</motion.div>
	)
}

export default FlipText