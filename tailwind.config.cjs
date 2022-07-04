/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,js}'],
	theme: {
		extend: {
			fontFamily: {
				'title': 'Lack',
				'content': 'Montserrat'
			  },
			colors:{
				'primary': {
					DEFAULT: '#388A84',
					'50': '#A1D9D5',
					'100': '#92D3CE',
					'200': '#75C7C1',
					'300': '#58BBB4',
					'400': '#44A7A0',
					'500': '#388A84',
					'600': '#28625E',
					'700': '#183A38',
					'800': '#071211',
					'900': '#000000'
				  },
			}
		},
	},
	plugins: [
		require('@tailwindcss/line-clamp')
	],
}
