const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    host: 'localhost',
    port: 9000
  },
  publicPath: './',
  transpileDependencies: true
}
