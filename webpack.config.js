// Webpack uses this to work with directories
import * as path from 'path';

// To copy static files
import CopyWebpackPlugin from 'copy-webpack-plugin';

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
export default {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './src/ui.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve('', 'dist'),
    publicPath: '',
    filename: 'assets/web.js'
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development
  mode: 'production'
};