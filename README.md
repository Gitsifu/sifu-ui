> Vue UI组件库开发
>
> [文档](https://gitsifu.github.io/sifu-ui/)开发

相关参考资料

[https://vuepress.vuejs.org/zh/](https://vuepress.vuejs.org/zh/)

[https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93](https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93)

> A Vue.js 2.0 UI Toolkit for Web.

## 使用

### 安装
```
# 通过 npm 安装
npm i sifu-ui -S

# 通过 yarn 安装
yarn add sifu-ui
```

### 快速上手
```
import Vue from 'vue'
import SifuUI from 'sifu-ui'

// 全部引入
Vue.use(SifuUI)

// or 按需引入
import {
  Select,
  Button
  // ...
} from 'sifu-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

## 组件库发布(发布前需修改package.json中的version,版本必须比线上版本高)
```
npm run npm.publish
```

## 文档
### 文档开发
```
npm run docs:dev
```

## 文档编译
```
npm run docs:build
```

## 文档编译&发布
> 执行根目录下的`deploy.sh`脚本

