import {sveltekit} from '@sveltejs/kit/vite'
import {defineConfig} from 'vitest/config'

// console.log('isProduction', process.env)

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['tests/unit/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		threads: false,
		globals: true,
		coverage: {
			reporter: ['text', 'text-summary', 'lcovonly', 'cobertura'],
		},
	},
	build: {
		rollupOptions: {
			external: ['@tadashi/hex-id'],
		},
	},
})
