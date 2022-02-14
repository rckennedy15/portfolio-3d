import type { NextPage } from 'next';
import Image from 'next/image';
import Hero from '../components/hero';
import MobileMenu from '../components/mobile-menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const Home: NextPage = () => {
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	const anchors = ['home', 'about', 'skills', 'work', 'contact'];

	return (
		<>
			<ReactFullpage
				licenseKey={'GPLv3OpenSourceLicense'}
				navigation
				navigationTooltips={anchors}
				anchors={anchors}
				verticalCentered={false}
				autoScrolling={true}
				render={({ state, fullpageApi }) => {
					return (
						<ReactFullpage.Wrapper>
							<div className='section bg-zinc-800'>
								<MobileMenu />
								<Hero />
							</div>
							<div className='section bg-zinc-600'>
								<p>Section 2</p>
							</div>
							<div className='section bg-cyan-700'></div>
							<div className='section bg-zinc-600'></div>
							<div className='section bg-zinc-900'></div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>

			{/* <section id='home' className='bg-zinc-800 h-screen'>
				<MobileMenu />
				<Hero />
			</section>
			<section id='about' className='bg-zinc-600 h-screen'></section>
			<section id='skills' className='bg-cyan-700 h-screen '></section>
			<section id='works' className='bg-zinc-600 h-screen'></section>
			<section id='contact' className='bg-zinc-900 h-screen'></section> */}
		</>
	);
};

export default Home;
