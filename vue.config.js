module.exports = {

  /* AWSの設定 */
  devServer: {
    public: process.env.C9_PID
      ? `${process.env.C9_PID}.vfs.cloud9.ap-northeast-1.amazonaws.com`
      : 'localhost:8080',
  },

  /* vue-loaderの設定 */
  /* 
    https://cli.vuejs.org/guide/webpack.html#simple-configuration
    https://github.com/bootstrap-vue/bootstrap-vue/issues/2392
    https://vue-loader.vuejs.org/options.html#transformasseturls 
  */
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .options({
        // modify the options...
        transformAssetUrls: {
          'b-img': 'src',
          img: 'src',
          audio: 'src',
        }
      });
  }

};
