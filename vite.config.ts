import type { Options } from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import WindiCSS from 'vite-plugin-windicss';

const reactSetting: Options = {
    jsxImportSource: '@emotion/react',
    jsxRuntime: 'automatic',
    // babel: {
    //     plugins: ["@emotion/babel-plugin"]
    // },
};

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react(reactSetting),
        WindiCSS(),
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]',
            /**
             * 自定义插入位置
             * @default: body-last
             */
            inject: 'body-last',

            /**
             * custom dom id
             * @default: __svg__icons__dom__
             */
            customDomId: '__svg__icons__dom__',
        }),
    ],
    css: {
        // modules:{
        //     localsConvention: "camelCaseOnly",
        // },
        postcss: {
            plugins: [
                autoprefixer({
                    grid: 'no-autoplace',
                }),
            ],
        },
    },
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    esbuild: {
        // jsxFactory:"jsx",
        // // jsxFactory:"",

        // jsxInject:`/** @jsx jsx */\n import { jsx } from '@emotion/react'`,
        define: {
            this: 'window',
        },
    },
});

