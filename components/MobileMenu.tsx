import { Spin as Hamburger } from 'hamburger-react';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from './MobileMenuLink';
import useWindowDimensions from 'hooks/useWindowDimensions';

type MobileMenuProps = {
	setAllowScroll: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ setAllowScroll }: MobileMenuProps) => {
	const blockMenu = useRef<HTMLDivElement>(null);
	const darkBlur = useRef<HTMLDivElement>(null);
	const link = useRef<HTMLDivElement>(null);

	const [menuHeight, setMenuHeight] = useState(0);
	const [hamburgerToggle, setHamburgerToggle] = useState(false);
	const [menuState, setMenuState] = useState(false);
	const { width, height } = useWindowDimensions();

	useEffect(() => {
		if (blockMenu.current !== null) {
			setMenuHeight(blockMenu.current.clientHeight);
		}
	}, [menuHeight]);

	if (darkBlur.current !== null && height !== null) {
		darkBlur.current.style.top = `${menuHeight.toString()}px`;
		darkBlur.current.style.height = `${height - menuHeight}px`;
	}

	const menuAnimOpenTl = gsap.timeline().pause();
	useEffect(() => {
		menuAnimOpenTl
			.fromTo(
				blockMenu.current,
				{
					backgroundImage:
						'radial-gradient(circle at 90% 2rem, rgb(113, 113, 122) 0%, transparent 0%)',
				},
				{
					backgroundImage:
						'radial-gradient(circle at 90% 2rem, #00D4F4 100%, transparent 0%)',
					duration: 0.4,
				},
				'0'
			)
			.fromTo(
				link.current,
				{
					opacity: 0,
				},
				{
					duration: 0.2,
					opacity: 1,
				},
				'0.2'
			)
			.fromTo(
				darkBlur.current,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.4,
				},
				'0.2'
			)
			.duration(0.4);
	});

	const toggleMenu = () => {
		setMenuState(!menuState);
		return new Promise((resolve, reject) => {
			resolve('success');
		});
	};

	const menuOpen = () => {
		// open menu
		if (blockMenu.current !== null && darkBlur.current !== null) {
			toggleMenu().then(() => {
				menuAnimOpenTl.play();
			});
			document.body.style.position = 'fixed';
			setAllowScroll(false);
		}
	};

	const menuClose = () => {
		// close menu
		if (blockMenu.current !== null && darkBlur.current !== null) {
			menuAnimOpenTl.reverse(0.4).then(() => toggleMenu());
			document.body.style.position = 'static';
			setAllowScroll(true);
			if (hamburgerToggle) setHamburgerToggle(false);
		}
	};

	return (
		<div className='z-10 relative'>
			<div
				ref={darkBlur}
				className={`backdrop-blur-md backdrop-brightness-100 bg-black/30 min-w-full absolute shadow-blurEdge`}
				style={{ visibility: menuState ? 'visible' : 'hidden' }}
			></div>
			<div
				ref={blockMenu}
				className='block w-screen h-fit text-center absolute top-0 bg-transparent p-12'
				style={{ visibility: menuState ? 'visible' : 'hidden' }}
			>
				<div ref={link}>
					<Link menuClose={menuClose} linkName='home' />
					<Link menuClose={menuClose} linkName='about' />
					<Link menuClose={menuClose} linkName='skills' />
					<Link menuClose={menuClose} linkName='works' />
					<Link menuClose={menuClose} linkName='contact' />
				</div>
			</div>
			<nav className='w-screen h-20 flex flex-row-reverse p-4 md:hidden'>
				<Hamburger
					toggled={hamburgerToggle}
					toggle={setHamburgerToggle}
					color='white'
					rounded
					label='show menu'
					direction='right'
					hideOutline={true}
					onToggle={(toggled) => {
						if (toggled) {
							menuOpen();
						} else {
							menuClose();
						}
					}}
				/>
			</nav>
		</div>
	);
};

export default MobileMenu;
