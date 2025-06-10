const _0x3a34a0 = _0x226f;
function _0x33cc() {
  const _0x1d6239 = [
    "Schema",
    "1QowLbH",
    "exports",
    "Restaurant\x20name\x20cannot\x20exceed\x20100\x20characters",
    "8750HkPzJS",
    "index",
    "model",
    "Please\x20enter\x20the\x20restaurant\x20address",
    "308zqnxtN",
    "Point",
    "mongoose",
    "Restaurant",
    "2789910wCfPMl",
    "148167qzLTBo",
    "208oFTNpL",
    "4ujRshh",
    "now",
    "694445JpAmRF",
    "458678wbXFvw",
    "36756QmOqAq",
    "2dsphere",
    "2420082LVmyxh",
  ];
  _0x33cc = function () {
    return _0x1d6239;
  };
  return _0x33cc();
}
(function (_0x34e2b6, _0x25e41) {
  const _0x3c3c3c = _0x226f,
    _0x2608ef = _0x34e2b6();
  while (!![]) {
    try {
      const _0x13875a =
        (parseInt(_0x3c3c3c(0x161)) / 0x1) *
          (parseInt(_0x3c3c3c(0x172)) / 0x2) +
        -parseInt(_0x3c3c3c(0x16d)) / 0x3 +
        (parseInt(_0x3c3c3c(0x16f)) / 0x4) *
          (-parseInt(_0x3c3c3c(0x171)) / 0x5) +
        parseInt(_0x3c3c3c(0x16c)) / 0x6 +
        -parseInt(_0x3c3c3c(0x15f)) / 0x7 +
        (-parseInt(_0x3c3c3c(0x16e)) / 0x8) *
          (-parseInt(_0x3c3c3c(0x173)) / 0x9) +
        (-parseInt(_0x3c3c3c(0x164)) / 0xa) *
          (-parseInt(_0x3c3c3c(0x168)) / 0xb);
      if (_0x13875a === _0x25e41) break;
      else _0x2608ef["push"](_0x2608ef["shift"]());
    } catch (_0x5acf7f) {
      _0x2608ef["push"](_0x2608ef["shift"]());
    }
  }
})(_0x33cc, 0x470bc);
const mongoose = require(_0x3a34a0(0x16a)),
  restaurantSchema = new mongoose[_0x3a34a0(0x160)]({
    name: {
      type: String,
      required: [!![], "Please\x20enter\x20the\x20restaurant\x20name"],
      trim: !![],
      maxLength: [0x64, _0x3a34a0(0x163)],
    },
    isVeg: { type: Boolean, default: ![] },
    address: { type: String, required: [!![], _0x3a34a0(0x167)] },
    ratings: { type: Number, default: 0x0 },
    numOfReviews: { type: Number, default: 0x0 },
    location: {
      type: { type: String, enum: [_0x3a34a0(0x169)], required: !![] },
      coordinates: { type: [Number], required: !![] },
    },
    reviews: [
      {
        name: { type: String, required: !![] },
        rating: { type: Number, required: !![] },
        Comment: { type: String, required: !![] },
      },
    ],
    images: [
      {
        public_id: { type: String, required: !![] },
        url: { type: String, required: !![] },
      },
    ],
    createdAt: { type: Date, default: Date[_0x3a34a0(0x170)] },
  });
function _0x226f(_0x272c40, _0x394ba6) {
  const _0x33cc0e = _0x33cc();
  return (
    (_0x226f = function (_0x226f95, _0x5ad56f) {
      _0x226f95 = _0x226f95 - 0x15f;
      let _0x19e27f = _0x33cc0e[_0x226f95];
      return _0x19e27f;
    }),
    _0x226f(_0x272c40, _0x394ba6)
  );
}
restaurantSchema[_0x3a34a0(0x165)]({ location: _0x3a34a0(0x174) }),
  restaurantSchema["index"]({ address: "text" }),
  (module[_0x3a34a0(0x162)] = mongoose[_0x3a34a0(0x166)](
    _0x3a34a0(0x16b),
    restaurantSchema
  ));
