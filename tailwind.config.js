/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				"puff-in-center": {
					"0%": {
						transform: "scale(2)",
						filter: "blur(4px)",
						opacity: "0",
					},
					"100%": {
						transform: "scale(1)",
						filter: "blur(0px)",
						opacity: "1",
					},
				},
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
				"slide-in-bottom": {
					"0%": {
						transform: "translateY(1000px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
			},
			animation: {
				"puff-in-center":
					"puff-in-center 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both",
				"fade-in": "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
				"slide-in-bottom":
					"slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
			},
		},
	},
	plugins: [],
};
