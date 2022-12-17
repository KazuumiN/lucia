/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				main: "#5f57ff",
				"black-zinc": "#121214",
				"svelte": "#ff6430"
			}
		}
	},
	darkMode: "class",
	plugins: []
};
