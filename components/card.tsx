import React, { FC } from 'react';

interface CardProps {
	href: string;
	title: string;
	content: string;
}

const Card: FC<CardProps> = ({ href, title, content }) => {
	return (
		<a
			href={href}
			className='m-4 p-6 text-left border-slate-200 border-{1px} border-solid rounded-xl max-w-{300px} transition-colors bg-inherit hover:bg-blue-500 active:bg-blue-500 focus:bg-blue-500'
		>
			<h2 className='mb-4 text-2xl'>{title}</h2>
			<p className='text-xl m-0'>{content}</p>
		</a>
	);
};

export default Card;
