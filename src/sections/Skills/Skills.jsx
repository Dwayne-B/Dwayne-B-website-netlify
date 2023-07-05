// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Suspense, lazy } from 'react';
import accent from '../../assets/accent.webp';
import phone from '../../assets/phone.png';
import css from '../../assets/tech-icons/css.webp';
import dynamodb from '../../assets/tech-icons/dynamodb.webp';
import express from '../../assets/tech-icons/express.webp';
import html from '../../assets/tech-icons/html.webp';
import javascript from '../../assets/tech-icons/js.webp';
import mongodb from '../../assets/tech-icons/mongodb.webp';
import nextjs from '../../assets/tech-icons/nextjs.webp';
import node from '../../assets/tech-icons/node.webp';
import postgres from '../../assets/tech-icons/postgres.webp';
import react from '../../assets/tech-icons/react.webp';
import sass from '../../assets/tech-icons/sass.webp';
import tailwind from '../../assets/tech-icons/tailwind.webp';
import typescript from '../../assets/tech-icons/ts.webp';
import webflow from '../../assets/tech-icons/webflow.webp';
import wix from '../../assets/tech-icons/wix.webp';
// import Ball from '../../comp/Ball/Ball';
import './Skills.scss';

function Skills() {
	// AOS.init();

	const skills = [
		{
			title: 'Front-end',
			skillNames: ['html', 'css', 'js'],
			urls: [html, css, javascript],
		},
		// {
		// 	title: 'Back-end',

		// 	skillNames: ['node'],
		// 	urls: [node],
		// },
		{
			title: 'Databases',
			skillNames: ['mongodb'],
			urls: [mongodb, dynamodb, postgres],
		},
		{
			title:
				'✨ Syntactic Sugar✨ , Frameworks & Libraries ',

			skillNames: [
				'react',
				'sass',
				'tailwind',
				'nextjs',
				'express',
				'typescript',
			],
			urls: [
				react,
				sass,
				tailwind,
				// nextjs,
				express,
				typescript,
			],
		},
		{
			title: 'No-Code',
			skillNames: ['wix,webflow'],

			urls: [wix, webflow],
		},
	];

	return (
		<div className='skills-container section '>
			<h2>Frequently Used Technology</h2>
			<div className='skill-content'>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
						stroke='white'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M12 8L8 12L12 16'
						stroke='white'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M16 12H8'
						stroke='white'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>

				<div>
					<img
						className='skill-image m-auto'
						src={phone}
						alt=''
					/>
					<div className='skill-data-container'>
						<span>
							<p className='text-left'>HTML</p>
							<div
								className='Group1'
								style={{
									width: 256,
									height: 8,
									position: 'relative',
								}}>
								<div
									style={{
										width: 256,
										height: 8,

										background: 'white',
										borderRadius: 12,
									}}
								/>
								<div
									style={{
										width: 198,
										height: 8,
										left: 0,
										top: 0,
										position: 'absolute',
										background: '#64E2B5',
										borderRadius: 12,
									}}
								/>
							</div>
						</span>
						<span>
							<p className='text-left'>CSS</p>
							<div
								className='Group1'
								style={{
									width: 256,
									height: 8,
									position: 'relative',
								}}>
								<div
									style={{
										width: 256,
										height: 8,

										background: 'white',
										borderRadius: 12,
									}}
								/>
								<div
									style={{
										width: 198,
										height: 8,
										left: 0,
										top: 0,
										position: 'absolute',
										background: '#64E2B5',
										borderRadius: 12,
									}}
								/>
							</div>
						</span>
						<span>
							<p className='text-left'>JavaScript</p>
							<div
								className='Group1'
								style={{
									width: 256,
									height: 8,
									position: 'relative',
								}}>
								<div
									style={{
										width: 256,
										height: 8,

										background: 'white',
										borderRadius: 12,
									}}
								/>
								<div
									style={{
										width: 198,
										height: 8,
										left: 0,
										top: 0,
										position: 'absolute',
										background: '#64E2B5',
										borderRadius: 12,
									}}
								/>
							</div>
						</span>
					</div>
				</div>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
						stroke='white'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M12 16L16 12L12 8'
						stroke='white'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M8 12H16'
						stroke='white'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</div>
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
