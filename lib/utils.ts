import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToView(section: string) {
  const element = document.querySelector(`.${section}`)

  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
}