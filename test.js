import passport from 'passport-local-mongoose';

console.log(passport)



const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require("daisyui")]
};

module.exports = config;
