import '../styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Ryan Kennedy | Web Developer</title>
				<meta
					name='description'
					content='Hire a Professional Freelance Web Developer. Building clean, animated, and interactive experiences with a focus on security and ethics.'
				/>
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
			{/* Yandex analytics */}
			<Script id='analytics' type='text/javascript'>{`
		  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
			m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

			ym(87442287, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true
			});
			`}</Script>

			{/* GSAP libraries from CDN */}
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js' />
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/Flip.min.js' />
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js' />
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollToPlugin.min.js' />
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/MotionPathPlugin.min.js' />
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/TextPlugin.min.js' />

			<noscript id='noscript-analytics'>
				{/* NoScript yandex analytics */}
				<div>
					<img
						src='https://mc.yandex.ru/watch/87442287'
						style={{ position: 'absolute', left: '-9999px' }}
						alt=''
					/>
				</div>
			</noscript>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
