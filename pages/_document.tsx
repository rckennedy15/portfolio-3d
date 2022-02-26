import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<meta name='title' content='Ryan Kennedy | Web Developer' />
				<meta
					name='description'
					content='Hire a Professional Freelance Web Developer. Building clean, animated, and interactive experiences with a focus on security and ethics.'
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://metatags.io/' />
				<meta property='og:title' content='Ryan Kennedy | Web Developer' />
				<meta
					property='og:description'
					content='Hire a Professional Freelance Web Developer. Building clean, animated, and interactive experiences with a focus on security and ethics.'
				/>
				<meta
					property='og:image'
					content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
				/>

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://metatags.io/' />
				<meta property='twitter:title' content='Ryan Kennedy | Web Developer' />
				<meta
					property='twitter:description'
					content='Hire a Professional Freelance Web Developer. Building clean, animated, and interactive experiences with a focus on security and ethics.'
				/>
				<meta
					property='twitter:image'
					content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
				/>

				<meta name='theme-color' content='rgb(39, 39, 42)' />
				<link rel='icon' href='/favicon.ico' />

				{/* Google Fonts */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Indie+Flower&family=M+PLUS+Rounded+1c:wght@300&family=Raleway:wght@300&family=Ubuntu+Mono&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
