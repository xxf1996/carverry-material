## 关于

基于`carverry`的示例物料仓库；

## 注意事项

- 采用**不打包**，源码引入模式（除了输出组件的元数据外）；
- 所有的`dependencies`（直接依赖）都按照`devDependencies`进行安装，且在`peerDependencies`指定兼容范围；
- 使用`storybook`构建组件交互文档；
- 使用`vitest`框架运行单测用例；
