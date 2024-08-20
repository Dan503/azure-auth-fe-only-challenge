import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/azure-auth-fe-only-challenge/',
	build: {
		outDir: './docs',
	},
	plugins: [react()],
})
