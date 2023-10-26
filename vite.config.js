import { defineConfig } from "vite";

console.log("hello from config!");

export default defineConfig({
    base: '/skinn_homework',
    server: {
        host: true
    },
    build: {
        minify: 'esbuild',
        cssMinify: 'lightningcss'
    }
})