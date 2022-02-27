import { Canvas, useFrame } from '@react-three/fiber';
import {
	OrbitControls,
	PerspectiveCamera,
	Stars,
	useTexture,
	Preload,
} from '@react-three/drei';
import {
	Suspense,
	useEffect,
	useRef,
	Dispatch,
	SetStateAction,
	useState,
} from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

import Globe from './models/Globe';
import Clouds from './models/Clouds';

import { Group } from 'three';

type ThreeCvProps = {
	setDoneLoading: Dispatch<SetStateAction<boolean>>;
};

const ThreeCv = ({ setDoneLoading }: ThreeCvProps) => {
	const { height, width } = useWindowDimensions();
	const [globeDoneLoading, setGlobeDoneLoading] = useState(false);
	const [cloudsDoneLoading, setCloudsDoneLoading] = useState(false);

	let scalingFactor = 1;
	let xPosition = 0.5;
	let yPosition = -0.5;

	if (width !== null && height !== null) {
		xPosition = (width / 350) * 0.4; // if width = 350, x position = 0.5
		if (width < 768) {
			yPosition = (height / 350) * -0.18;
			scalingFactor = (width / 350) * 0.18; // if width = 350, scale = 0.18
		} else {
			yPosition = 1;
			scalingFactor = (height / 350) * 0.16;
		}
	}

	const AnimStars = () => {
		const stars = useRef<Group>();
		useFrame(({ clock }) => {
			console.assert(
				stars !== undefined &&
					stars.current !== undefined &&
					stars !== null &&
					stars.current !== null,
				{ group: stars }
			);
			stars!.current!.rotation.y = clock.getElapsedTime() / -60;
		});
		return <Stars ref={stars} />;
	};

	useEffect(() => {
		// will run once the canvas is done rendering
		if (globeDoneLoading && cloudsDoneLoading) {
			setDoneLoading(true);
			console.log(
				`CANVAS ACTUALLY DONE LOADING globe: ${globeDoneLoading} clouds: ${cloudsDoneLoading}`
			);
		}
		console.log('CANVAS DONE LOADING');
	}, [cloudsDoneLoading, globeDoneLoading, setDoneLoading]);

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
					{/* <OrbitControls
						enableZoom={false}
						autoRotate={true}
						autoRotateSpeed={-0.05}
					/> */}
					{/* <Stars /> */}
					<AnimStars />
					<ambientLight intensity={0.5} />
					<directionalLight
						position={[xPosition * -12, yPosition * -4, 6]}
						intensity={0.1}
					/>
					<spotLight
						position={[xPosition * 20, yPosition * -10, 10]}
						angle={0.3}
					/>
					<Globe
						scale={scalingFactor}
						position={[xPosition, yPosition, 0]}
						setGlobeDoneLoading={setGlobeDoneLoading}
					/>
					<Clouds
						scale={scalingFactor}
						position={[xPosition, yPosition, 0]}
						setCloudsDoneLoading={setCloudsDoneLoading}
					/>
					<Preload all />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default ThreeCv;
