# 使用vue3.0实现风袖小程序首页

### 安装

```
npm install
```

### 开发环境运行
```js
npm run serve
```

### 总结

- 使用组件库<code>vant3.0.0-alpha.3</code> <a>https://vant-contrib.gitee.io/vant/next/#/zh-CN/</a>

- 滚动库 <code>better-scroll</code> https://better-scroll.gitee.io/docs/zh-CN/

  > ​	滚动原理：浏览器的滚动条大家都会遇到，当页面内容的高度超过视口高度的时候，会出现纵向滚动条；当页面内容的宽度超过视口宽度的时候，会出现横向滚动条。也就是当我们的视口展示不下内容的时候，会通过滚动条的方式让用户滚动屏幕看到剩余的内容 。
  >
  > 具体参考文章 https://zhuanlan.zhihu.com/p/27407024
  >
  > 小程序scroll-view永远嘀神

- 移动端自适应问题

  本项目是使用vant组件库提供rem适配方案

  - [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
  - [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

  > 参考文章 https://juejin.im/post/6867874227832225805
  >
  > 小程序rpx永远嘀神

- 发送请求

  使用<code>axios库</code>

