// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
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
				srcset=''
			/>
			<div className='projectCard-content'>
				{<h4>{title}</h4>}
				<p>Made With:</p>
				<div className='tech-container'>
					<ul className='tech-icons'>
						{tech.map((i, index) => {
							return (
								<li key={index}>
									<img className='tech-icon' src={i} />
								</li>
							);
						})}
					</ul>
					<div className='projectCard-btn-contianer '>
						<a target='_blank ' href={github}>
							<button>Github</button>
						</a>

						<a href={demo} target='_blank'>
							<button href={demo} target='_blank'>
								Demo
							</button>
						</a>
					</div>
				</div>
			</div>
		</span>
	);
}

export default ProjectCard;
