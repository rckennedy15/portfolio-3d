import type { NextPage } from 'next';
import Image from 'next/image';
import Hero from '../components/Hero';
import MobileMenu from '../components/MobileMenu';
import About from '../components/About';
import ThreeCv from '../components/ThreeCv';
import Skills from '../components/Skills';
import Works from '../components/Works';
import Contact from '../components/Contact';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';

const Home: NextPage = () => {
	const anchors = ['home', 'about', 'skills', 'works', 'contact'];
	const [allowScroll, setAllowScroll] = useState(true);

	return (
		<>
			<ReactFullpage
				licenseKey={'GPLv3OpenSourceLicense'}
				navigation
				navigationTooltips={anchors}
				anchors={anchors}
				verticalCentered={false}
				autoScrolling={true}
				fixedElements='.cv'
				render={({ state, fullpageApi }) => {
					if (fullpageApi !== undefined) {
						fullpageApi.setAllowScrolling(allowScroll);
					}
					return (
						<ReactFullpage.Wrapper>
							<ThreeCv />

							<div className='section'>
								<MobileMenu setAllowScroll={setAllowScroll} />
								<Hero />
							</div>
							<div className='section bg-zinc-600'>
								<About />
							</div>
							<div className='section bg-cyan-700'>
								<Skills />
							</div>
							<div className='section bg-zinc-600'>
								<Works />
							</div>
							<div className='section bg-zinc-900'>
								<Contact />
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</>
	);
};

export default Home;
