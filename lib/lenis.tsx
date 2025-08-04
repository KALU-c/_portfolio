"use client"

import { ReactLenis } from "lenis/react"

export const Lenis = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReactLenis options={{ duration: 2 }} root>
			{children}
		</ReactLenis>
	)
}