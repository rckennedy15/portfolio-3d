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
	const clouds = useRef();

	const AnimatedClouds = () => {
		// need to useRef on actual mesh object
		useFrame(({ clock }) => {
			if (clouds.current === undefined) {
				console.log('undefined');
			} else {
				//@ts-ignore
				clouds.current.rotation.y = clock.getElapsedTime();
			}
		});

		return <Clouds scale={scalingFactor} />;
	};

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
						autoRotate={false} // make sure to set back to true
						autoRotateSpeed={0.2}
					/>
					<Stars />
					<ambientLight intensity={0.5} />
					<spotLight position={[10, 15, 10]} angle={0.3} />
					<Globe scale={scalingFactor} />
					<AnimatedClouds />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default ThreeCv;
