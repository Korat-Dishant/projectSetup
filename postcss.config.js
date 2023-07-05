/** @type {import('postcss-load-config').Config} */

// no need to use this plugins if you are using postcss-preset-env 
// module.exports = {
//   plugins: [require('autoprefixer'), require('postcss-nested')],
// };

module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        // Options
      },
    ],
  ],
};
