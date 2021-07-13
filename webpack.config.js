const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports={
  entry:{
    index:'./src/index.js',
    print:'./src/print.js'
  },
  devtool:'inline-source-map',
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist'),
    clean:true,
    publicPath: '/'
  },
  devServer:{
    contentBase:'./dist'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'管理输出'
    })
  ]
}