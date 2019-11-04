# vue-template

## 项目命令
```
npm install //安装依赖
npm run serve //启动本地服务
npm run build //打包
npm run master //正式环境打包
npm run test //测试环境打包
npm run analyz //本地分析包
```


### 项目目录
    |-- .env.analyz //分析环境
    |-- .env.master //正式环境
    |-- .env.test //测试环境
    |-- .gitignore
    |-- README.md
    |-- babel.config.js
    |-- package-lock.json
    |-- package.json
    |-- vue.config.js
    |-- public //打包输出目录
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.js
        |-- api
        |   |-- host.js //接口域名切换
        |   |-- index.js //项目所有接口列表
        |   |-- request.js //封装axios
        |-- assets //静态资源
        |   |-- image
        |       |-- logo.png
        |-- components //所有组件
        |   |-- HelloWorld //组件名
        |       |-- index.vue 
        |       |-- image //组件图片
        |-- directives //指令
        |   |-- index.js
        |-- filters //全局过滤器
        |   |-- index.js
        |-- mixin
        |-- plugins //第三方插件
        |-- router //路由列表
        |   |-- index.js
        |-- store 
        |   |-- getters.js
        |   |-- index.js
        |   |-- modules
        |       |-- user.js
        |-- styles //样式
        |   |-- mixin.scss
        |   |-- reset.scss
        |-- utils //公用方法
        |   |-- index.js
        |-- views //页面
            |-- Home
                |-- index.vue
                |-- image



### 开发规范
1. 所有命名（方法名，类名，组件名）全部英文，严禁拼音。
2. 组件，页面命名全部大驼峰。例：HelloWorld。
3. JS尽量使用ES6 语法。
4. scss避免嵌套太深，全部使用局部样式。严禁行内样式。
5. 引入图片需使用tinypng压缩。


