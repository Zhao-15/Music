1. cra初始化项目     create-react-app demo
2. 自定义(覆盖)webpack配置craco
2.1 安装
npm i -D @craco/craco 或 yarn add @craco/craco -D

2.2 配置文件
  demo
  ├── node_modules
  ├── craco.config.js  +
  └── package.json

2.3 package.json
"scripts": {
-  "start": "react-scripts start"
+  "start": "craco start"
-  "build": "react-scripts build"
+  "build": "craco build"
-  "test": "react-scripts test"
+  "test": "craco test"
}


3.tailwindcss  (https://www.tailwindcss.cn/docs/guides/create-react-app)              yarn add tailwindcss -D    npx tailwindcss init
4.jsconfig.json配置路劲别名的映射
5.UI库的配置
6.请求库的配置


npx abc ==> 运行./node_modules/.bin/abc
#!/usr/bin/env node    告诉操作系统 该文件由谁执行
webpack ==> 去环境变量中 Path 去匹配