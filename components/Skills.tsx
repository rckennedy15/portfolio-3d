const Skills = () => {
	return (
		<div className='px-8 py-16'>
			<div>
				<h1 className='text-7xl text-white font-handwritten2 overflow-hidden'>
					Skills
				</h1>
			</div>
			<div className='text-white text-xl pt-6'>
				<p>
					I consider myself well-versed in several prominent frontend web
					technologies including:
				</p>
				<ul className='list-disc pl-8'>
					<li>Modern ES6+ JavaScript</li>
					<li>React</li>
					<li>Next + webpack</li>
					<li>TailwindCSS</li>
				</ul>
				<p className='pt-6'>
					Additionally, for more complex applications that require a proper
					backend, I may use:
				</p>
				<ul className='list-disc pl-8'>
					<li>MongoDB/Mongoose</li>
					<li>Express</li>
					<li>Node</li>
				</ul>
				<p className='pt-6'>
					I also always use several modern design patterns such as:
				</p>
				<ul className='list-disc pl-8'>
					<li>Mobile First Design</li>
					<li>Responsive Layouts</li>
					<li>
						Tree-Shaking, Minification, and other Bundle Size Optimizations
					</li>
					<li>Accessibility features</li>
				</ul>
			</div>
		</div>
	);
};

export default Skills;
