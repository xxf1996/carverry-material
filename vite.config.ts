/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import ElementPlus from 'unplugin-element-plus/vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: resolve(__dirname, 'src') + '/',
      }, // 模块路径alias
    ],
  },
  plugins: [
    vue(),
    ElementPlus({
      useSource: false,
    }),
  ],
  test: {
    include: ['src\/**\/*.spec.ts'],
    deps: {
      // inline: ['@popperjs/core'],
      inline: [/element-plus/], // 不设置会报错；相关issue：https://github.com/vitest-dev/vitest/issues/968
    },
    environment: 'jsdom',
  },
});
