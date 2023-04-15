import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

// import CanvasLoader from "../Loader";

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float
			speed={1.75}
			rotationIntensity={1}
			floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={1.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color='#fff8eb'
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

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
