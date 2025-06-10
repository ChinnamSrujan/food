const _0x5b4a0b = _0x98b5;
function _0x98b5(_0x4d1b9d, _0x6c47c5) {
  const _0x2d4e42 = _0x2d4e();
  return (
    (_0x98b5 = function (_0x98b56a, _0x133f2e) {
      _0x98b56a = _0x98b56a - 0x1cf;
      let _0x10ae7b = _0x2d4e42[_0x98b56a];
      return _0x10ae7b;
    }),
    _0x98b5(_0x4d1b9d, _0x6c47c5)
  );
}
(function (_0x433b35, _0x2dc470) {
  const _0x4104d8 = _0x98b5,
    _0x50bfd1 = _0x433b35();
  while (!![]) {
    try {
      const _0x2ac292 =
        (parseInt(_0x4104d8(0x1cf)) / 0x1) *
          (-parseInt(_0x4104d8(0x1e1)) / 0x2) +
        parseInt(_0x4104d8(0x1ee)) / 0x3 +
        (parseInt(_0x4104d8(0x1e7)) / 0x4) *
          (-parseInt(_0x4104d8(0x1d4)) / 0x5) +
        -parseInt(_0x4104d8(0x1d6)) / 0x6 +
        -parseInt(_0x4104d8(0x1dd)) / 0x7 +
        (parseInt(_0x4104d8(0x1f0)) / 0x8) *
          (-parseInt(_0x4104d8(0x1d1)) / 0x9) +
        (-parseInt(_0x4104d8(0x1d5)) / 0xa) *
          (-parseInt(_0x4104d8(0x1eb)) / 0xb);
      if (_0x2ac292 === _0x2dc470) break;
      else _0x50bfd1["push"](_0x50bfd1["shift"]());
    } catch (_0x392f51) {
      _0x50bfd1["push"](_0x50bfd1["shift"]());
    }
  }
})(_0x2d4e, 0xca0de);
const Fooditem = require(_0x5b4a0b(0x1f1)),
  ErrorHandler = require(_0x5b4a0b(0x1e5)),
  catchAsync = require(_0x5b4a0b(0x1d7)),
  APIFeatures = require(_0x5b4a0b(0x1e2));
(exports[_0x5b4a0b(0x1ea)] = catchAsync(
  async (_0xc693bd, _0x57d00f, _0x572dc4) => {
    const _0x19bbf0 = _0x5b4a0b;
    let _0x398d05 = {};
    _0xc693bd["params"][_0x19bbf0(0x1ec)] &&
      (_0x398d05 = {
        restaurant: _0xc693bd[_0x19bbf0(0x1d3)][_0x19bbf0(0x1ec)],
      });
    const _0xfcfa2e = await Fooditem["find"](_0x398d05),
      _0xeff46 = new APIFeatures(
        Fooditem[_0x19bbf0(0x1d2)](),
        _0xc693bd[_0x19bbf0(0x1de)]
      )
        ["search"]()
        [_0x19bbf0(0x1e3)]();
    _0x57d00f["status"](0xc8)["json"]({
      status: _0x19bbf0(0x1d9),
      results: _0xfcfa2e["length"],
      data: _0xfcfa2e,
    });
  }
)),
  (exports[_0x5b4a0b(0x1d8)] = catchAsync(
    async (_0x2923d8, _0x311f1a, _0xa39273) => {
      const _0x2e01f4 = _0x5b4a0b,
        _0x421e86 = await Fooditem[_0x2e01f4(0x1dc)](
          _0x2923d8[_0x2e01f4(0x1ef)]
        );
      _0x311f1a[_0x2e01f4(0x1da)](0xc9)[_0x2e01f4(0x1e6)]({
        status: _0x2e01f4(0x1d9),
        data: _0x421e86,
      });
    }
  )),
  (exports[_0x5b4a0b(0x1e8)] = catchAsync(
    async (_0x597840, _0x2226e6, _0x122184) => {
      const _0x50f133 = _0x5b4a0b,
        _0x335295 = await Fooditem[_0x50f133(0x1d0)](
          _0x597840[_0x50f133(0x1d3)][_0x50f133(0x1ed)]
        );
      if (!_0x335295)
        return _0x122184(new ErrorHandler(_0x50f133(0x1db), 0x194));
      _0x2226e6["status"](0xc8)["json"]({
        status: _0x50f133(0x1d9),
        data: _0x335295,
      });
    }
  )),
  (exports["updateFoodItem"] = catchAsync(
    async (_0x5dd445, _0x2782df, _0x2612d5) => {
      const _0x546fe0 = _0x5b4a0b,
        _0x5651af = await Fooditem[_0x546fe0(0x1e4)](
          _0x5dd445[_0x546fe0(0x1d3)]["foodId"],
          _0x5dd445[_0x546fe0(0x1ef)],
          { new: !![], runValidators: !![] }
        );
      if (!_0x5651af)
        return _0x2612d5(new ErrorHandler(_0x546fe0(0x1e0), 0x194));
      _0x2782df[_0x546fe0(0x1da)](0xc8)[_0x546fe0(0x1e6)]({
        status: _0x546fe0(0x1d9),
        data: _0x5651af,
      });
    }
  )),
  (exports[_0x5b4a0b(0x1df)] = catchAsync(
    async (_0x44eebd, _0x161902, _0x37376e) => {
      const _0x3ed3c4 = _0x5b4a0b,
        _0x4697ab = await Fooditem[_0x3ed3c4(0x1e9)](
          _0x44eebd[_0x3ed3c4(0x1d3)]["foodId"]
        );
      if (!_0x4697ab)
        return _0x37376e(
          new ErrorHandler(
            "No\x20document\x20found\x20with\x20that\x20ID",
            0x194
          )
        );
      _0x161902[_0x3ed3c4(0x1da)](0xcc)["json"]({ status: _0x3ed3c4(0x1d9) });
    }
  ));
function _0x2d4e() {
  const _0x54b258 = [
    "filter",
    "findByIdAndUpdate",
    "../utils/errorHandler",
    "json",
    "21864TUhZPU",
    "getFoodItem",
    "findByIdAndDelete",
    "getAllFoodItems",
    "110hEuWYb",
    "storeId",
    "foodId",
    "3593265GEhcpV",
    "body",
    "24THXwYr",
    "../models/foodItem",
    "341hEPkUv",
    "findById",
    "1172709QGdwJa",
    "find",
    "params",
    "30ZnGxIF",
    "2607340amyrsR",
    "7127736cdAeHY",
    "../middlewares/catchAsyncErrors",
    "createFoodItem",
    "success",
    "status",
    "No\x20foodItem\x20found\x20with\x20that\x20ID",
    "create",
    "7601055bECOEr",
    "query",
    "deleteFoodItem",
    "No\x20document\x20found\x20with\x20that\x20ID",
    "1642ZknuzG",
    "../utils/apiFeatures",
  ];
  _0x2d4e = function () {
    return _0x54b258;
  };
  return _0x2d4e();
}
