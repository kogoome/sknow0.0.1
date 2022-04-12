import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$config: path.resolve('./src/lib/config'),
					$feature: path.resolve('./src/lib/featureComponenet'),
					$util: path.resolve('./src/lib/util'),
					$controller: path.resolve('./src/lib/mongoose/controller'),
					$model: path.resolve('./src/lib/mongoose/model'),
					$routes: path.resolve('./src/routes'),
				}
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
