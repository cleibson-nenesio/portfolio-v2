import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontSize: {
				['xl']: '24px',
				['5xl']: '40px',
				['6xl']: '44px',
				['7xl']: '52px',
				['8xl']: '92px',
				['9xl']: '220px',
			},
			colors: {
				['primary-100']: '#E8F1EE',
				['primary-200']: '#D1E3DE',
				['primary-400']: '#A2C7BD',
				['primary-600']: '#74AB9B',
				['primary-800']: '#458F7A',
				['primary-1000']: '#177359',

				['neutral-100']: '#F9F9F9',
				['neutral-200']: '#CED0D4',
				['neutral-400']: '#9DA0A8',
				['neutral-600']: '#6D717D',
				['neutral-800']: '#3C4151',
				['neutral-1000']: '#0B1226',

				['background']: '#F0F0F0',
				['background-dark']: '#303030',
			},
			maxWidth: {
				['screen-max']: '1920px',
			},
		},
	},
	plugins: [],
};
export default config;
