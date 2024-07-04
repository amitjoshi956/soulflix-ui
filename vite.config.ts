import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const resolvedPath = (p: string) => path.resolve(__dirname, p);
const isDevEnv = !import.meta.env || import.meta.env.VITE_NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            config: resolvedPath('./src/config'),
            common: resolvedPath('./src/common'),
            assets: resolvedPath('./src/assets'),
            components: resolvedPath('./src/components'),
            core: resolvedPath('./src/core'),
            layouts: resolvedPath('./src/layouts'),
            pages: resolvedPath('./src/pages'),
        },
    },
    build: {
        sourcemap: isDevEnv,
        minify: !isDevEnv,
    },
});
