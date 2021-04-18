module.exports = {
	purge: ["./src/pages/**/*.{tsx}", "./src/components/**/*.{tsx}"],
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
