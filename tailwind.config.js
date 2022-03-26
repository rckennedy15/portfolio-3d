const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				cta: '#00D4F4',
				secondary: '#E8F8F8',
				tertiary: '#4E5153',
			},
			fontFamily: {
				primary: ['Nunito'],
				sans: ['M\\ PLUS\\ Rounded\\ 1c', ...defaultTheme.fontFamily.sans],
				mono: ['Fira\\ Code'],
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
