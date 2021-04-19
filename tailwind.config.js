module.exports = {
	mode: "jit",
	purge: ["./src/components/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary-dark": "#181a1d",
				"secondary-dark": "#191a1c",
				"background-dark": "#202226"
			},
		},
	},
	variants: {
		extend: {
			display: ["dark"],
			boxShadow: ["dark"]
		},
	},
};
