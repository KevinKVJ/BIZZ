import { defineConfig } from 'vite-plugin-windicss'

const range = (size: number) => Array.from(Array(size), (_, i) => i + 1)

export default defineConfig({
    preflight: false,
    safelist: [
        // range(3).map(i => `p-${i}`), // p-1 到 p-3
        // range(2000).map(i => `gap-x-${i}px`), // mt-1 到 mt-10
        // range(1000).map(i => `gap-y-${i}px`), // mt-1 到 mt-10
    ],
})