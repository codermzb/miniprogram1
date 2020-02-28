module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'network': '@/network',
        'static': '@/static',
        'pages': '@/pages',
        'components': '@/components',
      }
    }
  }
}
