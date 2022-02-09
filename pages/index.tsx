import type { NextPage } from 'next';
import Image from 'next/image';
import { Spin as Hamburger } from 'hamburger-react';

const Home: NextPage = () => {
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
				<h1 className='text-7xl text-white font-title'>Hi,</h1>
				<h1 className='text-7xl text-white font-titlee'>I'm Ryan</h1>
			</section>
			<section id='about' className='bg-zinc-600 h-screen'></section>
			<section id='skills' className='bg-cyan-700 h-screen '></section>
			<section id='works' className='bg-zinc-600 h-screen'></section>
			<section id='contact' className='bg-zinc-900 h-screen'></section>
		</>
	);
};

export default Home;
