const _0x4831e3 = _0x3fdd;
function _0x3a75() {
  const _0x12e3de = [
    "4433496QyTmTl",
    "1336SRGiXH",
    "1804627qsEMWS",
    "106238ARPKrh",
    "20VmFMXx",
    "mongoose",
    "312564vcRWAS",
    "12QpxngH",
    "352KELdnd",
    "35Rgeigy",
    "377154pUVZFh",
    "Schema",
    "23320hQvMQo",
    "coupon",
    "String",
    "12537eNBfwv",
    "exports",
  ];
  _0x3a75 = function () {
    return _0x12e3de;
  };
  return _0x3a75();
}
(function (_0x57cd1c, _0x595ed4) {
  const _0x58d6ea = _0x3fdd,
    _0x2a6a02 = _0x57cd1c();
  while (!![]) {
    try {
      const _0x1f8eef =
        parseInt(_0x58d6ea(0x196)) / 0x1 +
        (parseInt(_0x58d6ea(0x18f)) / 0x2) *
          (-parseInt(_0x58d6ea(0x193)) / 0x3) +
        (-parseInt(_0x58d6ea(0x194)) / 0x4) *
          (parseInt(_0x58d6ea(0x198)) / 0x5) +
        (parseInt(_0x58d6ea(0x192)) / 0x6) *
          (parseInt(_0x58d6ea(0x195)) / 0x7) +
        (-parseInt(_0x58d6ea(0x18d)) / 0x8) *
          (-parseInt(_0x58d6ea(0x19b)) / 0x9) +
        (parseInt(_0x58d6ea(0x190)) / 0xa) *
          (parseInt(_0x58d6ea(0x18e)) / 0xb) +
        -parseInt(_0x58d6ea(0x18c)) / 0xc;
      if (_0x1f8eef === _0x595ed4) break;
      else _0x2a6a02["push"](_0x2a6a02["shift"]());
    } catch (_0x34512f) {
      _0x2a6a02["push"](_0x2a6a02["shift"]());
    }
  }
})(_0x3a75, 0x324b3);
const mongoose = require(_0x4831e3(0x191)),
  couponSchema = new mongoose[_0x4831e3(0x197)]({
    couponName: { type: String, required: !![], unique: !![], upperCase: !![] },
    subTitle: { type: _0x4831e3(0x19a), required: !![] },
    minAmount: { type: Number, required: !![] },
    maxDiscount: { type: Number },
    discount: { type: Number, required: !![] },
    details: { type: String, required: !![] },
    expire: { type: Date, required: !![] },
  });
function _0x3fdd(_0x23597f, _0x272dbb) {
  const _0x3a7591 = _0x3a75();
  return (
    (_0x3fdd = function (_0x3fdd6c, _0x1a739b) {
      _0x3fdd6c = _0x3fdd6c - 0x18b;
      let _0x488e09 = _0x3a7591[_0x3fdd6c];
      return _0x488e09;
    }),
    _0x3fdd(_0x23597f, _0x272dbb)
  );
}
module[_0x4831e3(0x18b)] = mongoose["model"](_0x4831e3(0x199), couponSchema);
