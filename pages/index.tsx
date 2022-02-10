import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
	const calculateTimeLeft = () => {
		let year = new Date().getFullYear();
		let difference = +new Date(`3/16/${year}`) - +new Date();

		let timeLeft: {
			days: number;
			hours: number;
			minutes: number;
			seconds: number;
		} = { days: 0, hours: 0, minutes: 0, seconds: 0 };

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<>
			<section className='flex flex-col items-center justify-center justify-items-center h-screen w-screen bg-zinc-300 overflow-hidden'>
				<div className='grow w-full flex items-center justify-center'>
					<h1 className='text-center text-6xl'>COMING SOON</h1>
				</div>
				<div className='w-[70vw] h-[50vh] bg-zinc-800 grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-4 justify-center content-center p-10'>
					<div className='rounded-lg bg-slate-500 flex flex-col items-center justify-center overflow-hidden'>
						<h2 className='text-center text-white text-[6vw]'>
							{timeLeft.days}
						</h2>
						<h3 className='text-center text-white text-xl md:text-2xl'>days</h3>
					</div>
					<div className='rounded-lg bg-slate-500 flex flex-col items-center justify-center overflow-hidden'>
						<h2 className='text-center text-white text-[6vw]'>
							{timeLeft.hours}
						</h2>
						<h3 className='text-center text-white text-xl md:text-2xl'>
							hours
						</h3>
					</div>
					<div className='rounded-lg bg-slate-500 flex flex-col items-center justify-center overflow-hidden'>
						<h2 className='text-center text-white text-[6vw]'>
							{timeLeft.minutes}
						</h2>
						<h3 className='text-center text-white text-xl md:text-2xl'>
							minutes
						</h3>
					</div>
					<div className='rounded-lg bg-slate-500 flex flex-col items-center justify-center overflow-hidden'>
						<h2 className='text-center text-white text-[6vw]'>
							{timeLeft.seconds}
						</h2>
						<h3 className='text-center text-white text-xl md:text-2xl'>
							seconds
						</h3>
					</div>
				</div>
				<div className='grow w-full flex items-center justify-center'>
					<p>Ⓒ Copyright 2022 Ryan Kennedy</p>
				</div>
			</section>
		</>
	);
};

export default Home;
