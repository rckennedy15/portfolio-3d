/* eslint-disable @next/next/no-img-element */
import '../styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Ryan Kennedy | Web Developer</title>
			</Head>
			{/* Yandex analytics */}
			<Script id='analytics' type='text/javascript'>{`
		  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
			m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

			ym(87442287, "init", {
					 clickmap:true,
					 trackLinks:true,
					 accurateTrackBounce:true
			});
			`}</Script>

			{/* GSAP libraries from CDN */}
			{/* <Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js' />
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/Flip.min.js' />
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js' />
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollToPlugin.min.js' />
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/MotionPathPlugin.min.js' />
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/TextPlugin.min.js' /> */}

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
