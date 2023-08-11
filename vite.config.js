import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
	plugins: [react(), viteImagemin(), ViteMinifyPlugin({})],
});
