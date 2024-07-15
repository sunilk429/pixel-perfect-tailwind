import { type Config } from 'tailwindcss'

export default {
	content: [
		/* 
			🐨 Make sure that **everywhere** you use Tailwind classes
			is included in this array.
		*/
		'./src/**/*.{html,ts,tsx,js,jsx}',
	],
	theme: {
		extend: {
			/* 
			🐨 1. Extend the 'screens' object and replace 
			the 'sm' and 'lg' breakpoints with the 
			values from the Figma design.
			*/
			screens: {
				sm: '520px',
				lg: '976px',
			},
			/* 
			🐨 2. Extend the 'colors' object and add a 'highlight' color.
			Get the HEX color value from Figma.
			*/
			colors: {
				highlight: '#6202FF',
			},
			/* 
			🐨 3. Extend the 'fontFamily' object and add a 'poppins' family.
			Set its value to `['Poppins', 'sans-serif']`.
			*/
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			/*
			🐨 4. Extend the 'fontSize' object to include the following:
			
			- a '4.5xl' key with: 
			- a font size of '2.625rem' 
			- a line height of '1.15'
			
			- a '5.5xl' key with:
			- a font size of '3.375rem'
			- a line height of '1'
			
			💰 You can use an array to pass both the 
			font size and line hight like so:
			fontSize: {
				key: [ '2.625rem' // font size, '1.15' //line height ],
				}
				*/
			fontSize: {
				'4.5xl': ['2.625rem', '1.15'],
				'5.5xl': ['3.375rem', '1'],
			},
		},
	},
	plugins: [],
} satisfies Config
