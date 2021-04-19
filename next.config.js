module.exports = {
	future: {
		webpack5: true,
		strictPostcssConfiguration: true,
	},
	experimental: {
		externalDir: true,
	},
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	redirects: async () => [
		{
			source: "/search",
			destination: "/",
			permanent: false,
		},
	],
};
