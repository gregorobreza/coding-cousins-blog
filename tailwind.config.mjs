/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
				content: 'hsl(var(--color-content) / <alpha-value>)',
			}
		},
	},
	plugins: [],
}
