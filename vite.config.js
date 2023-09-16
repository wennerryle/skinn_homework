import { defineConfig } from "vite";

console.log("hello from config!");

export default defineConfig({
    server: {
        host: true
    },
    build: {
        minify: 'esbuild',
        cssMinify: 'lightningcss'
    }
})