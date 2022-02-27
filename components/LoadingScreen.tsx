import { forwardRef } from 'react';
import { Triangle } from 'react-loader-spinner';

const LoadingScreen = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<div
			ref={ref}
			className='h-full w-full absolute bg-white flex flex-col items-center justify-center z-[9999]'
		>
			<Triangle ariaLabel='loading-indicator' color='black' />
			<p className='pt-6'>loading...</p>
		</div>
	);
});
LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;
