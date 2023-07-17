import { motion } from 'framer-motion';
import React from 'react';
import './slideshow.scss';
function SlideShow({ CurrentSlide, skill }) {
	console.log(CurrentSlide);

	return (
		<motion.div className='slide-show-container'>
			<motion.div className='slide-container   '>
				<h4>{skill[CurrentSlide].title}</h4>

				<motion.div className='slide-icons-container'>
					{skill[CurrentSlide].urls.map((url, i) => {
						return (
							<motion.div key={i}>
								<motion.img
									className='skill-icon'
									whileHover={{ scale: 1.25 }}
									src={url}
									alt='skill-icons'
									width={50}
									height={50}
								/>
								<div>
									<small>
										{' '}
										{skill[CurrentSlide].skillNames[i]}{' '}
									</small>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default SlideShow;
