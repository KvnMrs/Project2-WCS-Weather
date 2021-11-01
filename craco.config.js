/* eslint-disable import/no-extraneous-dependencies */
// craco.config.js
module.exports = {
  style: {
    postcss: {
      // eslint-disable-next-line import/no-extraneous-dependencies
      // eslint-disable-next-line global-require
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
