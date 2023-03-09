/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'sands': '#34adea',
			},
			fontSize: {
				'huge': '23vh',
			},
			fontFamily: {
				'sans': 'Arial, Helvetica,  sans-serif',
			},
		}
	},
	plugins: []
};
