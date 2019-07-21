const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/v1/symbols_details', {
      changeOrigin: true,
      secure: false,
      target: 'https://api.bitfinex.com',
    })
  );
};
