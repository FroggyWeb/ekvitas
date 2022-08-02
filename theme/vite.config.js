import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import sassGlobImports from 'vite-plugin-sass-glob-import';
import autoprefixer from "autoprefixer";
import path from 'path';
import FastGlob from "fast-glob";
const globImport = require("rollup-plugin-glob-import");


export default defineConfig ({
    publicDir: 'fake_dir_so_nothing_gets_copied',
    css: {
        devSourcemap: true, // this one
        postcss: {
            plugins: [autoprefixer],
            },
            preprocessorOptions: {
            scss: {
                sassOptions: {},
            },
        },
    },
    build: {
        manifest: true,
        sourcemap: true,
        outDir: 'dist',
        rollupOptions: {
            input: '_src/js/main.js',
            output: {
                manualChunks: undefined,
                assetFileNames: "assets/[name].[ext]",
                chunkFileNames: 'assets/js/[name].js',
                entryFileNames: 'assets/js/[name].js',
            },
        },
    },
    plugins: [
    sassGlobImports(),
    globImport(),
    createSvgIconsPlugin ({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "_src/svg-ico")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
    }),
  ],
});
