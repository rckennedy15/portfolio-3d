import { FC } from 'react';

const Link: FC<{ linkName: string }> = ({ linkName }) => {
	const linkDest = `#${linkName}`;
	return (
		<>
			<a className='block text-white text-2xl' href={linkDest}>
				{linkName}
			</a>
		</>
	);
};

export default Link;
