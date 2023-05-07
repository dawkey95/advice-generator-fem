/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				darkBackground: 'var(--dark-background)',
				lightBackground: 'var(--light-background)',

				lightText: 'var(--light-text)',
				darkText: 'var(--dark-text)',

				darkCard: 'var(--dark-card)',
				lightCard: 'var(--light-card)',

				accent: 'var(--accent)',
				lightAccent: 'var(--light-accent)',
			},

			fontFamily: {
				sans: ['var(--manrope)'],
			},

			boxShadow: {
				primaryShadow: 'var(--primary-shadow)',
				btnHover: 'var(--btn-hover)',
			},
		},
	},
	plugins: [require('daisyui')],
};
