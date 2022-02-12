import { Spin as Hamburger } from 'hamburger-react';
import { FC, useEffect, useRef, useState } from 'react';
import Link from '../components/mobile-menu-link';

const MobileMenu: FC = () => {
	const blockMenu = useRef<HTMLDivElement>(null);
	const darkBlur = useRef<HTMLDivElement>(null);

	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (blockMenu.current != null) {
			setHeight(blockMenu.current.clientHeight);
		}
	}, [height]);

	if (darkBlur.current != null)
		darkBlur.current.style.top = `${height.toString()}px`;

	return (
		<div className='z-10 relative'>
			<div
				ref={darkBlur}
				className={`invisible backdrop-blur-md backdrop-brightness-100 bg-black/30 min-h-screen min-w-full absolute shadow-blurEdge`}
			></div>
			<div
				ref={blockMenu}
				className='invisible block w-screen h-fit text-center absolute top-0 bg-zinc-500 p-12'
			>
				<Link linkName='home' />
				<Link linkName='about' />
				<Link linkName='skills' />
				<Link linkName='works' />
				<Link linkName='contact' />
			</div>
			<nav className='w-screen h-20 flex flex-row-reverse p-4 md:hidden'>
				<Hamburger
					color='white'
					rounded
					label='show menu'
					direction='right'
					hideOutline={true}
					onToggle={(toggled) => {
						if (toggled) {
							// open menu
							if (blockMenu.current != null && darkBlur.current != null) {
								blockMenu.current.style.visibility = 'visible';
								darkBlur.current.style.visibility = 'visible';
								document.body.style.position = 'fixed';
							}
						} else {
							// close menu
							if (blockMenu.current != null && darkBlur.current != null) {
								blockMenu.current.style.visibility = 'hidden';
								darkBlur.current.style.visibility = 'hidden';
								document.body.style.position = 'static';
							}
						}
					}}
				/>
			</nav>
		</div>
	);
};

export default MobileMenu;
