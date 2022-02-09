const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'M\\ PLUS\\ Rounded\\ 1c',
					'Raleway',
					'Ubuntu\\ Mono',
					'Architects\\ Daughter',
					'Indie\\ Flower',
					...defaultTheme.fontFamily.sans,
				],
				title: ['Ubuntu Mono'],
				titlee: ['M PLUS Rounded 1c'],
			},
		},
	},
	plugins: [],
};
