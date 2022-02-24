import { FC } from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';

const Hero: FC = () => {
	gsap.registerPlugin(TextPlugin);
	const cursor = useRef<HTMLHeadingElement>(null);
	const text = useRef<HTMLHeadingElement>(null);
	const hero1 = useRef<HTMLHeadingElement>(null);
	const hero2 = useRef<HTMLHeadingElement>(null);

	const words = [
		'a developer.',
		'a freelancer.',
		'a designer.',
		'a student.',
		'an ethical programmer.',
	];

	useEffect(() => {
		// cursor effect
		gsap.to(cursor.current, {
			opacity: 0,
			ease: 'power4.inOut',
			repeat: -1,
			duration: 0.9,
		});

		// on load animation
		const initTl = gsap.timeline();
		initTl
			.delay(1)
			.fromTo(
				hero1.current,
				{
					y: '4.5rem',
				},
				{
					duration: 1,
					y: '0rem',
					ease: 'power3.out',
				}
			)
			.fromTo(
				hero2.current,
				{
					y: '4.5rem',
				},
				{
					duration: 1,
					y: '0rem',
					ease: 'power3.out',
					// @ts-ignore
					onComplete: () => mainTl.play(),
				}
			);
		initTl.play();

		// typing animation
		const mainTl = gsap.timeline({ repeat: -1 }).pause();
		words.forEach((word) => {
			let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 });
			if (word === 'an ethical programmer.') {
				tl.to(text.current, {
					duration: 1.6,
					text: word,
					ease: 'sine.in',
				});
			} else {
				tl.to(text.current, {
					duration: 1.2,
					text: word,
					ease: 'sine.in',
				});
			}
			mainTl.add(tl);
		});
	}, []);

	return (
		<div className='px-8 py-16 z-0'>
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
				<h2 className='text-3xl text-white font-mono2 overflow-hidden whitespace-nowrap text-ellipsis'>
					<span ref={text} className='inline-block'></span>
					<span ref={cursor}>_</span>
				</h2>
			</div>
		</div>
	);
};

export default Hero;
