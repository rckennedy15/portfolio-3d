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

const ThreeCv = () => {
	const { height, width } = useWindowDimensions();
	let scalingFactor = 1;
	if (width !== null) scalingFactor = (width / 350) * 0.18; // if width = 350, scale = 0.18
	let xPosition = 0.5;
	if (width !== null) xPosition = (width / 350) * 0.5; // if width = 350, position = 0.5
	let yPosition = -1.5;
	if (width !== null && width >= 768 && height !== null) {
		scalingFactor = (height / 350) * 0.18;
		// xPosition = (width / 350) * 0.3;
		yPosition = 0;
	}

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
					<directionalLight
						position={[xPosition * -12, yPosition * -4, 6]}
						intensity={0.1}
					/>
					<spotLight
						position={[xPosition * 20, yPosition * -10, 10]}
						angle={0.3}
					/>
					<Globe scale={scalingFactor} position={[xPosition, yPosition, 0]} />
					<Clouds scale={scalingFactor} position={[xPosition, yPosition, 0]} />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default ThreeCv;
