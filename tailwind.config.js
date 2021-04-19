module.exports = {
	purge: ["./src/components/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"gray-750": "#283547",
				"gray-775": "#243141",
			},
		},
	},
	variants: {
		extend: {
			display: ["dark"],
		},
	},
	plugins: [],
};
