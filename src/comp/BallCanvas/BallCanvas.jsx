import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, lazy } from 'react';
// import Ball from '../Ball/Ball';
const Ball = lazy(() => import('../Ball/Ball'));
const BallCanvas = ({ url }) => {
	return (
		<Canvas
			className='border border-red-70'
			frameloop='demand'
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={url} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
