import Hamburger from 'hamburger-react';
import { useState } from 'react';
import Logo from '../../assets/logo.webp';
import resume from '../../assets/resume/DwayneAlexBynumJr.pdf';
function Nav() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className='Navbar flex justify-between items-center p-5 lg:px-16 z-[999]'>
			{isOpen ? (
				<div className=' absolute right-0 top-0 bg-black h-screen w-80 opacity-60  py-40 flex flex-col items-center gap-5 z-[-1] '>
					<a href='#home'>Home</a>
					<a href='#about'>About</a>
					<a href='#projects'>Projects</a>
					<a href='#contact'>Contact</a>
					<a href={resume} download>
						Get Resume
					</a>
				</div>
			) : null}
			<div className=''>
				<picture>
					{/* lg-desktop */}
					<source
						media='(min-width: 650px)'
						srcSet={Logo}
						width={20}
						height={20}
					/>
					{/* med-tablet */}
					<source
						media='(min-width: 465px)'
						srcSet={Logo}
						width={80}
						height={80}
					/>
					{/* sm */}
					<img
						className='logo'
						src={Logo}
						alt='Example'
						width={20}
						height={20}
					/>
				</picture>
			</div>
			<Hamburger
				className='z-[999]'
				color='#e7bd96'
				toggled={isOpen}
				toggle={setOpen}
			/>
		</div>
	);
}

export default Nav;
