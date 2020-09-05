module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue', '.scss', '.html'],
    },
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://se.7yue.pro/v1/',
        changeOrigin: true,
      }
    }
  }
}
