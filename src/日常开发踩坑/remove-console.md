---
date: 2024-08-16
title: 记一次项目中自动去除console.log打印（非正常webpack、vite打包环境）
isOriginal: true
category: [git, javascript]
---
### **前言**

    前不久接到一个需求，为了保证信息安全的问题，需要去除项目中所有的console.log打印。常见的通过webpack、vite打包编译的项目都有对应的插件，比如babel插件[babel-plugin-transform-remove-console](https://www.npmjs.com/package/babel-plugin-transform-remove-console)、webpack插件[terser-webpack-plugin](https://www.npmjs.com/package/terser-webpack-plugin/v/1.4.5)等。但是我们的项目是属于php的前后端不分离项目，这应该怎么办呢？只能靠自己手搓nodejs脚本了。(需要支持node环境)

### **思路**

引入npm包管理工具，利用nodejs脚本修改文件内容，去除所有的console.log。然后利用git hooks脚本实现自动化，再然后通过lint-staged实现监听变化的文件。

### **npm初始化**

```powershell
npm init
```

然后根据命令行输入一系列命令，最后生成package.json文件。

### **nodejs脚本文件**

```javascript
const path = require('path');
const fs = require('fs');

// path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。遇到绝对路径时会重新开始解析
// path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径
function pathJudge(pathStr) {
 pathStr = path.resolve(__dirname, pathStr);
 
 const stats = fs.statSync(pathStr);
 // 判断路径是否是文件夹
 if (!stats.isDirectory()) {
  removeConsoleFile(pathStr);
 } else {
  // 读取文件夹
  const files = fs.readdirSync(pathStr);
  
  files.forEach(file => {
   const filePath = path.join(pathStr, file);
   pathJudge(filePath);
  })
 }
}


function removeConsoleFile(filePath) {
 const stats = fs.statSync(filePath);
 if (stats.isDirectory()) {
  return
 }
 if (stats.isFile() && (filePath.endsWith('.js') || filePath.endsWith('.php'))) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/console.log\((.*)\);?/g, '');
  fs.writeFileSync(filePath, content, 'utf-8');
 }
}


function main() {
 //这里是用来判断是否执行循环目录
 let filePath = process.env.NODE_PATH;
 
 if (filePath) {
  pathJudge(filePath);
 } else {
  // 这里是通过lint-staged拿到的变化的文件  
  filePath = process.argv.slice(2);
  filePath.forEach(filePath => {
   pathJudge(filePath);
  })
 }
}

main();



```

### **脚本自动化执行**

1. **git hooks介绍**

   Git hooks 是 Git 提供的一种机制，允许在特定事件发生时执行自定义脚本。它们可以让你在 Git 的生命周期中插入自定义的行为，这能帮助开发团队在代码提交、合并、推送等操作时进行自动化处理，如代码格式化、单元测试、静态检查等。以下是常见的 Git hooks 类型：

   | Hook 名称                 | 触发时机                                                         | 用途                                         |
   | ------------------------- | ---------------------------------------------------------------- | -------------------------------------------- |
   | `applypatch-msg`        | `git am` 处理补丁文件时                                        | 检查补丁文件的提交信息                       |
   | `pre-applypatch`        | `git am` 应用补丁之前                                          | 执行动作，如消息通知                         |
   | `post-applypatch`       | `git am` 应用补丁之后                                          | 通常用于通知用户补丁应用完成                 |
   | `pre-commit`            | 提交代码之前                                                     | 检查代码，如运行测试或代码风格检查           |
   | `prepare-commit-msg`    | `git commit` 生成提交信息之前                                  | 修改生成的提交信息模板                       |
   | `commit-msg`            | `git commit` 编写提交信息之后                                  | 检查或修改提交信息                           |
   | `post-commit`           | 提交成功后                                                       | 通知用户或执行后续动作，如触发 CI/CD 流程    |
   | `pre-rebase`            | `git rebase` 之前                                              | 允许钩子脚本在变基前停止执行或执行前准备动作 |
   | `post-rewrite`          | 由 `git commit --amend` 和 `git rebase` 等命令重写提交记录后 | 通知用户提交记录被重写                       |
   | `pre-push`              | `git push` 之前                                                | 运行任务，如发布前检查或测试                 |
   | `pre-receive`           | 远程仓库接收到推送前                                             | 检查推送内容或拒绝推送                       |
   | `update`                | 远程仓库接收到推送，分支更新时                                   | 检查更新内容或拒绝更新                       |
   | `post-receive`          | 远程仓库接收到推送后                                             | 执行后续任务，如部署或通知                   |
   | `post-update`           | `git push` 更新成功后                                          | 通常用于更新服务端的引用或通知               |
   | `reference-transaction` | 引用被创建、更新或删除时                                         | 跟踪引用变化                                 |
   | `push-to-checkout`      | 远程推送直接签出到工作目录时                                     | 更新工作目录内容前执行动作                   |
   | `pre-auto-gc`           | `git gc --auto` 之前                                           | 在自动垃圾回收前执行动作                     |
   | `post-checkout`         | 切换分支或恢复文件之后                                           | 通知用户或执行后续任务，如重建依赖           |
   | `post-merge`            | 合并完成后                                                       | 通知用户或执行后续任务，如重新编译           |
   | `post-rewrite`          | 由 `git commit --amend` 和 `git rebase` 等命令重写提交记录后 | 通知用户提交记录被重写                       |
   | `pre-reflog`            | 更新引用日志前                                                   | 执行检查或准备工作                           |
   | `post-reflog`           | 更新引用日志后                                                   | 通知用户或执行后续任务                       |
   | `post-index-change`     | 索引文件被更改后                                                 | 通知用户或执行后续任务                       |

   其中**pre-commit**这个hooks是我们所需要使用的。
2. **husky使用**

   [husky官网](https://typicode.github.io/husky/zh/get-started.html)

   首先安装husky

   ```powershell
   npm install --save-dev husky
   ```

   初始化husky，会在package.json生成一个script命令

   ```powershell
   npx husky init
   ```

   ```json
   {
     "scripts": {
       "prepare": "husky"
     }
   }
   ```

   执行这个命令 `npm run prepare`，会在 `.husky/` 目录中创建一个 `pre-commit` 文件，在这个里面可以执行shell命令，如何npm run xxx等等。（**husky4以上版本**）

   比如我们要执行这个node脚本呢，就可以在这个文件里面写一下命令就会在提交前执行我们的node脚本。

   ```javascript
   node ./remove-console.js
   ```

   这样我们的工作量基本完成了90%了。接下来我们用lint-staged来完成只去除修改过的文件的console。
3. lint-staged使用

   [官网](https://github.com/lint-staged/lint-staged)

   首先install

   ```powershell
   npm install --save-dev lint-staged # requires further setup
   ```

   package.json加入以下代码

   ```json
     "lint-staged": {
       "*.{js,php}": [
         "npm run remove-console"
       ]
     }
   ```

   前面创建的 `pre-commit`文件加入以下代码

   ```powershell
   npx lint-staged
   ```

   nodejs脚本中 `process.argv.slice(2)`可以拿到变化的文件数组，遍历即可。[process_argv介绍](https://nodejs.cn/api/process/process_argv.html)

   现在就完成所有的工作量了。

### **补充**

1. **设置node运行环境变量**

   windows cmd中：

   ```
   set NODE_ENV=production && node app.js
   ```
   windows powershell中：

   ```powershell
   $env:NODE_ENV="production"; node app.js
   ```
   macOS/Linux中：

   ```bash
   export NODE_ENV=production node app.js
   ```
   node脚本可以通过 `process.env.xxx`拿到对应的值。

   这样多端不同意很不方便，我们可以使用[`cross-env`](https://www.npmjs.com/package/cross-env)这个库统一规范。

   使用方法：

   ```powershell
   cross-env NODE_PATH=./addons/fecmall/fecro/ node remove-console.js
   ```
2. **commitizen使用**

   团队开发时，可以使用commitizen规范提交日志。

   首先安装对应的包。全局安装commitizen

   ```powershell
   npm install -g commitizen
   ```
   安装[cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog) commitizen 适配器。（还有一个cz-customizable可以定制提交规范）

   ```powershell
   commitizen init cz-conventional-changelog --save --save-exact  #--save-exact 代表版本，不会加^和~
   ```
   这样package.json文件会增加以下内容

   ```json
   "config": {
       "commitizen": {
         "path": "./node_modules/cz-conventional-changelog"
       }
     },
   ```
   这样我们 `git add`之后，然后执行 `git cz`就会出现以下内容。

   ![image-20240817153750652](.\image\remove-console\image-20240817153750652.png)

   这样就大功告成啦。
