const path = require('path')
const ElementPlus = require('unplugin-element-plus/vite')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config) {
    config.resolve.alias = [
      {
        find: /^@\//,
        replacement: path.resolve(__dirname, '..', 'src') + '/'
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js'
      }
    ]
    config.plugins.push(ElementPlus())
    config.cacheDir = 'node_modules/.vite-storybook' // 避免跟开发环境一个缓存目录，以免相互覆盖；https://vitejs.dev/config/#cachedir
    return config
  }
}
