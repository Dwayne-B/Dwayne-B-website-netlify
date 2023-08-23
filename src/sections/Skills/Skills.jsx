// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
import { motion } from 'framer-motion';
import { Suspense, lazy, useState } from 'react';
import css from '../../assets/tech-icons/css.webp';
import express from '../../assets/tech-icons/express.webp';
import gulp from '../../assets/tech-icons/gulp.webp';
import jest from '../../assets/tech-icons/jest.webp';

import figma from '../../assets/tech-icons/figma.webp';
import html from '../../assets/tech-icons/html.webp';
import javascript from '../../assets/tech-icons/js.webp';
import mongodb from '../../assets/tech-icons/mongodb.webp';
import nextjs from '../../assets/tech-icons/next.webp';
import node from '../../assets/tech-icons/node.webp';
import postgres from '../../assets/tech-icons/postgres.webp';
import react from '../../assets/tech-icons/react.webp';
import sass from '../../assets/tech-icons/sass.webp';
import tailwind from '../../assets/tech-icons/tailwind.webp';
import typescript from '../../assets/tech-icons/ts.webp';
import webflow from '../../assets/tech-icons/webflow.webp';
import wix from '../../assets/tech-icons/wix.webp';

import SlideShow from '../../comp/SlideShow/SlideShow';
import './Skills.scss';
function Skills() {
	// AOS.init();
	const [CurrentSlide, setCurrentSlide] = useState(0);
	const skills = [
		{
			title: 'Front-end ',
			skillNames: ['HTML', 'CSS', 'JavaScript', 'React'],
			urls: [html, css, javascript, react],
		},
		{
			title: 'Back-end ',

			skillNames: ['Node.js'],
			urls: [node],
		},
		{
			title: 'Databases ',
			skillNames: ['MongoDB'],
			urls: [mongodb],
		},
		{
			title:
				'Frameworks & Libraries ',

			skillNames: [
				'SASS',
				'Tailwind',
				'Next.js',
				'Express.js',
				'TypeScript',
			],
			urls: [sass, tailwind, nextjs, express, typescript],
		},
		{
			title: 'No-Code',
			skillNames: ['Wix' ],

			urls: [wix, ],
		},
		{
			title: 'Design Tools',
			skillNames: ['Figma'],
			urls: [figma],
		},
		// {
		// 	title: 'Task Runners',
		// 	skillNames: ['Gulp.js'],
		// 	urls: [gulp],
		// },
		// {
		// 	title: 'Testing',
		// 	skillNames: ['Jest'],
		// 	urls: [jest],
		// },
	];

	const handleSlideChange = (e) => {
		if (
			e.target.id === 'increase' &&
			CurrentSlide != skills.length - 1
		) {
			setCurrentSlide((prev) => ++prev);
		} else if (
			e.target.id === 'decrease' &&
			CurrentSlide <= skills.length - 1 &&
			CurrentSlide != 0
		) {
			setCurrentSlide((prev) => --prev);
		} else if (
			e.target.id === 'decrease' &&
			CurrentSlide === 0
		) {
			setCurrentSlide((prev) => {
				prev = 0;
				return prev;
			});
		} else {
			setCurrentSlide((prev) => prev);
		}
	};
	return (
		<div className='skills-container section '>
			<h2>Tools I like to Use</h2>
			<motion.div
				initial={{ opacity: 0, y: 200 }}
				whileInView={{ opacity: 1, y: 0, delay: 0.4 }}
				className='skill-content'>
				<motion.svg
					id='decrease'
					onClick={(e) => {
						handleSlideChange(e);
					}}
					whileTap={{ scale: 0.8 }}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M12 8L8 12L12 16'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M16 12H8'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</motion.svg>

				<div className='slideshow-cnt'>
					<SlideShow
						CurrentSlide={CurrentSlide}
						skill={skills}
					/>
				</div>
				<motion.svg
					id='increase'
					onClick={(e) => {
						handleSlideChange(e);
					}}
					whileTap={{ scale: 0.8 }}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M12 16L16 12L12 8'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M8 12H16'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</motion.svg>
			</motion.div>
		</div>
	);
}

export default Skills;

/*
***
<ul id='FE' className='skills-icons-cnt'>
									 <label htmlFor=''>{skill.title}</label>
									<li className='w-50'>
										{skill.urls.map((url, i) => {
											return (
												<img
													className='skill-images'
													src={url}
													alt='skill'
												/>
												<Ball url={url} id={i} />
											);
										})}
									</li>
								</ul>***
*
*/
