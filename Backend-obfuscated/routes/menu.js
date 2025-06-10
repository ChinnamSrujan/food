function _0x3007() {
  const _0x4d3bbc = [
    "469975TKOCQY",
    "1427144KXedWR",
    "express",
    "12114102oLZaEt",
    "1155102VOxPKl",
    "delete",
    "1577970fRAnwB",
    "route",
    "646570FidWRv",
    "811494NZBfQQ",
    "post",
    "/:menuId",
  ];
  _0x3007 = function () {
    return _0x4d3bbc;
  };
  return _0x3007();
}
const _0x4904e0 = _0x5827;
function _0x5827(_0x5ef9cd, _0x29875f) {
  const _0x300745 = _0x3007();
  return (
    (_0x5827 = function (_0x5827ff, _0x1126f0) {
      _0x5827ff = _0x5827ff - 0x16d;
      let _0x4a7255 = _0x300745[_0x5827ff];
      return _0x4a7255;
    }),
    _0x5827(_0x5ef9cd, _0x29875f)
  );
}
(function (_0x3b1fbe, _0x7c4c42) {
  const _0x334da = _0x5827,
    _0x2262fd = _0x3b1fbe();
  while (!![]) {
    try {
      const _0x3db22c =
        parseInt(_0x334da(0x175)) / 0x1 +
        parseInt(_0x334da(0x171)) / 0x2 +
        parseInt(_0x334da(0x16d)) / 0x3 +
        parseInt(_0x334da(0x176)) / 0x4 +
        parseInt(_0x334da(0x16f)) / 0x5 +
        parseInt(_0x334da(0x172)) / 0x6 +
        -parseInt(_0x334da(0x178)) / 0x7;
      if (_0x3db22c === _0x7c4c42) break;
      else _0x2262fd["push"](_0x2262fd["shift"]());
    } catch (_0x1898e7) {
      _0x2262fd["push"](_0x2262fd["shift"]());
    }
  }
})(_0x3007, 0x3e569);
const express = require(_0x4904e0(0x177)),
  router = express["Router"]({ mergeParams: !![] }),
  {
    getAllMenus,
    createMenu,
    deleteMenu,
  } = require("../controllers/menuController");
router[_0x4904e0(0x170)]("/")["get"](getAllMenus)[_0x4904e0(0x173)](createMenu),
  router[_0x4904e0(0x170)](_0x4904e0(0x174))[_0x4904e0(0x16e)](deleteMenu),
  (module["exports"] = router);
