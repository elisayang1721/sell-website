const webpack = require('webpack')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  publicPath: './',
  devServer: {
    port: 7000
  },
  chainWebpack: config => {
    // pug
    const pugRule = config.module.rule('pug')
    pugRule
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg')) //  loader處理的目錄
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg')) // loader處理的目錄
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  configureWebpack: {
    // 輸出配置
    output: {
      filename: '[name].[hash].js', // 文件名稱 name ==> app ===> app.js
      chunkFilename: '[name].[chunkhash].js'
    },
    // 導入時的配置
    resolve: {
      alias: {
        '@as': '@/assets',
        '@c': '@/components',
        '@com': '@/common',
        '@v': '@/views',
        '@img': '@/assets/img',
        '@css': '@/assets/css',
        '@mix': '@/assets/mixins',
        '@js': '@/assets/js',
        '@api': '@/api',
        '@svg': '@/assets/svg'
      }
    },
    // 插件
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@css/_variable.scss";'
      }
    }
  }
}
