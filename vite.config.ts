import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
// https://www.youtube.com/watch?v=5QV9wVc8c7g
// https://www.youtube.com/watch?v=ui717bVHS4I
export default defineConfig({
    plugins: [
        vue(),
        typescript2({
            check: false,
            // include: ["src/components/*.vue"],
            tsconfigOverride: {
                compilerOptions: {
                    sourceMap: false,
                    declaration: true,
                    declarationMap: false,
                },
            },
            exclude: [
                "vite.config.ts",
            ],
        }),
    ],
    build: {
        cssCodeSplit: false,
        lib: {
            entry: "./src/index.ts",
            formats: ["es", "cjs"],
            name: "CopyrightFooter",
            fileName: (format) => format === "es" ? "index.js" : "index.cjs",
        },
        rollupOptions: {
            external: ["vue", "naive-ui"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
});
