import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [preprocess(), mdsvex({ extensions: ['mdx'] })],

    extensions: ['.svelte', '.mdx'],

    kit: {
        adapter: vercel(),

        package: {
            exports: (file) => {
                return ['index.ts', 'transition.ts'].includes(file);
            },
        },
    },
};

export default config;
