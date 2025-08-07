import { Plus } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const AnimatedPlusIcons = motion.create(Plus);

type SlideTextProps = {
	text: string
	order?: number
	src: string
}

const SlideText = ({ text, order, src }: SlideTextProps) => {
	return (
		<motion.div
			initial={"initial"}
			whileHover={"hovered"}
			className="relative flex justify-between items-center cursor-pointer"
		>
			<Image
				src={src}
				alt="img-1"
				width={150}
				height={40}
				className="absolute left-0 object-cover rounded-md max-h-[60px]"
			/>
			<motion.h2
				className="text-5xl font-semibold tracking-tight z-10 bg-primary rounded-l-sm py-2"
				variants={{
					hovered: {
						x: 170
					}
				}}
				transition={{ ease: "easeInOut", duration: 0.5 }}
			>
				{text}
			</motion.h2>
			<div className="w-[60px] p-2 overflow-hidden">
				<motion.div
					variants={{
						hovered: { x: -67 }
					}}
					transition={{ ease: "easeInOut", duration: 0.5 }}
					className="flex justify-between min-w-[120px]">

					<h1 className="text-6xl text-muted-dark">{order}</h1>

					<AnimatedPlusIcons
						variants={{
							initial: { rotate: 45 },
							hovered: { rotate: 0 }
						}}
						transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
						size={60}
						className="text-muted-dark"
					/>
				</motion.div>
			</div>
		</motion.div>
	)
}
export default SlideText