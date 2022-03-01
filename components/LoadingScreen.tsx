import { forwardRef, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = forwardRef<HTMLDivElement>((props, ref) => {
	const c1 = useRef<SVGCircleElement>(null);
	const c2 = useRef<SVGCircleElement>(null);

	useEffect(() => {
		//animate first circle
		const tl = gsap.timeline({ repeat: -1 });
		tl.from(c1.current, { autoAlpha: 0.7 })
			.to(c1.current, {
				scale: 0.2,
				x: '+=5',
				transformOrigin: '50% 50%',
				duration: 0.5,
			})
			.to(c1.current, {
				scale: 1,
				x: '-=5',
				transformOrigin: '50% 50%',
				duration: 0.5,
			});

		const tl2 = gsap.timeline({ repeat: -1 });
		tl2
			.from(c2.current, { autoAlpha: 0.7 })
			.to(c2.current, {
				scale: 0.2,
				x: '-=5',
				transformOrigin: '50% 50%',
				duration: 0.5,
			})
			.to(c2.current, {
				scale: 1,
				x: '_=5',
				transformOrigin: '50% 50%',
				duration: 0.5,
			});
	});

	return (
		<div
			ref={ref}
			className='h-full w-full absolute bg-white flex flex-col items-center justify-center z-[9999]'
		>
			<svg
				aria-label='loading-indicator'
				viewBox='0 0 16 16'
				width='30px'
				height='16px'
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle ref={c1} id='c1' cx='8' cy='8' r='8' fill='#29B6F6' />
				<circle ref={c2} id='c2' cx='14' cy='8' r='8' fill='#FF4081' />
			</svg>
			<p className='pt-6'>loading...</p>
		</div>
	);
});
LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;
