## @carverry/demo-material ![img](https://img.shields.io/npm/v/@carverry/demo-material)

基于`carverry`的示例物料仓库；

## 注意事项

- 采用**不打包**，源码引入模式（除了输出组件的元数据外）；

  > 因此，在本地项目中使用时，还需要对element-plus增加[手动引入配置](https://element-plus.org/zh-CN/guide/quickstart.html#%E6%89%8B%E5%8A%A8%E5%AF%BC%E5%85%A5)，且使用自定义`exclude`配置：
  >
  > ```ts
  > export default defineConfig({
  >   // ...
  >   plugins: [
  >     // ...
  >     ElementPlus({
  >       // 这里的正则确保对@carverry的包也会进行手动导入组件且自动加载样式
  >       exclude: [/[/\\]node_modules[/\\](?!@carverry)/, /[/\\]\.git[/\\]/, /[/\\]\.nuxt[/\\]/]
  >     }),
  >   ]
  > })
  > ```

- 所有的`dependencies`（直接依赖）都按照`devDependencies`进行安装，且在`peerDependencies`指定兼容范围；

- 使用`storybook`构建组件交互文档；

- 使用`vitest`框架运行单测用例；
