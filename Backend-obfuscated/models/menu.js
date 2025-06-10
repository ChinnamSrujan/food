const _0x18f0c5 = _0x118f;
(function (_0xed8911, _0x1e9f45) {
  const _0x511341 = _0x118f,
    _0x4b0d6e = _0xed8911();
  while (!![]) {
    try {
      const _0x237a8c =
        -parseInt(_0x511341(0x169)) / 0x1 +
        (-parseInt(_0x511341(0x16b)) / 0x2) *
          (parseInt(_0x511341(0x163)) / 0x3) +
        (parseInt(_0x511341(0x16e)) / 0x4) *
          (-parseInt(_0x511341(0x16f)) / 0x5) +
        -parseInt(_0x511341(0x16c)) / 0x6 +
        -parseInt(_0x511341(0x168)) / 0x7 +
        (parseInt(_0x511341(0x170)) / 0x8) *
          (parseInt(_0x511341(0x166)) / 0x9) +
        parseInt(_0x511341(0x167)) / 0xa;
      if (_0x237a8c === _0x1e9f45) break;
      else _0x4b0d6e["push"](_0x4b0d6e["shift"]());
    } catch (_0x50c21f) {
      _0x4b0d6e["push"](_0x4b0d6e["shift"]());
    }
  }
})(_0x6c3d, 0x46876);
const mongoose = require(_0x18f0c5(0x16d)),
  menuSchema = new mongoose[_0x18f0c5(0x162)](
    {
      menu: [
        {
          category: { type: String },
          items: [
            {
              type: mongoose["Schema"][_0x18f0c5(0x164)][_0x18f0c5(0x173)],
              ref: _0x18f0c5(0x171),
            },
          ],
        },
      ],
      restaurant: {
        type: mongoose[_0x18f0c5(0x162)]["Types"][_0x18f0c5(0x173)],
        ref: _0x18f0c5(0x172),
      },
    },
    { toJSON: { virtuals: !![] }, toObject: { virtuals: !![] } }
  );
function _0x118f(_0x5e32ae, _0x437bf7) {
  const _0x6c3db0 = _0x6c3d();
  return (
    (_0x118f = function (_0x118fbf, _0x4bf119) {
      _0x118fbf = _0x118fbf - 0x162;
      let _0x282915 = _0x6c3db0[_0x118fbf];
      return _0x282915;
    }),
    _0x118f(_0x5e32ae, _0x437bf7)
  );
}
(Menu = mongoose[_0x18f0c5(0x16a)]("Menu", menuSchema)),
  (module[_0x18f0c5(0x165)] = Menu);
function _0x6c3d() {
  const _0x223ccd = [
    "725208PHqeyG",
    "mongoose",
    "65200IHvPGY",
    "95jspkwn",
    "8rhSLJn",
    "FoodItem",
    "Restaurant",
    "ObjectId",
    "Schema",
    "6ViMfmh",
    "Types",
    "exports",
    "3552453qEPtAZ",
    "14491090vIuPjF",
    "2251515RcZUAX",
    "285079pfBalJ",
    "model",
    "517648PzTrVr",
  ];
  _0x6c3d = function () {
    return _0x223ccd;
  };
  return _0x6c3d();
}
