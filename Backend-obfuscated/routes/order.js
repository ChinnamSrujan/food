const _0x13a450 = _0x6160;
(function (_0x3bafab, _0xe33a3b) {
  const _0x3d9358 = _0x6160,
    _0x56a400 = _0x3bafab();
  while (!![]) {
    try {
      const _0x11f4ae =
        (-parseInt(_0x3d9358(0xe6)) / 0x1) *
          (-parseInt(_0x3d9358(0xda)) / 0x2) +
        (-parseInt(_0x3d9358(0xe5)) / 0x3) * (parseInt(_0x3d9358(0xe0)) / 0x4) +
        parseInt(_0x3d9358(0xdd)) / 0x5 +
        parseInt(_0x3d9358(0xe3)) / 0x6 +
        (-parseInt(_0x3d9358(0xe1)) / 0x7) * (parseInt(_0x3d9358(0xd8)) / 0x8) +
        parseInt(_0x3d9358(0xe2)) / 0x9 +
        parseInt(_0x3d9358(0xe4)) / 0xa;
      if (_0x11f4ae === _0xe33a3b) break;
      else _0x56a400["push"](_0x56a400["shift"]());
    } catch (_0x3b73ee) {
      _0x56a400["push"](_0x56a400["shift"]());
    }
  }
})(_0x44f7, 0xb21fe);
const express = require("express"),
  router = express["Router"](),
  { newOrder, getSingleOrder, myOrders } = require(_0x13a450(0xdb)),
  authController = require(_0x13a450(0xde));
router[_0x13a450(0xdf)](_0x13a450(0xe8))["post"](
  authController[_0x13a450(0xe7)],
  newOrder
),
  router[_0x13a450(0xdf)]("/:id")["get"](
    authController["protect"],
    getSingleOrder
  ),
  router[_0x13a450(0xdf)](_0x13a450(0xdc))[_0x13a450(0xd9)](
    authController[_0x13a450(0xe7)],
    myOrders
  ),
  (module["exports"] = router);
function _0x6160(_0x5db957, _0x589468) {
  const _0x44f7bc = _0x44f7();
  return (
    (_0x6160 = function (_0x61602c, _0x158ea3) {
      _0x61602c = _0x61602c - 0xd8;
      let _0x2f0ada = _0x44f7bc[_0x61602c];
      return _0x2f0ada;
    }),
    _0x6160(_0x5db957, _0x589468)
  );
}
function _0x44f7() {
  const _0x38c795 = [
    "884012XZZgJk",
    "237727ZHNHgB",
    "11797326XIuYaK",
    "3090264VPnNrT",
    "1915270XEITtC",
    "15GvPnEB",
    "22NCaopL",
    "protect",
    "/new",
    "184uqdWjI",
    "get",
    "33720wBrvcF",
    "../controllers/orderController",
    "/me/myOrders",
    "1137055kfkFSz",
    "../controllers/authController",
    "route",
  ];
  _0x44f7 = function () {
    return _0x38c795;
  };
  return _0x44f7();
}
