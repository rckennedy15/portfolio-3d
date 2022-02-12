import type { NextPage } from 'next';
import Image from 'next/image';
import Hero from '../components/hero';
import MobileMenu from '../components/mobile-menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

const Home: NextPage = () => {
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
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
