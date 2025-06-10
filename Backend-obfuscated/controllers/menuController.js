const _0x518c29 = _0x3d10;
(function (_0x520129, _0x17c167) {
  const _0x1236b9 = _0x3d10,
    _0x815719 = _0x520129();
  while (!![]) {
    try {
      const _0x1d143c =
        (-parseInt(_0x1236b9(0xdd)) / 0x1) * (parseInt(_0x1236b9(0xe1)) / 0x2) +
        (parseInt(_0x1236b9(0xed)) / 0x3) * (parseInt(_0x1236b9(0xe8)) / 0x4) +
        (-parseInt(_0x1236b9(0xe5)) / 0x5) * (parseInt(_0x1236b9(0xe4)) / 0x6) +
        -parseInt(_0x1236b9(0xdc)) / 0x7 +
        parseInt(_0x1236b9(0xde)) / 0x8 +
        (-parseInt(_0x1236b9(0xe3)) / 0x9) *
          (-parseInt(_0x1236b9(0xd2)) / 0xa) +
        (-parseInt(_0x1236b9(0xec)) / 0xb) * (-parseInt(_0x1236b9(0xea)) / 0xc);
      if (_0x1d143c === _0x17c167) break;
      else _0x815719["push"](_0x815719["shift"]());
    } catch (_0x4ab8a2) {
      _0x815719["push"](_0x815719["shift"]());
    }
  }
})(_0x321d, 0x9e743);
const Menu = require("../models/menu"),
  ErrorHandler = require("../utils/errorHandler"),
  catchAsync = require(_0x518c29(0xdf)),
  Restaurant = require(_0x518c29(0xe6));
function _0x3d10(_0x1bb30f, _0x1781d1) {
  const _0x321d3c = _0x321d();
  return (
    (_0x3d10 = function (_0x3d1011, _0xa5bbae) {
      _0x3d1011 = _0x3d1011 - 0xd2;
      let _0x523cef = _0x321d3c[_0x3d1011];
      return _0x523cef;
    }),
    _0x3d10(_0x1bb30f, _0x1781d1)
  );
}
(exports[_0x518c29(0xe7)] = catchAsync(
  async (_0x233717, _0x3a79a6, _0x3183a5) => {
    const _0x215594 = _0x518c29;
    let _0x58b4fe;
    _0x233717[_0x215594(0xd6)]["storeId"] &&
      (_0x58b4fe = { restaurant: _0x233717[_0x215594(0xd6)]["storeId"] });
    const _0x3c3e2d = await Menu[_0x215594(0xd7)](_0x58b4fe)
      [_0x215594(0xe2)]({ path: "menu.items", model: _0x215594(0xeb) })
      [_0x215594(0xdb)]();
    _0x3a79a6["status"](0xc8)[_0x215594(0xee)]({
      status: _0x215594(0xd8),
      count: _0x3c3e2d[_0x215594(0xda)],
      data: _0x3c3e2d,
    });
  }
)),
  (exports["createMenu"] = catchAsync(
    async (_0x401161, _0x5abe6b, _0x41d8cf) => {
      const _0xec4dca = _0x518c29,
        _0xf92c58 = await Menu["create"](_0x401161[_0xec4dca(0xd4)]);
      _0x5abe6b[_0xec4dca(0xe9)](0xc9)[_0xec4dca(0xee)]({
        status: _0xec4dca(0xd8),
        data: _0xf92c58,
      });
    }
  )),
  (exports[_0x518c29(0xd9)] = catchAsync(
    async (_0x1e157a, _0x52cba3, _0x3f8f9e) => {
      const _0x364a61 = _0x518c29,
        _0x541c84 = await Menu[_0x364a61(0xd3)](
          _0x1e157a[_0x364a61(0xd6)][_0x364a61(0xd5)]
        );
      if (!_0x541c84)
        return _0x3f8f9e(new ErrorHandler(_0x364a61(0xe0), 0x194));
      _0x52cba3[_0x364a61(0xe9)](0xcc)["json"]({ status: _0x364a61(0xd8) });
    }
  ));
function _0x321d() {
  const _0x69ae29 = [
    "No\x20document\x20found\x20with\x20that\x20ID",
    "2eusUqr",
    "populate",
    "36btnLyR",
    "32412NJwBUY",
    "265wfmpZt",
    "../models/restaurant",
    "getAllMenus",
    "2588xACWJX",
    "status",
    "36yhcEqR",
    "FoodItem",
    "3713578JTAwHR",
    "3363zxtPDe",
    "json",
    "1800220xSfokf",
    "findByIdAndDelete",
    "body",
    "menuId",
    "params",
    "find",
    "success",
    "deleteMenu",
    "length",
    "exec",
    "5570355mOXGYf",
    "1250362ktZtgs",
    "4186328tapCcD",
    "../middlewares/catchAsyncErrors",
  ];
  _0x321d = function () {
    return _0x69ae29;
  };
  return _0x321d();
}
