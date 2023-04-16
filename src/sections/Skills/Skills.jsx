// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Suspense, lazy } from 'react';
import accent from '../../assets/accent.webp';
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

const BallCanvas = lazy(() =>
	import('../../comp/BallCanvas/BallCanvas'),
);
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
			<picture>
				{/* lg-desktop */}
				<source
					media='(min-width: 650px)'
					srcSet={accent}
					width={600}
					height={600}
				/>
				{/* med-tablet */}
				<source
					media='(min-width: 465px)'
					srcSet={accent}
					width={800}
					height={800}
				/>
				{/* sm */}
				<img
					className='skills-accent-image '
					src={accent}
					alt='Example'
					width={600}
					height={600}
				/>
			</picture>
			<div id='skills' className='skills-content'>
				<h2>Technology</h2>
				<div
					data-aos='fade-up'
					className='skills-tech-container '>
					{skills.map((skill, i) => {
						return (
							<div className='skills-bg' key={i}>
								<label htmlFor=''>{skill.title}</label>
								<div className='canvas  h-fit flex '>
									{skill.urls.map((url, i) => {
										return (
											<Suspense key={i}>
												<BallCanvas url={url} id={i} />
											</Suspense>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
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
