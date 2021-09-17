const path = require("path")

module.exports = {
  publicPath: '',
  filenameHashing: false,

  css: {
    loaderOptions: {
      stylus: {
        import: [`~@/styles/global.styl`]
      }
    }
  },

  outputDir:  path.resolve(__dirname, "../../dist"),

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
