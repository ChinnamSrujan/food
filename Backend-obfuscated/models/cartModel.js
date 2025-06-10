const _0x260ace = _0xf6e1;
(function (_0xcf2a95, _0x546b7a) {
  const _0x59e29a = _0xf6e1,
    _0x496a91 = _0xcf2a95();
  while (!![]) {
    try {
      const _0x4a3089 =
        (parseInt(_0x59e29a(0x1f0)) / 0x1) *
          (-parseInt(_0x59e29a(0x200)) / 0x2) +
        (parseInt(_0x59e29a(0x1f6)) / 0x3) *
          (parseInt(_0x59e29a(0x1fd)) / 0x4) +
        -parseInt(_0x59e29a(0x201)) / 0x5 +
        (-parseInt(_0x59e29a(0x1f7)) / 0x6) *
          (-parseInt(_0x59e29a(0x1fa)) / 0x7) +
        -parseInt(_0x59e29a(0x1fb)) / 0x8 +
        parseInt(_0x59e29a(0x1ff)) / 0x9 +
        (-parseInt(_0x59e29a(0x1ef)) / 0xa) *
          (parseInt(_0x59e29a(0x1f4)) / 0xb);
      if (_0x4a3089 === _0x546b7a) break;
      else _0x496a91["push"](_0x496a91["shift"]());
    } catch (_0x5d2f69) {
      _0x496a91["push"](_0x496a91["shift"]());
    }
  }
})(_0x5a20, 0x475e9);
function _0xf6e1(_0x23d77c, _0x3b371e) {
  const _0x5a200f = _0x5a20();
  return (
    (_0xf6e1 = function (_0xf6e1fd, _0xf6001d) {
      _0xf6e1fd = _0xf6e1fd - 0x1ee;
      let _0x30d12 = _0x5a200f[_0xf6e1fd];
      return _0x30d12;
    }),
    _0xf6e1(_0x23d77c, _0x3b371e)
  );
}
const mongoose = require("mongoose"),
  Schema = mongoose[_0x260ace(0x1f1)],
  cartSchema = new Schema({
    user: {
      type: mongoose[_0x260ace(0x1f1)]["Types"][_0x260ace(0x1f3)],
      ref: _0x260ace(0x1f9),
      required: ![],
    },
    restaurant: {
      type: mongoose[_0x260ace(0x1f1)][_0x260ace(0x1f2)][_0x260ace(0x1f3)],
      ref: _0x260ace(0x1fc),
      required: ![],
    },
    items: [
      {
        foodItem: {
          type: mongoose["Schema"][_0x260ace(0x1f2)][_0x260ace(0x1f3)],
          ref: _0x260ace(0x1fe),
          required: !![],
        },
        quantity: { type: Number, required: !![], default: 0x1, min: 0x1 },
      },
    ],
    createdAt: { type: Date, default: Date[_0x260ace(0x1f5)] },
  }),
  Cart = mongoose[_0x260ace(0x1f8)](_0x260ace(0x1ee), cartSchema);
function _0x5a20() {
  const _0x2c24ea = [
    "User",
    "10178udRVvJ",
    "1503352VPJosG",
    "Restaurant",
    "2892rwqrZO",
    "FoodItem",
    "1951965NqzYLx",
    "16qIKHBo",
    "217305WNnNfp",
    "Cart",
    "214810gkEDQC",
    "946ayqTQk",
    "Schema",
    "Types",
    "ObjectId",
    "165LMnQdt",
    "now",
    "729UZvBfR",
    "1902ADivTK",
    "model",
  ];
  _0x5a20 = function () {
    return _0x2c24ea;
  };
  return _0x5a20();
}
module["exports"] = Cart;
