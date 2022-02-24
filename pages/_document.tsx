import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta
					name='description'
					content='Hire a Professional Freelance Web Developer. Building clean, animated, and interactive experiences with a focus on security and ethics.'
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
