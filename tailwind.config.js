const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['M\\ PLUS\\ Rounded\\ 1c', ...defaultTheme.fontFamily.sans],
				mono1: ['Ubuntu\\ Mono'],
				mono2: ['Raleway'],
				main: ['M\\ PLUS\\ Rounded\\ 1c'],
				handwritten1: ['Architects\\ Daughter'],
				handwritten2: ['Indie\\ Flower'],
			},
			boxShadow: {
				blurEdge: '0 0 5px 10px rgba(0, 0, 0, 0.3);',
			},
		},
	},
	plugins: [],
};
