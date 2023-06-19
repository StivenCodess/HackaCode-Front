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
				"slide-in-fwd-center": {
					"0%": {
						transform: "translateZ(-1400px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateZ(0)",
						opacity: "0.3",
					},
				},
				"slide-in-fwd-center-less-opa": {
					"0%": {
						transform: "translateZ(-1400px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateZ(0)",
						opacity: "0.1",
					},
				},
				"slide-in-blurred-bottom": {
					"0%": {
						transform: "translateY(400px)",
						transformOrigin: "50% 100%",
						filter: "blur(40px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						transformOrigin: "50% 50%",
						filter: "blur(0)",
						opacity: "0.3",
					},
				},
				"slide-in-blurred-bottom-less-opa": {
					"0%": {
						transform: "translateY(400px)",
						transformOrigin: "50% 100%",
						filter: "blur(40px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						transformOrigin: "50% 50%",
						filter: "blur(0)",
						opacity: "0.1",
					},
				},
				"slide-in-top": {
					"0%": {
						transform: "translateY(-1000px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
				"slide-out-top": {
					"0%": {
						transform: "translateY(0)",
						opacity: "1",
					},
					"100%": {
						transform: "translateY(-1000px)",
						opacity: "0",
					},
				},
			},
			animation: {
				"puff-in-center":
					"puff-in-center 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both",
				"fade-in": "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
				"slide-in-bottom":
					"slide-in-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
				"slide-in-fwd-center-1":
					"slide-in-fwd-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s backwards",
				"slide-in-fwd-center-2":
					"slide-in-fwd-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s backwards",
				"slide-in-fwd-center-3":
					"slide-in-fwd-center-less-opa 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.6s backwards",
				"slide-in-fwd-center-4":
					"slide-in-fwd-center-less-opa 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.7s backwards",
				"slide-in-blurred-bottom":
					"slide-in-blurred-bottom 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.2s backwards",
				"slide-in-blurred-bottom-2":
					"slide-in-blurred-bottom-less-opa 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.2s backwards",
				"slide-in-top":
					"slide-in-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) backwards",
				"slide-out-top":
					"slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
			},
		},
	},
	plugins: [],
};
