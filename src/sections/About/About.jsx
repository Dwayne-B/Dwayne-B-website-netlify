import { motion } from 'framer-motion';
import { React, useContext } from 'react';
import profile from '../../assets/profile.png';
import resume from '../../assets/resume/DwayneAlexBynumJr.pdf';
import './About.scss';
function About() {
	return (
		<div
			id='about'
			className='about-container section overflow-hidden'>
			<div className='about-content flex flex-col m-auto gap-5'>
				<motion.picture
					initial={{
						opacity: -1,
						zIndex: 0,
					}}
					whileInView={{
						zIndex: -1,
						opacity: 1,
					}}>
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
				</motion.picture>
				<motion.div>
					<motion.h2>
						Hi, I’m{' '}
						<motion.span
							initial={{
								scale: 1,
								y: 0,
							}}
							whileInView={{
								scale: 1.25,
								y: -30,
							}}
							className='name	'>
							Dwayne
						</motion.span>
						, Front-end{' '}
						<motion.span
							initial={{
								scale: 1,
								y: 0,
							}}
							whileInView={{
								scale: 1.25,
								y: -30,
							}}>
							Developer
						</motion.span>{' '}
						based in Orlando, Florida.
					</motion.h2>
					<p>
						I’m an enthusiastic developer with a passion for
						building easy-to-use web-based solutions. I
						enjoy all things JavaScript and I have a deep
						interest in sustainable living and music. I love
						coding because it allows me to bring complex
						ideas to reality!
					</p>
				</motion.div>
				<div className='btn-container '>
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
				</div>
				<div className='about-secondary-content'>
					<h2>What I Do.</h2>
					<div className=''>
						<p>
							I work with design assets to build responsive
							user-friendly websites and applications using
							modern technology.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
