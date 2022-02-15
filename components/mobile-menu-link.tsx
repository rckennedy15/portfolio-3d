type LinkProps = {
	menuClose: () => void;
	linkName: string;
};

const Link = ({ menuClose, linkName }: LinkProps) => {
	const linkDest = `#${linkName}`;
	return (
		<>
			<a
				onClick={menuClose}
				className='block text-white text-2xl'
				href={linkDest}
			>
				{linkName}
			</a>
		</>
	);
};

export default Link;
