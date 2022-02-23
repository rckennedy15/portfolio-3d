import { Canvas, useFrame } from '@react-three/fiber';
import {
	OrbitControls,
	PerspectiveCamera,
	Stars,
	useTexture,
} from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

import Globe from './models/globe';
import Clouds from './models/clouds';

// const Box = () => {
// 	return (
// 		<mesh position={[0, -1.5, 0]}>
// 			<boxBufferGeometry attach='geometry' />
// 			<meshLambertMaterial attach='material' color='hotpink' />
// 		</mesh>
// 	);
// };

// const Globe = () => {
// 	const { height, width } = useWindowDimensions();
// 	console.log(`height: ${height} width: ${width}`);
// 	let globeSize = 1;
// 	if (width !== null) globeSize = (width / 350) * 1.3;

// 	const [colorMap] = useTexture(['earth.jpg']);
// 	return (
// 		<mesh position={[0, -2.5, 0]}>
// 			{/* Radius 1 = about 350px*/}
// 			<sphereBufferGeometry args={[globeSize, 100, 100]} />
// 			<meshStandardMaterial map={colorMap} />
// 		</mesh>
// 	);
// };

const animateClouds = () => {};

const ThreeCv = () => {
	const { height, width } = useWindowDimensions();
	console.log(`height: ${height} width: ${width}`);
	let scalingFactor = 1;
	if (width !== null) scalingFactor = (width / 350) * 0.18; // if width = 350, scale = 0.18

	return (
		<div>
			<Canvas
				className='cv bg-zinc-800'
				style={{
					position: 'fixed',
					maxHeight: '100vh',
					top: 0,
					zIndex: -10,
				}}
			>
				<Suspense fallback={null}>
					<PerspectiveCamera position={[0, 1, 5]} makeDefault />
					<OrbitControls
						enableZoom={false}
						autoRotate={true}
						autoRotateSpeed={-0.05}
					/>
					<Stars />
					<ambientLight intensity={0.5} />
					<directionalLight position={[-6, 6, 6]} intensity={0.1} />
					<spotLight position={[10, 15, 10]} angle={0.3} />
					<Globe scale={scalingFactor} position={[0.5, -1.5, 0]} />
					<Clouds scale={scalingFactor} position={[0.5, -1.5, 0]} />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default ThreeCv;
