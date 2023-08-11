import { motion } from 'framer-motion';
import React from 'react';
import './ProjectCard.scss';

function ProjectCard({ url, title, tech, github, demo }) {
	// AOS.init();
	return (
		<span className='projectCard ' data-aos='flip-left'>
			<img
				className='project-img'
				src={url}
				alt={title}
				height={100}
				width={100}
			/>
			<div className='projectCard-content'>
				{<h4>{title}</h4>}
				<p>Made With:</p>
				<div className='tech-container'>
					<ul className='tech-icons'>
						{tech.map((i, index) => {
							return (
								<li key={index}>
									<motion.img
										whileHover={{ rotateZ: 350 }}
										className='tech-icon'
										src={i}
										height={35}
										width={35}
										alt='tech-icon'
									/>
								</li>
							);
						})}
					</ul>
					<div className='projectCard-btn-contianer '>
						{/* <a target='_blank ' href={github}>
							<motion.button
								whileHover={{
									background:
										'linear-gradient(180deg,#34725d 0%,#081516 100%)',
								}}>
								Docs
							</motion.button>
						</a> */}

						<a href={demo?demo:"#contact"}
								target={demo?"_blank":""}>
							<motion.button
								whileHover={{
									background:
										'linear-gradient(180deg,#34725d 0%,#081516 100%)',
								}}
								href={demo?demo:"#contact"}
								target={demo?"_blank":""}>
								{demo?"Live Demo":"Request Demo"}
							</motion.button>
						</a>
					</div>
				</div>
			</div>
		</span>
	);
}

export default ProjectCard;
