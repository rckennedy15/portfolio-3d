import type { NextPage } from 'next';
import Image from 'next/image';
import Hero from '../components/Hero';
import MobileMenu from '../components/MobileMenu';
import About from '../components/About';
import ThreeCv from '../components/ThreeCv';
import Skills from '../components/Skills';
import Works from '../components/Works';
import Contact from '../components/Contact/Contact';
import LoadingScreen from 'components/LoadingScreen';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';

const Home: NextPage = () => {
	const [allowScroll, setAllowScroll] = useState(true);
	const [doneLoading, setDoneLoading] = useState(false);

	const loadingDiv = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (doneLoading) {
			if (loadingDiv.current) {
				const fade = gsap.timeline({ delay: 1 }).pause();
				fade
					.fromTo(
						loadingDiv.current,
						{
							opacity: 1,
						},
						{
							opacity: 0,
							duration: 1,
						}
					)
					.duration(1)
					.play()
					.then(() => {
						loadingDiv.current!.style.visibility = 'hidden';
					});
			}
		}
	}, [doneLoading]);

	return (
		<>
			<LoadingScreen ref={loadingDiv} />
			<div className='snap-mandatory snap-y scroll-smooth overflow-scroll h-screen'>
				<ThreeCv setDoneLoading={setDoneLoading} />

				<div className='h-screen snap-start'>
					<MobileMenu setAllowScroll={setAllowScroll} />
					<Hero doneLoading={doneLoading} />
				</div>
				<div className='min-h-screen snap-start bg-zinc-800/10 backdrop-blur-lg'>
					<About />
				</div>
				<div className='min-h-screen snap-start bg-cyan-700'>
					<Skills />
				</div>
				<div className='min-h-screen snap-start bg-zinc-600'>
					<Works />
				</div>
				<div className='min-h-screen snap-start bg-cyan-100'>
					<Contact />
				</div>
			</div>
		</>
	);
};

export default Home;
