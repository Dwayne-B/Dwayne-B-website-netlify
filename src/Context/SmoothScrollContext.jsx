// import { createContext, useContext, useRef } from 'react';
// export const SmoothScrollContext = createContext({});
// // function useSmoothScroll() {
// // 	return useContext(SmoothScrollContext);
// // }

// export function SmoothScrollProvider({ children }) {
// 	const homeRef = useRef(null);
// 	const aboutRef = useRef(null);
// 	const projectsRef = useRef(null);
// 	const contactRef = useRef(null);
// 	const scrollToSection = (ref, e) => {
// 		e.preventDefault();
// 		const top = ref.current;
// 		console.log(ref);
// 		window.scrollTo({
// 			top: top,
// 			behavior: 'smooth',
// 		});
// 	};
// 	return (
// 		<SmoothScrollContext.Provider
// 			value={{
// 				homeRef,
// 				aboutRef,
// 				projectsRef,
// 				contactRef,
// 				scrollToSection,
// 			}}>
// 			{children}
// 		</SmoothScrollContext.Provider>
// 	);
// }
