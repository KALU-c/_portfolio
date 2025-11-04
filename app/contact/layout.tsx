import NavBar from '@/components/NavBar'
import Footer from '@/components/sections/Footer'

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<div className="md:px-[50px] xl:px-[180px] px-3">
				<NavBar />
				{children}
			</div>
			<Footer />
		</main>
	)
}

export default ContactLayout
