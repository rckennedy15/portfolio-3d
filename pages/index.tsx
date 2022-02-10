import type { NextPage } from 'next';
import Image from 'next/image';
import { Spin as Hamburger } from 'hamburger-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

const Home: NextPage = () => {
	gsap.registerPlugin(TextPlugin, RoughEase);
	const cursor = useRef<HTMLHeadingElement>(null);
	const hi = useRef<HTMLHeadingElement>(null);
	const text = useRef<HTMLHeadingElement>(null);
	const hero1 = useRef<HTMLHeadingElement>(null);
	const hero2 = useRef<HTMLHeadingElement>(null);

	const words = ['developer.', 'freelancer.', 'designer.'];
	useEffect(() => {
		// cursor effect
		gsap.to(cursor.current, {
			opacity: 0,
			ease: 'power4.inOut',
			repeat: -1,
			duration: 0.9,
		});

		const initTl = gsap.timeline();
		initTl
			.from(hero1.current, {
				duration: 1,
				y: '4.5rem',
				ease: 'power3.out',
			})
			.from(hero2.current, {
				duration: 1,
				y: '4.5rem',
				ease: 'power3.out',
				// @ts-ignore
				onComplete: () => mainTl.play(),
			});

		initTl.on;

		const mainTl = gsap.timeline({ repeat: -1 }).pause();
		words.forEach((word) => {
			let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.4 });
			tl.to(text.current, {
				duration: 1.2,
				text: word,
				ease: 'sine.in',
			});
			mainTl.add(tl);
		});
	});
	return (
		<>
			<section id='home' className='bg-zinc-900 h-screen'>
				<nav className='w-screen h-20 flex flex-row-reverse p-4'>
					<Hamburger
						color='white'
						rounded
						label='show menu'
						direction='right'
						onToggle={(toggled) => {
							if (toggled) {
								// open a menu
							} else {
								// close menu
							}
						}}
					/>
				</nav>
				<div className='p-8'>
					<div>
						<h1 className='text-7xl text-white font-handwritten2 overflow-hidden'>
							<span ref={hero1} className='inline-block'>
								Hi,
							</span>
						</h1>
						<h1 className='text-7xl text-white font-handwritten2 overflow-hidden'>
							<span ref={hero2} className='inline-block'>
								I&apos;m Ryan
							</span>
						</h1>
					</div>
					<div className='pt-16'>
						<h4 className='text-3xl text-white font-mono2 overflow-hidden'>
							<span ref={hi} className='inline-block'>
								a&nbsp;
							</span>
							<span ref={text} className='inline-block'></span>
							<span ref={cursor}>_</span>
						</h4>
					</div>
				</div>
			</section>
			<section id='about' className='bg-zinc-600 h-screen'></section>
			<section id='skills' className='bg-cyan-700 h-screen '></section>
			<section id='works' className='bg-zinc-600 h-screen'></section>
			<section id='contact' className='bg-zinc-900 h-screen'></section>
		</>
	);
};

export default Home;
