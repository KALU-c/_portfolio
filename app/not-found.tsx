"use client"

import { MotionButton } from "@/components/ui/button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import Link from "next/link"

const NotFound = () => {
  useGSAP(() => {
    const splitTextName = SplitText.create(".name", { type: "chars", tag: "span", charsClass: "char" });

    gsap.from(splitTextName.chars, {
      opacity: 0,
      stagger: {
        amount: 0.5,
        from: "random"
      },
      filter: "blur(16px)",
      ease: "power1.inOut",
      duration: 1,
      scale: 1.1
    });
  })

  return (
    <div className='min-h-dvh flex flex-col items-center justify-center'>
      <h1 className="text-[clamp(3rem,20vw,280px)] font-medium leading-none text-primary font-korium name">
        404
      </h1>
      <h5 className="text-[clamp(1rem,5vw,280px)] font-medium leading-none text-primary font-korium">
        PAGE NOT FOUND
      </h5>

      <div className="flex gap-4 mt-6">
        <Link href={"/"}>
          <MotionButton>Back to home</MotionButton>
        </Link>
      </div>
    </div>
  )
}

export default NotFound