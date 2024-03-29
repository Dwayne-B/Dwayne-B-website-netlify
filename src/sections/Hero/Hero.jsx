import { motion } from 'framer-motion';

import {
	React,
	useContext,
	useEffect,
	useState,
} from 'react';
// import { SmoothScrollContext } from '../../Context/SmoothScrollContext';
import heroBg from '../../assets/office.webp';
function Hero() {
	// const { homeRef } = useContext(SmoothScrollContext);
	const [hover, setIsHovered] = useState(false);
	const ContainerAnimation = {
		hidden: {
			x: 1000,
			opacity: 0,
		},
		show: {
			x: 0,
			opacity: 1.0,
			transition: {
				duration: 0.5,
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
		hover: {
			rotate: 25,
		},
	};
	const linksContainerAnimation = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1.0,
			transition: {
				duration: 0.5,
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
		hover: {
			rotate: 25,
		},
	};
	const buttonContainer = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1.0,
			transition: {
				duration: 0.5,
				when: 'beforeChildren',
				staggerChildren: 0.3,
				delay: 0.9,
			},
		},
		hover: {
			rotate: 25,
		},
	};
	const linksAnimation = {
		hidden: {
			y: 550,
		},
		show: {
			y: 0,
		},
		hover: {
			rotate: 25,
		},
	};
	function handleMouseEnter() {
		setIsHovered(true);
	}

	function handleMouseLeave() {
		setIsHovered(false);
	}
	return (
		<div
			id='home'
			className='hero-section section overflow-hidden   '>
			<img className='hero-img' src={heroBg} alt='' />
			<motion.div
				variants={ContainerAnimation}
				initial='hidden'
				animate='show'
				className='hero-content'>
				<h1 className='text-center  '>
					Front-end Developer
				</h1>
				<motion.div
					variants={linksContainerAnimation}
					className='socialLinks-container flex my-8'>
					<motion.a
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						target='_blank'
						href='https://www.freecodecamp.org/DwayneB435'
						variants={linksAnimation}
						whileHover={{ rotate: 350 }}>
						<svg
							className='icon'
							width='45'
							height='45'
							viewBox='0 0 45 45'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M35.1779 35.6634C36.9495 33.9592 38.3589 31.9149 39.3216 29.653C40.2842 27.3912 40.7805 24.9582 40.7805 22.5C40.7805 20.0418 40.2842 17.6088 39.3216 15.3469C38.3589 13.085 36.9495 11.0408 35.1779 9.33655M9.82228 9.33655C8.05068 11.0408 6.64132 13.085 5.67863 15.3469C4.71594 17.6088 4.21973 20.0418 4.21973 22.5C4.21973 24.9582 4.71594 27.3912 5.67863 29.653C6.64132 31.9149 8.05068 33.9592 9.82228 35.6634M18.4885 33.8644C15.1463 31.725 14.6776 29.6531 14.6776 27.045C14.6776 23.1009 21.4745 16.0809 21.4745 12.7828C21.4807 12.1032 21.3831 11.4266 21.1848 10.7765C23.3101 12.3253 26.1995 15.0562 26.1995 19.0678C26.2824 20.4103 26.0295 21.7523 25.4635 22.9725C26.058 22.9197 26.6227 22.689 27.084 22.3103C27.5452 21.9317 27.8816 21.4228 28.0492 20.85C29.8876 22.7437 30.3226 24.4153 30.3226 27.045C30.1915 28.421 29.7504 29.7494 29.0324 30.9305C28.3144 32.1115 27.3382 33.1146 26.177 33.8644C26.685 33.3799 27.0861 32.7947 27.3548 32.1462C27.6234 31.4977 27.7536 30.8002 27.737 30.0984C27.737 28.5609 26.4892 28.8056 25.8432 28.8056C25.4712 28.7912 25.1063 28.7002 24.771 28.5383C24.4358 28.3765 24.1376 28.1472 23.895 27.8649C23.6525 27.5825 23.4707 27.2531 23.3612 26.8974C23.2517 26.5416 23.2167 26.1671 23.2585 25.7972C23.2585 23.1234 24.016 22.0537 22.9238 19.9584C21.7651 23.279 17.7095 25.8862 17.7095 30.3431C17.6713 31.5635 17.9392 32.774 18.4885 33.8644Z'
								stroke='#F6BE8A'
								strokeWidth='2'
							/>
						</svg>
					</motion.a>

					<motion.a
						target='_blank'
						href='https://www.linkedin.com/in/dwayne-bynum-webdeveloper/'
						variants={linksAnimation}
						whileHover={{ rotate: 350 }}>
						<svg
							className='icon'
							width='45'
							height='45'
							viewBox='0 0 45 45'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M35.625 5.625C36.6196 5.625 37.5734 6.02009 38.2766 6.72335C38.9799 7.42661 39.375 8.38044 39.375 9.375V35.625C39.375 36.6196 38.9799 37.5734 38.2766 38.2766C37.5734 38.9799 36.6196 39.375 35.625 39.375H9.375C8.38044 39.375 7.42661 38.9799 6.72335 38.2766C6.02009 37.5734 5.625 36.6196 5.625 35.625V9.375C5.625 8.38044 6.02009 7.42661 6.72335 6.72335C7.42661 6.02009 8.38044 5.625 9.375 5.625H35.625ZM34.6875 34.6875V24.75C34.6875 23.1289 34.0435 21.5741 32.8972 20.4278C31.7509 19.2815 30.1961 18.6375 28.575 18.6375C26.9812 18.6375 25.125 19.6125 24.225 21.075V18.9938H18.9938V34.6875H24.225V25.4437C24.225 24 25.3875 22.8188 26.8313 22.8188C27.5274 22.8188 28.1951 23.0953 28.6874 23.5876C29.1797 24.0799 29.4562 24.7476 29.4562 25.4437V34.6875H34.6875ZM12.9 16.05C13.7354 16.05 14.5366 15.7181 15.1274 15.1274C15.7181 14.5366 16.05 13.7354 16.05 12.9C16.05 11.1563 14.6438 9.73125 12.9 9.73125C12.0596 9.73125 11.2536 10.0651 10.6594 10.6594C10.0651 11.2536 9.73125 12.0596 9.73125 12.9C9.73125 14.6438 11.1563 16.05 12.9 16.05ZM15.5063 34.6875V18.9938H10.3125V34.6875H15.5063Z'
								fill='url(#paint0_linear_416_19)'
							/>
							<defs>
								<linearGradient
									id='paint0_linear_416_19'
									x1='5.625'
									y1='22.5'
									x2='27.2733'
									y2='22.5'
									gradientUnits='userSpaceOnUse'>
									<stop stopColor='#E3BC99' />
									<stop offset='1' stopColor='#FFBF84' />
								</linearGradient>
							</defs>
						</svg>
					</motion.a>

					<motion.a
						target='_blank'
						href='https://github.com/Dwayne-B'
						variants={linksAnimation}
						whileHover={{ rotate: 350 }}>
						<svg
							className='icon'
							width='45'
							height='45'
							viewBox='0 0 45 45'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M22.5 3.75C20.0377 3.75 17.5995 4.23498 15.3247 5.17726C13.0498 6.11953 10.9828 7.50065 9.24175 9.24175C5.72544 12.7581 3.75 17.5272 3.75 22.5C3.75 30.7875 9.13125 37.8188 16.575 40.3125C17.5125 40.4625 17.8125 39.8813 17.8125 39.375V36.2063C12.6188 37.3313 11.5125 33.6938 11.5125 33.6938C10.65 31.5188 9.43125 30.9375 9.43125 30.9375C7.725 29.775 9.5625 29.8125 9.5625 29.8125C11.4375 29.9438 12.4313 31.7438 12.4313 31.7438C14.0625 34.5938 16.8187 33.75 17.8875 33.3C18.0562 32.0813 18.5438 31.2563 19.0688 30.7875C14.9063 30.3188 10.5375 28.7063 10.5375 21.5625C10.5375 19.4813 11.25 17.8125 12.4688 16.4813C12.2813 16.0125 11.625 14.0625 12.6562 11.5313C12.6562 11.5313 14.2313 11.025 17.8125 13.4438C19.2938 13.0313 20.9062 12.825 22.5 12.825C24.0938 12.825 25.7062 13.0313 27.1875 13.4438C30.7687 11.025 32.3438 11.5313 32.3438 11.5313C33.375 14.0625 32.7188 16.0125 32.5313 16.4813C33.75 17.8125 34.4625 19.4813 34.4625 21.5625C34.4625 28.725 30.075 30.3 25.8938 30.7688C26.5688 31.35 27.1875 32.4938 27.1875 34.2375V39.375C27.1875 39.8813 27.4875 40.4813 28.4438 40.3125C35.8875 37.8 41.25 30.7875 41.25 22.5C41.25 20.0377 40.765 17.5995 39.8227 15.3247C38.8805 13.0498 37.4994 10.9828 35.7583 9.24175C34.0172 7.50065 31.9502 6.11953 29.6753 5.17726C27.4005 4.23498 24.9623 3.75 22.5 3.75Z'
								fill='url(#paint0_linear_416_21)'
							/>
							<defs>
								<linearGradient
									id='paint0_linear_416_21'
									x1='3.75'
									y1='22.0458'
									x2='27.8037'
									y2='22.0458'
									gradientUnits='userSpaceOnUse'>
									<stop stopColor='#E3BC99' />
									<stop offset='1' stopColor='#FFBF84' />
								</linearGradient>
							</defs>
						</svg>
					</motion.a>
				</motion.div>
				<motion.div
					variants={buttonContainer}
					className='btn-container'>
					<motion.a
						href='#projects'
						variants={linksAnimation}>
						<motion.button
							whileHover={{
								background:
									'linear-gradient(180deg,#34725d 0%,#081516 100%)',
							}}>
							View Projects
						</motion.button>
					</motion.a>

					<motion.a
						variants={linksAnimation}
						href='#contact'>
						<motion.button
							whileHover={{
								background:
									'linear-gradient(180deg,#34725d 0%,#081516 100%)',
							}}>
							Contact
						</motion.button>
					</motion.a>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Hero;
