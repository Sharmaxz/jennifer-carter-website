// import adapter from '@sveltejs/adapter-auto';
import adapter from "svelte-adapter-azure-swa";
// import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: adapter(),
  },
};

export default config;
