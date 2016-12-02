var colors = require('./src/css-vars/colors.js');
module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('postcss-simple-vars')({
      variables: colors
    }),
    require('autoprefixer')({
      browsers: ['ff > 5', 'ie > 8', 'chrome > 10']
    })
  ]
}
