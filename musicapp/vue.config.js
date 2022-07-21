const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  pages:{
    index:{
      entry:'src/main.js',
      title:'小陈音乐'
    }
  },
})

// 打包配置
// module.exports = {
//   publicPath:'./',
//   pages:{
//     index:{
//       entry:'src/main.js',
//       title:'小陈音乐'
//     }
//   },
//   devServer: {
//     disableHostCheck: true, // 关闭host检查
//   },
// }
