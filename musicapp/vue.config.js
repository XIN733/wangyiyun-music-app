// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath:'./',
//   pages:{
//     index:{
//       entry:'src/main.js',
//       title:'小陈音乐'
//     }
//   },
// })

// 打包配置
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  publicPath: './',
  pages:{
    index:{
      entry:'src/main.js',
      title:'小陈音乐'
    }
  }
}
