
const NavBar = () => {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hour12: true }
	const today = new Date();

	return (
		<nav className="h-[45px] bg-muted rounded-b-2xl backdrop-blur-sm p-[6px]">
			<div className="flex-center">
				<h1 className="text-lg font-medium">Kalu&reg;</h1>
				<p className="text-muted-dark text-sm">{today.toLocaleString("en-US", options)}</p>
			</div>
			{/* <div>
				<Button variant={'secondary'}>About</Button>
				<Button variant={'secondary'}>Projects</Button>
				<Button variant={'secondary'}>Blog</Button>
			</div> */}
		</nav>
	)
}

export default NavBar
