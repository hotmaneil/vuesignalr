
const webpack = require('webpack')

module.exports = {

  // chainWebpack:(config)=>{
  //   config.resolve.alias
  //   .set('components',path.resolve(__dirname,'src/components'))
  // },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
        'root.jQuery': 'jquery'
      })
    ]
  }
}
