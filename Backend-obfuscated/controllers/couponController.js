const _0x17159c = _0x1218;
function _0x1f76() {
  const _0x657eb4 = [
    "423aTZFfC",
    "updateCoupon",
    "json",
    "createCoupon",
    "getCoupon",
    "params",
    "19668088LKhYxA",
    "2GIOERB",
    "couponId",
    "No\x20Coupon\x20found\x20with\x20that\x20ID",
    "$discount",
    "7704390SIMGAB",
    "1004431OedkAV",
    "$minAmount",
    "$maxDiscount",
    "92tEocQf",
    "2045211dqJNxU",
    "\x20more\x20to\x20avail\x20this\x20offer",
    "find",
    "couponValidate",
    "366035pNNyyz",
    "172460MatyTg",
    "../middlewares/catchAsyncErrors",
    "6290312fvmxRt",
    "add\x20₹\x20",
    "body",
    "7dJHrrF",
    "success",
    "status",
    "Invalid\x20coupon\x20code.",
  ];
  _0x1f76 = function () {
    return _0x657eb4;
  };
  return _0x1f76();
}
function _0x1218(_0x122580, _0x243a80) {
  const _0x1f7682 = _0x1f76();
  return (
    (_0x1218 = function (_0x121852, _0x359486) {
      _0x121852 = _0x121852 - 0x1ba;
      let _0x35bbc2 = _0x1f7682[_0x121852];
      return _0x35bbc2;
    }),
    _0x1218(_0x122580, _0x243a80)
  );
}
(function (_0x2d7004, _0x26eca9) {
  const _0x92e51 = _0x1218,
    _0x483776 = _0x2d7004();
  while (!![]) {
    try {
      const _0x691a6e =
        parseInt(_0x92e51(0x1c5)) / 0x1 +
        (-parseInt(_0x92e51(0x1c0)) / 0x2) * (parseInt(_0x92e51(0x1c9)) / 0x3) +
        (-parseInt(_0x92e51(0x1c8)) / 0x4) *
          (-parseInt(_0x92e51(0x1cd)) / 0x5) +
        -parseInt(_0x92e51(0x1c4)) / 0x6 +
        (parseInt(_0x92e51(0x1d3)) / 0x7) * (-parseInt(_0x92e51(0x1d0)) / 0x8) +
        (parseInt(_0x92e51(0x1d7)) / 0x9) * (-parseInt(_0x92e51(0x1ce)) / 0xa) +
        parseInt(_0x92e51(0x1bf)) / 0xb;
      if (_0x691a6e === _0x26eca9) break;
      else _0x483776["push"](_0x483776["shift"]());
    } catch (_0x426081) {
      _0x483776["push"](_0x483776["shift"]());
    }
  }
})(_0x1f76, 0xdf08b);
const Coupon = require("../models/couponModel"),
  ErrorHandler = require("../utils/errorHandler"),
  catchAsync = require(_0x17159c(0x1cf));
(exports[_0x17159c(0x1bc)] = catchAsync(
  async (_0x386d29, _0x5670e0, _0x5bb3a6) => {
    const _0x134e5e = _0x17159c,
      _0x7cede8 = await Coupon["create"](_0x386d29[_0x134e5e(0x1d2)]);
    _0x5670e0[_0x134e5e(0x1d5)](0xc8)["json"]({
      status: _0x134e5e(0x1d4),
      data: _0x7cede8,
    });
  }
)),
  (exports[_0x17159c(0x1bd)] = catchAsync(
    async (_0xd3f2d2, _0x12c903, _0xacb989) => {
      const _0x4d8851 = _0x17159c,
        _0x2b197d = await Coupon[_0x4d8851(0x1cb)]();
      _0x12c903["status"](0xc8)[_0x4d8851(0x1bb)]({
        status: _0x4d8851(0x1d4),
        data: _0x2b197d,
      });
    }
  )),
  (exports[_0x17159c(0x1ba)] = catchAsync(
    async (_0x40c2b7, _0x5619b5, _0x20fd8f) => {
      const _0x15d85e = _0x17159c,
        _0x34df13 = await Coupon["findByIdAndUpdate"](
          _0x40c2b7[_0x15d85e(0x1be)][_0x15d85e(0x1c1)],
          _0x40c2b7[_0x15d85e(0x1d2)],
          { new: !![], runValidators: !![] }
        );
      if (!_0x34df13)
        return _0x20fd8f(new ErrorHandler(_0x15d85e(0x1c2), 0x194));
      _0x5619b5["status"](0xc8)["json"]({
        status: _0x15d85e(0x1d4),
        data: _0x34df13,
      });
    }
  )),
  (exports["deleteCoupon"] = catchAsync(
    async (_0x11f883, _0x1ac70e, _0x3ce94b) => {
      const _0x1c5f3e = _0x17159c,
        _0x362b77 = await Coupon["findByIdAndDelete"](
          _0x11f883["params"][_0x1c5f3e(0x1c1)]
        );
      if (!_0x362b77)
        return _0x3ce94b(
          new ErrorHandler(
            "No\x20coupon\x20found\x20with\x20given\x20Id",
            0x194
          )
        );
      _0x1ac70e[_0x1c5f3e(0x1d5)](0xcc)[_0x1c5f3e(0x1bb)]({
        status: "success",
      });
    }
  )),
  (exports[_0x17159c(0x1cc)] = catchAsync(
    async (_0x16783e, _0x388d83, _0x1fd28c) => {
      const _0x4e60a0 = _0x17159c,
        { couponCode: _0x188616, cartItemsTotalAmount: _0x568fa9 } =
          _0x16783e[_0x4e60a0(0x1d2)],
        _0x863d42 = await Coupon["aggregate"]([
          {
            $addFields: {
              finalTotal: {
                $cond: [
                  { $gte: [_0x568fa9, _0x4e60a0(0x1c6)] },
                  {
                    $subtract: [
                      _0x568fa9,
                      {
                        $min: [
                          {
                            $multiply: [
                              _0x568fa9,
                              { $divide: [_0x4e60a0(0x1c3), 0x64] },
                            ],
                          },
                          _0x4e60a0(0x1c7),
                        ],
                      },
                    ],
                  },
                  _0x568fa9,
                ],
              },
              message: {
                $cond: [
                  { $gte: [_0x568fa9, _0x4e60a0(0x1c6)] },
                  "",
                  {
                    $concat: [
                      _0x4e60a0(0x1d1),
                      { $toString: { $subtract: ["$minAmount", _0x568fa9] } },
                      _0x4e60a0(0x1ca),
                    ],
                  },
                ],
              },
            },
          },
          {
            $project: {
              _id: 0x0,
              subTitle: 0x1,
              couponName: 0x1,
              details: 0x1,
              minAmount: 0x1,
              finalTotal: 0x1,
              message: 0x1,
            },
          },
        ]);
      if (!_0x863d42)
        return _0x1fd28c(new ErrorHandler(_0x4e60a0(0x1d6), 0x194));
      _0x388d83[_0x4e60a0(0x1d5)](0xc8)["json"]({
        status: "success",
        data: _0x863d42,
      });
    }
  ));
