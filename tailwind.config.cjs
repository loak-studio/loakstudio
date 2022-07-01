/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,js}'],
	theme: {
		extend: {
			colors:{
				'primary': {
					DEFAULT: '#00A99D',
					'50': '#BDFFE1',
					'100': '#9FFFD7',
					'200': '#62FFCC',
					'300': '#24FFCA',
					'400': '#00E6C2',
					'500': '#00A99D',
					'600': '#008D8F',
					'700': '#006A76',
					'800': '#004B5C',
					'900': '#003143'
				  },
			}
		},
	},
	plugins: [],
}
