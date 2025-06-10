const _0x35f0b4 = _0x8dca;
function _0x8dca(_0x116b87, _0x5ceca5) {
  const _0x39d6bf = _0x39d6();
  return (
    (_0x8dca = function (_0x8dca1d, _0x37dcd6) {
      _0x8dca1d = _0x8dca1d - 0xfa;
      let _0x2f2c85 = _0x39d6bf[_0x8dca1d];
      return _0x2f2c85;
    }),
    _0x8dca(_0x116b87, _0x5ceca5)
  );
}
function _0x39d6() {
  const _0x5ae9c2 = [
    "CLOUDINARY_API_SECRET",
    "/api/v1/eats/stores",
    "cookie-parser",
    "./routes/order",
    "https://checkout.stripe.com",
    "112652qssHmB",
    "express",
    "urlencoded",
    "Can\x27t\x20find\x20",
    "3948489iilVcg",
    "1700223BSBfFx",
    "all",
    "608376uFiONs",
    "views",
    "1898460mKyxai",
    "json",
    "/api/v1/eats/cart",
    "/api/v1/eats/orders",
    "./routes/restaurant",
    "join",
    "8sYluVI",
    "./routes/payment",
    "/api/v1/eats",
    "body-parser",
    "./routes/couponRoutes",
    "env",
    "config",
    "48CRQfTa",
    "./routes/cart",
    "\x20on\x20this\x20server\x20!",
    "./routes/auth",
    "set",
    "originalUrl",
    "pipe",
    "30kb",
    "10lZrxiC",
    "1IEDPUe",
    "CLOUDINARY_API_KEY",
    "/proxy",
    "express-fileupload",
    "1677294ppanPZ",
    "/api/v1/users",
    "url",
    "use",
    "/api/v1/eats/menus",
    "cors",
    "144HNXuow",
    "309980lAqwRy",
  ];
  _0x39d6 = function () {
    return _0x5ae9c2;
  };
  return _0x39d6();
}
(function (_0x173386, _0x940ecb) {
  const _0x25a848 = _0x8dca,
    _0x2ee646 = _0x173386();
  while (!![]) {
    try {
      const _0x354ee2 =
        (parseInt(_0x25a848(0x121)) / 0x1) *
          (-parseInt(_0x25a848(0x109)) / 0x2) +
        (-parseInt(_0x25a848(0x118)) / 0x3) *
          (-parseInt(_0x25a848(0x102)) / 0x4) +
        (parseInt(_0x25a848(0x120)) / 0x5) *
          (parseInt(_0x25a848(0x125)) / 0x6) +
        (parseInt(_0x25a848(0x107)) / 0x7) *
          (-parseInt(_0x25a848(0x111)) / 0x8) +
        parseInt(_0x25a848(0x106)) / 0x9 +
        -parseInt(_0x25a848(0x10b)) / 0xa +
        (-parseInt(_0x25a848(0xfc)) / 0xb) * (parseInt(_0x25a848(0xfb)) / 0xc);
      if (_0x354ee2 === _0x940ecb) break;
      else _0x2ee646["push"](_0x2ee646["shift"]());
    } catch (_0x5aacbd) {
      _0x2ee646["push"](_0x2ee646["shift"]());
    }
  }
})(_0x39d6, 0x5b260);
const express = require(_0x35f0b4(0x103)),
  app = express(),
  path = require("path"),
  cookieParser = require(_0x35f0b4(0xff)),
  bodyParser = require(_0x35f0b4(0x114)),
  cloudinary = require("cloudinary"),
  fileUpload = require(_0x35f0b4(0x124)),
  cors = require(_0x35f0b4(0xfa)),
  errorMiddleware = require("./middlewares/errors");
app[_0x35f0b4(0x128)](cors()),
  app["use"](express[_0x35f0b4(0x10c)]()),
  app[_0x35f0b4(0x128)](bodyParser[_0x35f0b4(0x104)]({ extended: !![] })),
  app[_0x35f0b4(0x128)](cookieParser()),
  app["use"](fileUpload()),
  cloudinary[_0x35f0b4(0x117)]({
    cloud_name: process[_0x35f0b4(0x116)]["CLOUDINARY_CLOUD_NAME"],
    api_key: process["env"][_0x35f0b4(0x122)],
    api_secret: process["env"][_0x35f0b4(0xfd)],
  }),
  app["use"](_0x35f0b4(0x123), (_0x182cbe, _0x60ff3c) => {
    const _0x13377c = _0x35f0b4;
    var _0x5d58f0 = _0x13377c(0x101) + _0x182cbe[_0x13377c(0x127)];
    _0x182cbe[_0x13377c(0x11e)](request(_0x5d58f0))[_0x13377c(0x11e)](
      _0x60ff3c
    );
  });
const foodRouter = require("./routes/foodItem"),
  restaurant = require(_0x35f0b4(0x10f)),
  menuRouter = require("./routes/menu"),
  coupon = require(_0x35f0b4(0x115)),
  order = require(_0x35f0b4(0x100)),
  auth = require(_0x35f0b4(0x11b)),
  payment = require(_0x35f0b4(0x112)),
  cart = require(_0x35f0b4(0x119));
app["use"](express[_0x35f0b4(0x10c)]({ limit: _0x35f0b4(0x11f) })),
  app[_0x35f0b4(0x128)](
    express["urlencoded"]({ extended: !![], limit: _0x35f0b4(0x11f) })
  ),
  app[_0x35f0b4(0x128)](_0x35f0b4(0x113), foodRouter),
  app[_0x35f0b4(0x128)](_0x35f0b4(0x129), menuRouter),
  app[_0x35f0b4(0x128)](_0x35f0b4(0xfe), restaurant),
  app[_0x35f0b4(0x128)](_0x35f0b4(0x10e), order),
  app[_0x35f0b4(0x128)](_0x35f0b4(0x126), auth),
  app[_0x35f0b4(0x128)]("/api/v1", payment),
  app[_0x35f0b4(0x128)]("/api/v1/coupon", coupon),
  app[_0x35f0b4(0x128)](_0x35f0b4(0x10d), cart),
  app[_0x35f0b4(0x11c)]("view\x20engine", "pug"),
  app[_0x35f0b4(0x11c)](
    _0x35f0b4(0x10a),
    path[_0x35f0b4(0x110)](__dirname, _0x35f0b4(0x10a))
  ),
  app[_0x35f0b4(0x108)]("*", (_0x2950f1, _0x498051, _0xdd2894) => {
    const _0x1e01c3 = _0x35f0b4;
    _0x498051["status"](0x194)[_0x1e01c3(0x10c)]({
      status: "fail",
      message:
        _0x1e01c3(0x105) + _0x2950f1[_0x1e01c3(0x11d)] + _0x1e01c3(0x11a),
    });
  }),
  app[_0x35f0b4(0x128)](errorMiddleware),
  (module["exports"] = app);
