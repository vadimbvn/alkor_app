const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/app/helpers/_index";
                         @import "~@/assets/styles/bootstrap/_helpers";
                        `
      }
    }
  },
  productionSourceMap: false,
  transpileDependencies: true,
  publicPath: ''
});
