import { useIsMobile } from "@/hooks/use-mobile";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "../ui/badge";

const AnimatedPlusIcons = motion.create(Plus);

type SlideTextProps = {
	text: string
	order?: number
	src: string
	description: string
	tools: string[]
}

const SlideText = ({ text, order, src, description, tools }: SlideTextProps) => {
	const [open, setOpen] = useState(false);
	const isMobile = useIsMobile()

	return (
		<motion.div
			initial={"initial"}
			whileHover={"hovered"}
			className="flex flex-col justify-start cursor-pointer overflow-hidden"
			animate={isMobile ? { height: open ? 280 : 50 } : { height: open ? 200 : 75 }}
			transition={{ ease: "easeInOut", duration: 0.5 }}
			onClick={() => setOpen(!open)}
		>
			<div className="relative flex justify-between items-center">
				<Image
					src={src}
					alt="img-1"
					width={150}
					height={40}
					className="absolute left-0 object-cover rounded-md sm:max-h-[45px] max-sm:hidden"
				/>
				<motion.h2
					className="sm:text-4xl text-2xl font-semibold tracking-tight z-10 bg-primary rounded-l-sm py-2 line-clamp-1"
					variants={{
						hovered: {
							x: 170
						}
					}}
					animate={!isMobile && open ? { x: 170 } : { x: 0 }}
					transition={{ ease: "easeInOut", duration: 0.5 }}
				>
					{text}
				</motion.h2>
				<div className="w-[60px] p-2 overflow-hidden">
					<motion.div
						variants={{
							hovered: { x: -67 }
						}}
						animate={open ? { x: -67 } : { x: 0 }}
						transition={{ ease: "easeInOut", duration: 0.5 }}
						className="flex justify-between max-sm:px-4 min-w-[120px]">

						<h1 className="sm:text-6xl text-4xl text-muted-dark">{order}</h1>

						<AnimatedPlusIcons
							variants={{
								initial: { rotate: 45 },
								hovered: { rotate: !open ? 0 : -45 }
							}}
							animate={open ? { rotate: -45 } : { rotate: 0 }}
							transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
							size={isMobile ? 40 : 60}
							className="text-muted-dark"
						/>
					</motion.div>
				</div>
			</div>

			<AnimatePresence>
				{open && (
					<div className="overflow-hidden">
						<motion.div
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ ease: "easeInOut", duration: 0.5 }}
							exit={{ opacity: 0, y: -100, transition: { ease: "easeInOut", duration: 0.5 } }}
							className="flex md:flex-row flex-col max-sm:gap-4 md:pl-[170px] justify-between py-8"
						>
							<p className="max-w-2xl text-muted-foreground sm:text-lg text-base">
								{description}
							</p>

							<div className="flex flex-row md:justify-end gap-2 flex-wrap max-w-lg">
								{tools.map((tool, index) => (
									<SlideTextBadge key={index}>{tool}</SlideTextBadge>
								))}
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

const SlideTextBadge = ({ children }: { children: React.ReactNode }) => {
	return (
		<Badge className="sm:text-sm text-xs bg-background text-primary px-4 h-7">
			{children}
		</Badge>
	)
}

export default SlideText