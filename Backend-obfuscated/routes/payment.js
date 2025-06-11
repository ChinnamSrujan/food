function _0x3cfc(_0xf98963, _0x4e9604) {
  const _0x2f290b = _0x2f29();
  return (
    (_0x3cfc = function (_0x3cfc1a, _0x7b9f1f) {
      _0x3cfc1a = _0x3cfc1a - 0xe7;
      let _0x32cdd0 = _0x2f290b[_0x3cfc1a];
      return _0x32cdd0;
    }),
    _0x3cfc(_0xf98963, _0x4e9604)
  );
}
const _0x3b3c9c = _0x3cfc;
function _0x2f29() {
  const _0x5a6865 = [
    "559104LjQFbs",
    "1233428gzfIoz",
    "7672483FIwlfq",
    "post",
    "1575636qFGFgY",
    "protect",
    "5425128SGcSja",
    "5153405oNoJil",
    "1tScaKf",
    "6501552NNmqTf",
    "/payment/process",
    "../controllers/paymentController",
    "/stripeapi",
    "get",
    "express",
    "Router",
    "route",
  ];
  _0x2f29 = function () {
    return _0x5a6865;
  };
  return _0x2f29();
}
(function (_0xb62c85, _0x5b2aab) {
  const _0x38af2b = _0x3cfc,
    _0x4f1440 = _0xb62c85();
  while (!![]) {
    try {
      const _0x4d3434 =
        (parseInt(_0x38af2b(0xee)) / 0x1) * (parseInt(_0x38af2b(0xe7)) / 0x2) +
        parseInt(_0x38af2b(0xea)) / 0x3 +
        -parseInt(_0x38af2b(0xec)) / 0x4 +
        parseInt(_0x38af2b(0xed)) / 0x5 +
        parseInt(_0x38af2b(0xef)) / 0x6 +
        -parseInt(_0x38af2b(0xe8)) / 0x7 +
        -parseInt(_0x38af2b(0xf7)) / 0x8;
      if (_0x4d3434 === _0x5b2aab) break;
      else _0x4f1440["push"](_0x4f1440["shift"]());
    } catch (_0xff5d) {
      _0x4f1440["push"](_0x4f1440["shift"]());
    }
  }
})(_0x2f29, 0xb3308);
const express = require(_0x3b3c9c(0xf4)),
  router = express[_0x3b3c9c(0xf5)](),
  authController = require("../controllers/authController"),
  { processPayment, sendStripApi } = require(_0x3b3c9c(0xf1));
router[_0x3b3c9c(0xf6)](_0x3b3c9c(0xf0))[_0x3b3c9c(0xe9)](
  authController[_0x3b3c9c(0xeb)],
  processPayment
),
  router[_0x3b3c9c(0xf6)](_0x3b3c9c(0xf2))[_0x3b3c9c(0xf3)](
    authController[_0x3b3c9c(0xeb)],
    sendStripApi
  ),
  (module["exports"] = router);
