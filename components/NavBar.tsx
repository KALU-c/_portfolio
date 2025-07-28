import { Button, MotionButton } from "@/components/ui/button";
import { Plus } from "lucide-react";

const NavBar = () => {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hour12: true }
	const today = new Date();

	return (
		<nav className="h-[45px] bg-muted/90 backdrop-blur-sm rounded-b-2xl p-[6px] sticky top-0 z-50 flex-between">
			<div className="flex-center gap-2">
				<h1 className="text-lg font-medium">Kalu&reg;</h1>
				<p className="text-muted-dark text-sm">{today.toLocaleString("en-US", options)}</p>
			</div>

			<div className="flex-center gap-4">
				<MotionButton size={"noPadding"} variant={"transparent"} textClassName="text-[14px]">About</MotionButton>
				<MotionButton size={"noPadding"} variant={"transparent"} textClassName="text-[14px]">Projects</MotionButton>
				<MotionButton size={"noPadding"} variant={"transparent"} textClassName="text-[14px]">Blog</MotionButton>
				<MotionButton textClassName="text-[14px]" className="rounded-full h-7">Contact</MotionButton>
				<Button size={"icon"} className="bg-white rounded-full p-0 hover:bg-white"><Plus color="#000" size={24} /></Button>
			</div>
		</nav>
	)
}

export default NavBar
