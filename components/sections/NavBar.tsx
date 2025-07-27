
const NavBar = () => {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hour12: true }
	const today = new Date();

	return (
		<nav className="h-[45px] bg-muted/90 backdrop-blur-sm rounded-b-2xl p-[6px] sticky top-0 z-50">
			<div className="flex-center">
				<h1 className="text-lg font-medium">Kalu&reg;</h1>
				<p className="text-muted-dark text-sm">{today.toLocaleString("en-US", options)}</p>
			</div>
		</nav>
	)
}

export default NavBar
