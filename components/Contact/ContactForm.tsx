const ContactForm = () => {
	return (
		<>
			<div className='bg-slate-800 rounded-lg flex flex-col columns-1 text-cyan-100'>
				<form action='/api/contact' method='post'>
					<label htmlFor='name' className='absolute'>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						className='bg-slate-400'
					/>
					<label htmlFor='email' className='absolute'>
						Email
					</label>
					<input
						type='text'
						name='email'
						id='email'
						required
						className='bg-slate-400'
					/>
					<label htmlFor='msg' className='absolute'>
						Message
					</label>
					<input
						type='text'
						name='msg'
						id='msg'
						required
						className='bg-slate-400'
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
