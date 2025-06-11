const _0x55fde5 = _0x43b8;
(function (_0x37223d, _0x183129) {
  const _0x3b6eba = _0x43b8,
    _0x51f4ae = _0x37223d();
  while (!![]) {
    try {
      const _0x19999e =
        parseInt(_0x3b6eba(0xe5)) / 0x1 +
        parseInt(_0x3b6eba(0xe6)) / 0x2 +
        (-parseInt(_0x3b6eba(0xe0)) / 0x3) *
          (-parseInt(_0x3b6eba(0xd4)) / 0x4) +
        (-parseInt(_0x3b6eba(0xe1)) / 0x5) * (parseInt(_0x3b6eba(0xe4)) / 0x6) +
        (-parseInt(_0x3b6eba(0xd7)) / 0x7) *
          (-parseInt(_0x3b6eba(0xd8)) / 0x8) +
        parseInt(_0x3b6eba(0xdf)) / 0x9 +
        -parseInt(_0x3b6eba(0xdd)) / 0xa;
      if (_0x19999e === _0x183129) break;
      else _0x51f4ae["push"](_0x51f4ae["shift"]());
    } catch (_0x503d15) {
      _0x51f4ae["push"](_0x51f4ae["shift"]());
    }
  }
})(_0x56fc, 0x62be0);
function _0x43b8(_0x5d9c7c, _0x1ec9ac) {
  const _0x56fcd3 = _0x56fc();
  return (
    (_0x43b8 = function (_0x43b8bd, _0x53ae7c) {
      _0x43b8bd = _0x43b8bd - 0xd4;
      let _0x4b96a5 = _0x56fcd3[_0x43b8bd];
      return _0x4b96a5;
    }),
    _0x43b8(_0x5d9c7c, _0x1ec9ac)
  );
}
const Fooditem = require("../models/foodItem"),
  dotenv = require(_0x55fde5(0xe3)),
  connectDatabase = require("../config/database"),
  fooditems = require("../data/foodItem.json"),
  { connect } = require(_0x55fde5(0xd9));
dotenv["config"]({ path: _0x55fde5(0xdc) }), connectDatabase();
const seedFooditems = async () => {
  const _0xe1f95a = _0x55fde5;
  try {
    await Fooditem[_0xe1f95a(0xde)](),
      console[_0xe1f95a(0xd6)]("FoodItems\x20are\x20deleted"),
      await Fooditem[_0xe1f95a(0xd5)](fooditems),
      console[_0xe1f95a(0xd6)](_0xe1f95a(0xda)),
      process[_0xe1f95a(0xdb)]();
  } catch (_0x422dc1) {
    console[_0xe1f95a(0xd6)](_0x422dc1[_0xe1f95a(0xe2)]), process["exit"]();
  }
};
function _0x56fc() {
  const _0x4e4705 = [
    "All\x20FoodItems\x20are\x20added.",
    "exit",
    "backend/config/config.env",
    "3118080KwJPHV",
    "deleteMany",
    "991935YesgSy",
    "15UtGPBb",
    "2934095CCzpYy",
    "message",
    "dotenv",
    "6zwyelz",
    "218040nOzYWN",
    "1146772ETKIZh",
    "144812oCLaGi",
    "insertMany",
    "log",
    "81207xnyYWM",
    "152cyGuvd",
    "mongoose",
  ];
  _0x56fc = function () {
    return _0x4e4705;
  };
  return _0x56fc();
}
seedFooditems();
