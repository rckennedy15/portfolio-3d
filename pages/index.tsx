import type { NextPage } from 'next';
import Image from 'next/image';
import Hero from '../components/hero';
import MobileMenu from '../components/mobile-menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useEffect } from 'react';

const Home: NextPage = () => {
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	useEffect(() => {
		let sections = gsap.utils.toArray<gsap.DOMTarget>('section');
		sections.forEach((section, i) => {
			ScrollTrigger.create({
				trigger: section,
				start: 'top bottom',
				onEnter: () => goToSection(i),
			});
			ScrollTrigger.create({
				trigger: section,
				start: 'bottom bottom',
				onEnterBack: () => goToSection(i),
			});
		});
	});

	const goToSection = (i: number) => {
		gsap.to(window, {
			scrollTo: {
				y: i * innerHeight,
			},
			duration: 0.8,
			ease: 'power2.inOut',
		});
	};

	return (
		<>
			<section id='home' className='bg-zinc-800 h-screen'>
				<MobileMenu />
				<Hero />
			</section>
			<section id='about' className='bg-zinc-600 h-screen'></section>
			<section id='skills' className='bg-cyan-700 h-screen '></section>
			<section id='works' className='bg-zinc-600 h-screen'></section>
			<section id='contact' className='bg-zinc-900 h-screen'></section>
		</>
	);
};

export default Home;
