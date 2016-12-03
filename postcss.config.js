var variables = require('./src/css/variables');

module.exports = {
  plugins: [
    // require('postcss-smart-import')({ /* ...options */ }),
    // require('postcss-simple-vars')({
    //   variables: variables
    // }),
    require('autoprefixer')({
      browsers: ['ff > 5', 'ie > 8', 'chrome > 10']
    })
  ]
}
