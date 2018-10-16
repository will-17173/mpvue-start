# mpvue-start

> Mpvue小程序开发项目框架，添加了云开发，mock，request, 一些常用的功能函数和引用示例。

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

## 云开发
> 确保你的微信开发工具是最新版的
> [小程序云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

#### 1. 开启云开发功能
在微信开发者工具中点击云开发， 按提示开通云开发功能
#### 2. 查询数据示例
在`src/config.js`配置cloudEnv为你的环境ID，在数据库中新建一个集合`demo`， 直接在控制台添加一条记录  

```
// `src/pages/index/index.vue`中的查询代码
import config from '@/config';
const db = wx.cloud.database({ env: config.cloudEnv });
db.collection('demo')
    .get()
    .then(res => {
        console.log(res);
    })
    .catch(console.error);
```
#### 3. 云函数
云函数目录是`cloud-functions`, 已经建了一个示例函数user，功能是获取用户openId，在user目录运行`npm i`安装wx-server-sdk，然后在小程序开发工具的编辑器里的user目录上点右键选择上传并部署。  
```
// `src/pages/index/index.vue`中的代码
wx.cloud
    .callFunction({ name: 'user' })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.error(err));
```

## MOCK
mock功能目录`mock`, 使用mockjs
```
const Mock = require('mockjs')
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(Mock.mock({
    "result": "success"
    }
  }))
})
```
## HTTP
http使用fly库，接口定义在`src/http/api.js`
```
const api = {
  testGet: (params) => request.get(`${host}${apiVersion}/`, params),
  testPost: (params) => request.post(`${host}${apiVersion}/home`, params),
  testPut: (params) => request.put(`${host}${apiVersion}/home`, params),
  testDel: (params) => request.delete(`${host}${apiVersion}/home` + params.id, params),
}
```
接口挂载到Vue.$http上，调用示例：
```
this.$http.testGet().then(res => {
    // console.log(res)
});
const res = await this.$http.testGet();
```

## Event Bus
在Vue的原型上挂载了一个bus
```
// src/main.js
const Bus = new Vue();
Vue.prototype.$bus = Bus;

// 使用
this.$emit('customEvent', {foo: bar})
this.$on('customEvent, data => {
    console.log(data)
})
```



## 目录结构
```
│  app.json
│  App.vue
│  config.js
│  env.js
│  main.js
├─common
│  ├─assets
│  └─scss
├─components
├─http
│      api.js
│      http.js
├─pages
│  └─index
│          index.vue
│          main.js
│          main.json
├─store
│  │  index.js
│  │  mutation-types.js
│  └─modules
└─utils
    index.js 常用功能函数
    login.js 登录相关
    request.js 原生request promise化，如果不用fly可以用这个
    system.js 硬件相关
    url.js url解析
    wcache.js storage强化
    wx-touch.js 手势操作
```