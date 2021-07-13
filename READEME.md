# webpack 笔记

- 执行 `npx webpack` 默认入口为 `src/index.js`, 出口为 `dist/main.js`

- 在 `package.json` 文件的 `scripts` 里面添加 `"build":"webpack"`， 可以使用 `npm run build` 代替 `npx webpack` 优化打包


## 管理资源
###  加载css
在 `webpack.config.js` 中配置
```js
module:{
  rules:[
    {
      test:/\.css$/i, //使用正则
      use:[
        // style-loader 需要在 css-loader前面添加，loader 使用顺序从右到做，从下到上。需要先 css-loader 先加载 css， style-loader 才能把样式内联到出口文件内
        'style-loader', 
        'css-loader'
      ]
    }
  ]
}
```


### 加载图片
使用 `webpack` 内置的 `Asset Modules`, 将图片内容混入系统中

```js
module:{
  rules:[
    {
      test:/\.(png|jpe?g|svg|gif)$/i,
      type:'asset/resource'
    }
  ]
}
```


### 加载fonts字体
同图片加载，使用 `webpack` 内置的 `Asset Modules`
```js
module:{
  rules:[
    {
      test:/\.(woff|woff2|eot|ttf|otf)$/i,
      type:'asset/resource'
    }
  ]
}
```

### 数据加载
- csv/xml: 需要下载相应的 loader ，并在 `webpack.config.js` 中配置 loader 使用
- json5/yaml/toml: 需要下载相应的文件格式库， 并在 `webpack.config.js`  中配置 指定 `type:'json'` 并设置 `parser:{parse: <type>.parse}`。



## 管理输出

- html-webpack-plugin 自动生成 `index.html` 文件，并链接输出文件到 `index.html` 中
- 在 `webpack.config.js` 的 `output` 中设置 `clean:true`,构建时自动清理上一次构建的 `dist` 文件，避免文件过多