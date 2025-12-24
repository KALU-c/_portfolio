"use client"

import { ProjectCardProps } from "@/types/project"
import { ArrowUpRightFromSquare } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { useState } from "react"

const ProjectCard = ({ title, description, src, year, link }: ProjectCardProps) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<motion.div
			className="p-2 flex flex-col gap-3 sm:h-[580px] h-[450px] rounded-2xl cursor-pointer"
			whileHover={{ backgroundColor: "#0a0a0a" }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			transition={{ ease: "easeInOut", duration: 0.5 }}
		>
			<motion.div
				animate={isHovered ? "hovered" : "initial"}
				className="w-full flex-[0.9] rounded-md overflow-hidden relative"
			>
				<motion.div
					variants={{
						hovered: { scale: 1.05 },
						initial: { scale: 0 }
					}}
					transition={{ ease: "easeInOut", duration: 0.3 }}
					className="absolute right-4 top-4 z-51"
				>
					<ArrowUpRightFromSquare className="text-white size-5" />
				</motion.div>
				<Link href={link} target="_blank">
					<motion.img
						src={src}
						alt="project-1"
						className="absolute inset-0 w-full h-full object-cover"
						variants={{
							hovered: {
								scale: 1.05
							},
							initial: {
								scale: 1
							}
						}}
						transition={{ ease: "easeInOut", duration: 0.5 }}
						// fetchPriority="high"
					/>
				</Link>
			</motion.div>


			<div className="w-full flex-[0.1] px-1 flex flex-col gap-[6px]">
				<motion.div
					animate={isHovered ? "hovered" : "initial"}
					transition={{
						duration: 1
					}}
					className="relative overflow-hidden"
				>
					<motion.div
						variants={{
							initial: { y: 0, opacity: 1 },
							hovered: { y: "-100%", opacity: 0 },
						}}
						transition={{ ease: "easeInOut", duration: 0.4, delay: 0.1 }}
						className="text-[18px] font-medium leading-none flex flex-row items-center justify-between"
					>
						<h1>{title}</h1>
						<p className="text-muted-dark text-sm">{year}</p>
					</motion.div>

					<motion.div
						variants={{
							initial: { y: "100%", opacity: 0 },
							hovered: { y: 0, color: "#FFFFFF", opacity: 1 },
						}}
						transition={{ ease: "easeInOut", duration: 0.4, delay: 0.1 }}
						className="absolute inset-0 text-[18px] font-medium leading-none flex flex-row items-center justify-between"
					>
						<h1>{title}</h1>
						<p className="text-muted-dark text-sm">{year}</p>
					</motion.div>
				</motion.div>

				<motion.div
					animate={isHovered ? "hovered" : "initial"}
					transition={{
						duration: 1
					}}
					className="relative overflow-hidden w-fit h-fit"
				>
					<motion.p
						variants={{
							initial: { y: 0, opacity: 1 },
							hovered: { y: "-100%", opacity: 0 }
						}}
						transition={{ ease: "easeInOut", duration: 0.4, delay: 0.1 }}
						className="text-sm text-muted-dark inset-0 leading-none"
					>
						{description}
					</motion.p>
					<motion.p
						variants={{
							initial: { y: "100%", opacity: 0 },
							hovered: { y: 0, color: "#d4d4d8", opacity: 1 }
						}}
						transition={{ ease: "easeInOut", duration: 0.4, delay: 0.1 }}
						className="absolute text-sm text-muted-dark inset-0 leading-none"
					>
						{description}
					</motion.p>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default ProjectCard
