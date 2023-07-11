import { motion } from 'framer-motion';
import React from 'react';
import './slideshow.scss';
function SlideShow({ skill }) {
	console.log(skill);

	return (
		<div className='slide-show-container'>
			{skill.map((sk, i) => {
				console.log(sk);
				const slides = (
					<div className='slide-container'>
						{sk.urls.map((url, i) => {
							return <img src={url} alt='' srcset='' />;
						})}
					</div>
				);
				return slides;
			})}
		</div>
	);
}

export default SlideShow;
