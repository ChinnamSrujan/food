const _0x2dcce3 = _0x4e5c;
(function (_0x1cea53, _0x3080e7) {
  const _0x30a665 = _0x4e5c,
    _0x2b53a5 = _0x1cea53();
  while (!![]) {
    try {
      const _0x4bac9c =
        parseInt(_0x30a665(0xa1)) / 0x1 +
        -parseInt(_0x30a665(0xb0)) / 0x2 +
        (-parseInt(_0x30a665(0xa5)) / 0x3) *
          (-parseInt(_0x30a665(0xa3)) / 0x4) +
        parseInt(_0x30a665(0xa6)) / 0x5 +
        (-parseInt(_0x30a665(0xb2)) / 0x6) *
          (-parseInt(_0x30a665(0xaf)) / 0x7) +
        -parseInt(_0x30a665(0xa9)) / 0x8 +
        -parseInt(_0x30a665(0xa8)) / 0x9;
      if (_0x4bac9c === _0x3080e7) break;
      else _0x2b53a5["push"](_0x2b53a5["shift"]());
    } catch (_0x327ecb) {
      _0x2b53a5["push"](_0x2b53a5["shift"]());
    }
  }
})(_0x2c7d, 0x91837);
function _0x4e5c(_0x306c25, _0xeda0bf) {
  const _0x2c7d01 = _0x2c7d();
  return (
    (_0x4e5c = function (_0x4e5cfa, _0x71f92e) {
      _0x4e5cfa = _0x4e5cfa - 0xa0;
      let _0x2b5feb = _0x2c7d01[_0x4e5cfa];
      return _0x2b5feb;
    }),
    _0x4e5c(_0x306c25, _0xeda0bf)
  );
}
function _0x2c7d() {
  const _0xc706a4 = [
    "/update-cart-item",
    "36umChvp",
    "updateCartItemQuantity",
    "460084WVyHxb",
    "Router",
    "1320OGFrRn",
    "deleteCartItem",
    "2739CJKEXU",
    "5083575jiuBEQ",
    "delete",
    "3974580ziscgo",
    "4691720AWwajy",
    "/add-to-cart",
    "express",
    "addItemToCart",
    "getCartItem",
    "post",
    "1191169wCgaaq",
    "2349966NElBke",
  ];
  _0x2c7d = function () {
    return _0xc706a4;
  };
  return _0x2c7d();
}
const express = require(_0x2dcce3(0xab)),
  router = express[_0x2dcce3(0xa2)](),
  authController = require("../controllers/authController"),
  cartController = require("../controllers/cartController");
router[_0x2dcce3(0xae)](_0x2dcce3(0xaa), cartController[_0x2dcce3(0xac)]),
  router[_0x2dcce3(0xae)](_0x2dcce3(0xb1), cartController[_0x2dcce3(0xa0)]),
  router[_0x2dcce3(0xa7)]("/delete-cart-item", cartController[_0x2dcce3(0xa4)]),
  router["get"](
    "/get-cart",
    authController["protect"],
    cartController[_0x2dcce3(0xad)]
  ),
  (module["exports"] = router);
