const _0x3a5db5 = _0x48d1;
(function (_0x515f1b, _0x3f509c) {
  const _0x35ad48 = _0x48d1,
    _0xb6d796 = _0x515f1b();
  while (!![]) {
    try {
      const _0x21c761 =
        parseInt(_0x35ad48(0x103)) / 0x1 +
        -parseInt(_0x35ad48(0x115)) / 0x2 +
        (-parseInt(_0x35ad48(0x117)) / 0x3) *
          (-parseInt(_0x35ad48(0x105)) / 0x4) +
        parseInt(_0x35ad48(0x116)) / 0x5 +
        parseInt(_0x35ad48(0x10d)) / 0x6 +
        (parseInt(_0x35ad48(0x11b)) / 0x7) *
          (parseInt(_0x35ad48(0x109)) / 0x8) +
        -parseInt(_0x35ad48(0x106)) / 0x9;
      if (_0x21c761 === _0x3f509c) break;
      else _0xb6d796["push"](_0xb6d796["shift"]());
    } catch (_0x52908b) {
      _0xb6d796["push"](_0xb6d796["shift"]());
    }
  }
})(_0x1a29, 0x86f47);
function _0x48d1(_0x38155e, _0xc6c60d) {
  const _0x1a293f = _0x1a29();
  return (
    (_0x48d1 = function (_0x48d1f5, _0x23eabd) {
      _0x48d1f5 = _0x48d1f5 - 0x100;
      let _0x1fded2 = _0x1a293f[_0x48d1f5];
      return _0x1fded2;
    }),
    _0x48d1(_0x38155e, _0xc6c60d)
  );
}
const mongoose = require(_0x3a5db5(0x100)),
  orderSchema = mongoose[_0x3a5db5(0x111)]({
    deliveryInfo: {
      address: { type: String, required: !![] },
      city: { type: String, required: !![] },
      phoneNo: { type: String, required: !![] },
      postalCode: { type: String, required: !![] },
      country: { type: String, required: !![] },
    },
    restaurant: {
      type: mongoose["Schema"][_0x3a5db5(0x112)]["ObjectId"],
      ref: "Restaurant",
    },
    user: {
      type: mongoose[_0x3a5db5(0x111)][_0x3a5db5(0x112)][_0x3a5db5(0x101)],
      required: !![],
      ref: _0x3a5db5(0x11a),
    },
    orderItems: [
      {
        name: { type: String, required: !![] },
        quantity: { type: Number, required: !![] },
        image: { type: String, required: !![] },
        price: { type: Number, required: !![] },
        fooditem: {
          type: mongoose["Schema"][_0x3a5db5(0x112)][_0x3a5db5(0x101)],
          required: !![],
          ref: "FoodItem",
        },
      },
    ],
    paymentInfo: { id: { type: String }, status: { type: String } },
    paidAt: { type: Date },
    itemsPrice: { type: Number, required: !![], default: 0x0 },
    taxPrice: { type: Number, default: 0x0 },
    deliveryCharge: { type: Number, default: 0x0 },
    finalTotal: { type: Number, required: !![], default: 0x0 },
    orderStatus: { type: String, required: !![], default: _0x3a5db5(0x104) },
    deliveredAt: { type: Date },
    createdAt: { type: Date, default: Date[_0x3a5db5(0x11c)] },
  });
orderSchema[_0x3a5db5(0x10c)](_0x3a5db5(0x114), async function (_0x57572c) {
  const _0x610df9 = _0x3a5db5;
  try {
    for (const _0x2ee9d5 of this[_0x610df9(0x10b)]) {
      const _0x34f763 = await mongoose[_0x610df9(0x119)](_0x610df9(0x102))[
        "findById"
      ](_0x2ee9d5[_0x610df9(0x107)]);
      if (!_0x34f763) throw new Error(_0x610df9(0x10a));
      if (_0x34f763[_0x610df9(0x118)] < _0x2ee9d5[_0x610df9(0x113)])
        throw new Error(
          _0x610df9(0x10f) + _0x2ee9d5[_0x610df9(0x110)] + _0x610df9(0x108)
        );
      (_0x34f763["stock"] -= _0x2ee9d5[_0x610df9(0x113)]),
        await _0x34f763[_0x610df9(0x114)]();
    }
    _0x57572c();
  } catch (_0x176d89) {
    _0x57572c(_0x176d89);
  }
}),
  (module[_0x3a5db5(0x10e)] = mongoose[_0x3a5db5(0x119)]("Order", orderSchema));
function _0x1a29() {
  const _0x37d18b = [
    "model",
    "User",
    "482363RgHcDT",
    "now",
    "mongoose",
    "ObjectId",
    "FoodItem",
    "274535oSnOXv",
    "Processing",
    "4yLxMSe",
    "8549163selSyy",
    "fooditem",
    "\x27\x20in\x20this\x20order.",
    "40kysSKO",
    "Food\x20item\x20not\x20found.",
    "orderItems",
    "pre",
    "1614030gGRXFj",
    "exports",
    "Insufficient\x20stock\x20for\x20\x27",
    "name",
    "Schema",
    "Types",
    "quantity",
    "save",
    "280998sWYHqy",
    "3331470iVeVLV",
    "266406qThaTZ",
    "stock",
  ];
  _0x1a29 = function () {
    return _0x37d18b;
  };
  return _0x1a29();
}
