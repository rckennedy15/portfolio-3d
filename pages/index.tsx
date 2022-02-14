import type { NextPage } from 'next';
import Image from 'next/image';
import Hero from '../components/hero';
import MobileMenu from '../components/mobile-menu';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';

const Home: NextPage = () => {
	const anchors = ['home', 'about', 'skills', 'work', 'contact'];
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
				render={({ state, fullpageApi }) => {
					if (fullpageApi != undefined) {
						fullpageApi.setAllowScrolling(allowScroll);
					}
					return (
						<ReactFullpage.Wrapper>
							<div className='section bg-zinc-800'>
								<MobileMenu setAllowScroll={setAllowScroll} />
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
		</>
	);
};

export default Home;
