// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from 'react';
import accent from '../../assets/accent.webp';
import Activi from '../../assets/projects/Activi.webp';
import ModernEmail from '../../assets/projects/Modern-email.webp';
import baseApparel from '../../assets/projects/base-apparel.webp';
import clipboard from '../../assets/projects/clipboard.webp';
import Cookbook from '../../assets/projects/cookbook.webp';
import loopstudio from '../../assets/projects/loopstudio.webp';
import lwk from '../../assets/projects/lwk.webp';
import sunnySide from '../../assets/projects/sunnyside.webp';
import css from '../../assets/tech-icons/css.webp';
import express from '../../assets/tech-icons/express.webp';
import html from '../../assets/tech-icons/html.webp';
import javascript from '../../assets/tech-icons/js.webp';
import mongo from '../../assets/tech-icons/mongodb.webp';
import node from '../../assets/tech-icons/node.webp';
import ReactUrl from '../../assets/tech-icons/react.webp';
import wix from '../../assets/tech-icons/wix-light.webp';
import ProjectCard from '../../comp/ProjectCard/ProjectCard';
import './Projects.scss';
function Projects() {
	// AOS.init();
	// create project state whihc will be an array of projects
	const projectData = [
		{
			title: 'SunnySide Agency',
			tag: 'front-end',
			url: sunnySide,
			tech: [html, css, javascript],
			github:
				'https://github.com/Dwayne-B/FEM-sunnysideAgency',
			demo: 'https://dwayne-b.github.io/FEM-sunnysideAgency/',
		},

		{
			title: 'Listen With Kristen',
			url: lwk,
			tag: 'no-code',

			tech: [wix, javascript],
			github: '',
			demo: 'https://www.listenwithkristen.com/',
		},

		{
			title: 'Clipboard-landing',
			url: clipboard,
			tag: 'no-code',

			tech: [wix, javascript],
			github:
				'https://github.com/Dwayne-B/Clipboard-landing',
			demo: 'https://dwaynebynumtech.editorx.io/my-site',
		},

		{
			title: 'CookBook',
			url: Cookbook,
			tag: 'Full-stack',

			tech: [mongo, express, ReactUrl, node],
			github: 'https://github.com/Dwayne-B/cookbook',
			
		},
	];
	const [projects, setProjects] = useState(projectData);
	// create filter state whihc will be an array of projects filtered by tagName
	const [filteredProjects, setFilteredProjects] =
		useState(projectData);
	//create state to track tag change
	const [tag, setTag] = useState('All');
	//Use Effect hook everytime a new filter is applied.
	useEffect(() => {
		if (tag === 'All') {
			setFilteredProjects(projectData);
		} else if (tag === 'Email') {
			const frontEndProjects = projectData.filter(
				(project) => {
					return project.tag === 'Email';
				},
			);
			setFilteredProjects(frontEndProjects);
		} else if (tag === 'Fullstack') {
			const frontEndProjects = projectData.filter(
				(project) => {
					return project.tag === 'Fullstack';
				},
			);
			setFilteredProjects(frontEndProjects);
		} else if (tag === 'Front-end') {
			const frontEndProjects = projectData.filter(
				(project) => {
					return project.tag === 'front-end';
				},
			);
			setFilteredProjects(frontEndProjects);
		} else if (tag === 'No-code') {
			const frontEndProjects = projectData.filter(
				(project) => {
					return project.tag === 'no-code';
				},
			);
			setFilteredProjects(frontEndProjects);
		}
	}, [tag]);
	return (
		<div
			id='projects'
			className='section project-container'
			data-aos='fade-up'>
			<div className='project-heading'>
				<h2>Projects</h2>
				<div className='project-filter'>
					{/* condense filter buttons to mapped out component */}
					<span
						className='filter'
						onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}>
						All
					</span>
					<span
						className='filter'
						onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}>
						Front-end
					</span>
					<span
						className='filter'
						onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}>
						Fullstack
					</span>
					<span
						className='filter'
						onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}>
						No-code
					</span>
					{/* <span
						className='filter'
						onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}>
						React-Native
					</span> */}
				</div>
			</div>
			<div className='project-display'>
				{filteredProjects.map((project, i) => {
					return (
						<ProjectCard
							key={i}
							title={project.title}
							url={project.url}
							tech={project.tech}
							github={project.github}
							demo={project.demo}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
