import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import * as path from "path";

// https://vitejs.dev/config/
// https://www.youtube.com/watch?v=5QV9wVc8c7g
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "CopyrightFooter",
            fileName: (format) => `copyright-footer.${format}.js`,
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
                exports: "named",
            },
        },
    },
    plugins: [vue(), dts({
        insertTypesEntry: true
    })],
});
