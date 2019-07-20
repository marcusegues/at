const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/v1/symbols_details', {
      target: 'https://api.bitfinex.com',
      changeOrigin: true,
      secure: false,
    })
  );
};
