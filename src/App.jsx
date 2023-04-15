import { Suspense, lazy, useState } from 'react';
import './App.scss';
import { SmoothScrollProvider } from './Context/SmoothScrollContext';
import Nav from './comp/Nav/Nav';
// import About from './sections/About/About';

// import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
// import Projects from './sections/Projects/Projects';
// import Skills from './sections/Skills/Skills';

const About = lazy(() => import('./sections/About/About'));
const Skills = lazy(() =>
	import('./sections/Skills/Skills'),
);
const Contact = lazy(() =>
	import('./sections/Contact/Contact'),
);
const Projects = lazy(() =>
	import('./sections/Projects/Projects'),
);
const Footer = lazy(() =>
	import('./sections/Footer/Footer'),
);

function App() {
	const [count, setCount] = useState(0);

	return (
		<SmoothScrollProvider>
			<div className='App'>
				<div className='master-container '>
					<Nav />
					<div className='content-container '>
						<Hero />
						<Suspense fallback={<h2>Loading</h2>}>
							<About />
							<Skills />
							<Projects />
							<Contact />
						</Suspense>

						<Footer />
					</div>
				</div>
			</div>
		</SmoothScrollProvider>
	);
}

export default App;
