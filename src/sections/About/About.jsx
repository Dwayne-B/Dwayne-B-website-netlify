import { motion } from 'framer-motion';
import { React, useContext } from 'react';
import { SmoothScrollContext } from '../../Context/SmoothScrollContext';
import profile from '../../assets/profile.webp';
import resume from '../../assets/resume/DwayneAlexBynumJr.pdf';
import './About.scss';
function About() {
	const { aboutRef } = useContext(SmoothScrollContext);
	return (
		<div ref={aboutRef} className='about-container section'>
			<div className='about-content flex flex-col gap-5'>
				<picture>
					{/* lg-desktop */}
					<source
						media='(min-width: 650px)'
						srcSet={profile}
						width={125}
						height={125}
					/>
					{/* med-tablet */}
					<source
						media='(min-width: 465px)'
						srcSet={profile}
						width={125}
						height={125}
					/>
					{/* sm */}
					<img
						className='about-image'
						src={profile}
						alt='Example'
						width={125}
						height={125}
					/>
				</picture>
				<span>
					<h2>
						Hi, I’m Dwayne, Front-end Developer based in
						Orlando Florida.
					</h2>
					<p>
						I’m an enthusiastic developer with a knack for
						building easy-to-use web-based solutions. I
						enjoy all things JavaScript but generally you
						have my attention when it’s anything technology
						related. The most rewarding part of coding is to
						be able to bring ideas to reality!
					</p>
				</span>
				<span className='btn-container '>
					<a href='#projects'>
						<motion.button
							whileHover={{
								background:
									'linear-gradient(180deg,#34725d 0%,#081516 100%)',
							}}
							className='about-btn'>
							View Projects
						</motion.button>
					</a>
					<a href={resume} download>
						<motion.button
							whileHover={{
								background:
									'linear-gradient(180deg,#34725d 0%,#081516 100%)',
							}}
							className='about-btn'>
							Download Resume
						</motion.button>
					</a>
				</span>
				<div className='pt-20'>
					<h2>What I Do.</h2>
					<span className='pt-5 block'>
						<h3>Front end Development</h3>
						<p>
							I work with design assets to build responsive
							user-friendly websites and applications using
							modern technology and best practices.
						</p>
					</span>
					<span>
						<h3>Email Devlopment</h3>
						<p>
							I use HTML, CSS, and other coding languages to
							build responsive designs across various email
							clients and devices.
						</p>
					</span>
				</div>
			</div>
		</div>
	);
}

export default About;
