const _0x553f5d = _0x16ee;
(function (_0x5ac5e3, _0x931a34) {
  const _0x4a33e9 = _0x16ee,
    _0x1213ec = _0x5ac5e3();
  while (!![]) {
    try {
      const _0x4b4dbb =
        (parseInt(_0x4a33e9(0x1c3)) / 0x1) *
          (-parseInt(_0x4a33e9(0x1bd)) / 0x2) +
        (parseInt(_0x4a33e9(0x1d0)) / 0x3) *
          (-parseInt(_0x4a33e9(0x1c1)) / 0x4) +
        (parseInt(_0x4a33e9(0x1c5)) / 0x5) *
          (-parseInt(_0x4a33e9(0x1d2)) / 0x6) +
        (-parseInt(_0x4a33e9(0x1c7)) / 0x7) *
          (-parseInt(_0x4a33e9(0x1bf)) / 0x8) +
        parseInt(_0x4a33e9(0x1d1)) / 0x9 +
        (parseInt(_0x4a33e9(0x1ca)) / 0xa) *
          (parseInt(_0x4a33e9(0x1be)) / 0xb) +
        (parseInt(_0x4a33e9(0x1c0)) / 0xc) * (parseInt(_0x4a33e9(0x1c8)) / 0xd);
      if (_0x4b4dbb === _0x931a34) break;
      else _0x1213ec["push"](_0x1213ec["shift"]());
    } catch (_0x2c1bda) {
      _0x1213ec["push"](_0x1213ec["shift"]());
    }
  }
})(_0x1ee5, 0x9e28f);
function _0x1ee5() {
  const _0x36c43e = [
    "10LYPWGZ",
    "../controllers/couponController",
    "8510810ZEVbGB",
    "1417alvAvC",
    "/validate",
    "10769210iSKKes",
    "Router",
    "post",
    "delete",
    "route",
    "patch",
    "23889FtMOAx",
    "7081326wMsbkd",
    "2185044JZsuKE",
    "10930WzhKkl",
    "11KtwssM",
    "8XuPfUd",
    "216PPxigC",
    "508vNpHNv",
    "get",
    "127DVHNsh",
    "express",
  ];
  _0x1ee5 = function () {
    return _0x36c43e;
  };
  return _0x1ee5();
}
function _0x16ee(_0x53be41, _0x570a5f) {
  const _0x1ee514 = _0x1ee5();
  return (
    (_0x16ee = function (_0x16ee6d, _0x58b426) {
      _0x16ee6d = _0x16ee6d - 0x1bd;
      let _0x392f04 = _0x1ee514[_0x16ee6d];
      return _0x392f04;
    }),
    _0x16ee(_0x53be41, _0x570a5f)
  );
}
const express = require(_0x553f5d(0x1c4)),
  {
    createCoupon,
    getCoupon,
    updateCoupon,
    deleteCoupon,
    couponValidate,
  } = require(_0x553f5d(0x1c6)),
  router = express[_0x553f5d(0x1cb)]();
router[_0x553f5d(0x1ce)]("/")
  [_0x553f5d(0x1cc)](createCoupon)
  [_0x553f5d(0x1c2)](getCoupon),
  router[_0x553f5d(0x1ce)]("/:couponId")
    [_0x553f5d(0x1cf)](updateCoupon)
    [_0x553f5d(0x1cd)](deleteCoupon),
  router["route"](_0x553f5d(0x1c9))["post"](couponValidate),
  (module["exports"] = router);
