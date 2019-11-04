const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
function resolve(dir) {
  return path.join(__dirname, dir)
}

const isProduction = process.env.NODE_ENV === 'production'

// 是否使用gzip
const productionGzip = true
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ['js', 'css']

module.exports = {
  publicPath: '/',
  outputDir: 'public/master',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 8080
  },
  // 配置全局scss变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/mixin.scss";
        `
      }
    }
  },
  configureWebpack: config => {
    config.devtool = 'source-map'
    if (isProduction) {
      // 生产环境
      productionGzip && config.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 8192,
          minRatio: 0.8
        })
      );
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias.set('@assets', resolve('src/assets'))
    config.output.filename('[name].[hash].js').end()

    // 打包分析
    if (process.env.IS_ANALYZ) {
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [{
          analyzerMode: 'static',
        }]);
    }
  },
}


