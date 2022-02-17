import { Canvas } from '@react-three/fiber';
import {
	OrbitControls,
	PerspectiveCamera,
	Stars,
	useTexture,
} from '@react-three/drei';
import { Suspense, useEffect } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Box = () => {
	return (
		<mesh position={[0, -1.5, 0]}>
			<boxBufferGeometry attach='geometry' />
			<meshLambertMaterial attach='material' color='hotpink' />
		</mesh>
	);
};

const Globe = () => {
	const { height, width } = useWindowDimensions();
	console.log(`height: ${height} width: ${width}`);
	let globeSize = 1;
	if (width !== null) globeSize = (width / 350) * 1.3;

	const [colorMap] = useTexture(['earth.jpg']);
	// const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
	// 	useTexture([
	// 		'earth.jpg',
	// 		'brick_Displacement.jpg',
	// 		'brick_NormalGL.jpg',
	// 		'brick_Roughness.jpg',
	// 		'brick_AmbientOcclusion.jpg',
	// 	]);
	return (
		<mesh position={[0, -2.5, 0]}>
			{/* Radius 1 = about 350px*/}
			<sphereBufferGeometry args={[globeSize, 100, 100]} />
			<meshStandardMaterial map={colorMap} />
		</mesh>
	);
};

const ThreeCv = () => {
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
						autoRotateSpeed={0.2}
					/>
					<Stars />
					<ambientLight intensity={0.5} />
					<spotLight position={[10, 15, 10]} angle={0.3} />
					<Globe />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default ThreeCv;
