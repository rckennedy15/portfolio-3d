import { Spin as Hamburger } from 'hamburger-react';
import { FC, useRef } from 'react';
const MobileMenu: FC = () => {
	const blockMenu = useRef<HTMLDivElement>(null);
	return (
		<>
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
			<div
				ref={blockMenu}
				className='w-full h-fit text-center absolute top-0 bg-zinc-500'
			>
				<a className='block text-white text-2xl' href='#home'>
					home
				</a>
				<a className='block text-white text-2xl' href='#about'>
					about
				</a>
				<a className='block text-white text-2xl' href='#skills'>
					skills
				</a>
				<a className='block text-white text-2xl' href='#works'>
					works
				</a>
				<a className='block text-white text-2xl' href='#contact'>
					contact
				</a>
			</div>
		</>
	);
};

export default MobileMenu;
