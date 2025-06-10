function _0x29f2() {
  const _0x3c5f09 = [
    "status",
    "679542kpyVFf",
    "460060eDBxsM",
    "express",
    "2330814PqCEdO",
    "Unable\x20to\x20fetch\x20the\x20number\x20of\x20restaurants.",
    "12VLjqwy",
    "get",
    "9704CzGvzR",
    "1267NSdmwZ",
    "json",
    "/count",
    "Router",
    "../models/restaurant",
    "4512JXWYAn",
    "3772980TrLEmp",
    "exports",
    "3534235JFsjlo",
    "312wzcOiz",
  ];
  _0x29f2 = function () {
    return _0x3c5f09;
  };
  return _0x29f2();
}
const _0x40d07a = _0x1500;
function _0x1500(_0x4b4bd7, _0x414ed3) {
  const _0x29f2f3 = _0x29f2();
  return (
    (_0x1500 = function (_0x1500e6, _0xc07582) {
      _0x1500e6 = _0x1500e6 - 0xb1;
      let _0x1edbeb = _0x29f2f3[_0x1500e6];
      return _0x1edbeb;
    }),
    _0x1500(_0x4b4bd7, _0x414ed3)
  );
}
(function (_0xb91ebb, _0xd32c5d) {
  const _0x338f02 = _0x1500,
    _0x132276 = _0xb91ebb();
  while (!![]) {
    try {
      const _0x47be94 =
        (-parseInt(_0x338f02(0xb4)) / 0x1) * (parseInt(_0x338f02(0xc3)) / 0x2) +
        (parseInt(_0x338f02(0xb6)) / 0x3) * (-parseInt(_0x338f02(0xbb)) / 0x4) +
        parseInt(_0x338f02(0xb3)) / 0x5 +
        parseInt(_0x338f02(0xb9)) / 0x6 +
        (-parseInt(_0x338f02(0xbe)) / 0x7) *
          (-parseInt(_0x338f02(0xbd)) / 0x8) +
        parseInt(_0x338f02(0xb1)) / 0x9 +
        parseInt(_0x338f02(0xb7)) / 0xa;
      if (_0x47be94 === _0xd32c5d) break;
      else _0x132276["push"](_0x132276["shift"]());
    } catch (_0x5e055e) {
      _0x132276["push"](_0x132276["shift"]());
    }
  }
})(_0x29f2, 0x60d89);
const express = require(_0x40d07a(0xb8)),
  router = express[_0x40d07a(0xc1)](),
  Restaurant = require(_0x40d07a(0xc2));
router[_0x40d07a(0xbc)](_0x40d07a(0xc0), async (_0x28c553, _0xfdb343) => {
  const _0x3791db = _0x40d07a;
  try {
    const _0x53e671 = await Restaurant["countDocuments"]();
    _0xfdb343[_0x3791db(0xbf)]({ count: _0x53e671 });
  } catch (_0x55601f) {
    _0xfdb343[_0x3791db(0xb5)](0x1f4)[_0x3791db(0xbf)]({
      error: _0x3791db(0xba),
    });
  }
}),
  (module[_0x40d07a(0xb2)] = router);
