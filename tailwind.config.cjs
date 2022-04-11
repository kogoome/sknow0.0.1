const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],

	theme: {
		extend: {}
	},

	plugins: [
		require('tw-elements/dist/plugin'),
		require("daisyui")
	],
	daisyui: {
		styled: true,
		themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
			{
				mytheme: {
					"primary": "#9bfc71",
					"secondary": "#c15522",
					"accent": "#f2c6a7",
					"neutral": "#282432",
					"base-100": "#3C3B3F",
					"info": "#2196E4",
					"success": "#49E4AB",
					"warning": "#9C6511",
					"error": "#DC3268",
				}
			}],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "dark",
	},
};

module.exports = config;
