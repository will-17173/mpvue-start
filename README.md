# mpvue-start

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 常见问题
1. 如何获取小程序在 page onLoad 时候传递的 options
> 在所有 页面 的组件内可以通过 `this.$root.$mp.query` 进行获取。
2. 如何获取小程序在 app onLaunch/onShow 时候传递的 options
> 在所有的组件内可以通过 `this.$root.$mp.appOptions` 进行获取。
3. 如何捕获 app 的 onError
> 由于 onError 并不是完整意义的生命周期，所以只提供一个捕获错误的方法，在 app 的根组件上添加名为 onError 的回调函数即可。如下：  
```
export default {
   // 只有 app 才会有 onLaunch 的生命周期
   onLaunch () {
       // ...
   },
   // 捕获 app error
   onError (err) {
       console.log(err)
   }
}
```