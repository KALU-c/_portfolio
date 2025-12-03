"use client"

import { motion } from "motion/react"
import Image from "next/image"

const logos = [
	'/logo/css.svg',
	'/logo/docker.svg',
	'/logo/express.svg',
	'/logo/figma.svg',
	'/logo/firebase.svg',
	'/logo/github.svg',
	'/logo/githubactions.svg',
	'/logo/greensock.svg',
	'/logo/html5.svg',
	'/logo/javascript.svg',
	'/logo/jsonwebtokens.svg',
	'/logo/linux.svg',
	'/logo/mysql.svg',
	'/logo/nestjs.svg',
	'/logo/nextdotjs.svg',
	'/logo/nginx.svg',
	'/logo/postgresql.svg',
	'/logo/prisma.svg',
	'/logo/react.svg',
	'/logo/reactquery.svg',
	'/logo/redis.svg',
	'/logo/socketdotio.svg',
	'/logo/supabase.svg',
	'/logo/tailwindcss.svg',
	'/logo/typescript.svg',
]

// TODO - make the selection background transparent
const LogoMarquee = () => {
	return (
		<div className="relative py-4 overflow-hidden rounded-xl">
			<div className="absolute inset-0 z-20 flex justify-between">
				<div className="w-8 md:w-60 h-full bg-gradient-to-r from-background to-transparent" />
				<div className="w-8 md:w-60 h-full bg-gradient-to-l from-background to-transparent" />
			</div>
			<div className="flex">
				<motion.div
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{ duration: 100, ease: "linear", repeat: Infinity }}
					className="flex items-center justify-between md:gap-20 flex-shrink-0"
				>
					{logos.map((logo, index) => (
						<Image
							src={logo}
							alt={`${logo}-${index}`}
							className="max-md:h-6 max-md:w-6 h-8 w-8 mr-10 sepia opacity-70"
							width={50}
							height={50}
							key={index}
						/>
					))}
				</motion.div>

				<motion.div
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{ duration: 100, ease: "linear", repeat: Infinity }}
					className="flex items-center justify-between flex-shrink-0"
				>
					{logos.map((logo, index) => (
						<Image
							src={logo}
							alt={`${logo}-${index}`}
							className="max-md:h-6 max-md:w-6 h-8 w-8 mr-10 sepia opacity-40"
							width={50}
							height={50}
							key={index}
						/>
					))}
				</motion.div>
			</div>
		</div>
	)
}

export default LogoMarquee
