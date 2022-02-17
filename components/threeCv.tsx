import { Canvas } from '@react-three/fiber';
import {
	OrbitControls,
	PerspectiveCamera,
	Stars,
	useTexture,
} from '@react-three/drei';
import { Suspense } from 'react';
import { RGB_ETC1_Format } from 'three';

const Box = () => {
	return (
		<mesh position={[0, -1.5, 0]}>
			<boxBufferGeometry attach='geometry' />
			<meshLambertMaterial attach='material' color='hotpink' />
		</mesh>
	);
};

const Globe = () => {
	const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
		useTexture([
			'earth.jpg',
			'brick_Displacement.jpg',
			'brick_NormalGL.jpg',
			'brick_Roughness.jpg',
			'brick_AmbientOcclusion.jpg',
		]);
	return (
		<mesh position={[0, -1.5, 0]}>
			{/* Width and height segments for displacementMap */}
			<sphereBufferGeometry args={[1, 100, 100]} />
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
