const path = require("path")

module.exports = {
  publicPath: '',
  filenameHashing: false,
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "G-Fair 2021 - Good Merchandise Online Trade Meet Korea";
            return args;
        })
  },
  css: {
    loaderOptions: {
      stylus: {
        import: [`~@/styles/global.styl`]
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
