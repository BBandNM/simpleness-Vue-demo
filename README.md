# simpleness-Vue-demo
# 初步使用vue3结合vant的一些简单demo
第一次使用vue，结合vant实现一些小的demo，所以直接使用vue3，vue cli 快速创建项目 


初步操作：
1：vue-cli创建项目 vue create vue-demo 
2：cd vue-demo
3: 启动本地服务：npm run serve 
4：npm run build


#第二步：
创建完成后，可以通过命令打开图形化界面，如下图所示
vue ui
通过 npm 安装
npm i vant -S


通过 yarn 安装
yarn add vant



自动按需引入组件 
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式


# 在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};


接着你可以在代码中直接引入 Vant 组件
插件会自动将代码转化为方式二中的按需引入形式


import { Button } from 'vant';
