const _0x55ebee = _0x44a3;
function _0x1a81() {
  const _0x2aa57d = [
    "Schema",
    "102LxFQHs",
    "44qDRmxf",
    "991IpFaZh",
    "FoodItem",
    "FoodItem\x20name\x20cannot\x20exceed\x20100\x20characters\x20",
    "foodItems\x20can\x27t\x20exceed\x205\x20characters",
    "240hxwkyO",
    "2758380gjyItA",
    "55761akRMkC",
    "Restaurant",
    "29635wqYFCP",
    "5162267fgiQKd",
    "73467OdATDT",
    "Please\x20enter\x20FoodItem\x20description",
    "ObjectId",
    "102KHFXUX",
    "model",
    "Menu",
    "mongoose",
    "Please\x20enter\x20foodItem\x20stock",
    "FoodItem\x20name\x20cannot\x20exceed\x205\x20characters\x20",
    "3257940QublOg",
    "now",
    "Please\x20enter\x20FoodItem\x20price",
    "Please\x20enter\x20FoodItem\x20name",
  ];
  _0x1a81 = function () {
    return _0x2aa57d;
  };
  return _0x1a81();
}
function _0x44a3(_0x491b35, _0x32779a) {
  const _0x1a817a = _0x1a81();
  return (
    (_0x44a3 = function (_0x44a328, _0x2dfce7) {
      _0x44a328 = _0x44a328 - 0x16d;
      let _0x2a142c = _0x1a817a[_0x44a328];
      return _0x2a142c;
    }),
    _0x44a3(_0x491b35, _0x32779a)
  );
}
(function (_0x591cc7, _0x372eeb) {
  const _0x1b70db = _0x44a3,
    _0x8751fa = _0x591cc7();
  while (!![]) {
    try {
      const _0x5df0f3 =
        (-parseInt(_0x1b70db(0x185)) / 0x1) *
          (-parseInt(_0x1b70db(0x178)) / 0x2) +
        (parseInt(_0x1b70db(0x171)) / 0x3) *
          (-parseInt(_0x1b70db(0x184)) / 0x4) +
        (-parseInt(_0x1b70db(0x173)) / 0x5) *
          (parseInt(_0x1b70db(0x183)) / 0x6) +
        -parseInt(_0x1b70db(0x17e)) / 0x7 +
        (-parseInt(_0x1b70db(0x16f)) / 0x8) *
          (-parseInt(_0x1b70db(0x175)) / 0x9) +
        parseInt(_0x1b70db(0x170)) / 0xa +
        parseInt(_0x1b70db(0x174)) / 0xb;
      if (_0x5df0f3 === _0x372eeb) break;
      else _0x8751fa["push"](_0x8751fa["shift"]());
    } catch (_0x7cb33b) {
      _0x8751fa["push"](_0x8751fa["shift"]());
    }
  }
})(_0x1a81, 0x41e6a);
const mongoose = require(_0x55ebee(0x17b)),
  foodSchema = new mongoose[_0x55ebee(0x182)]({
    name: {
      type: String,
      required: [!![], _0x55ebee(0x181)],
      trim: !![],
      maxLength: [0x64, _0x55ebee(0x16d)],
    },
    price: {
      type: Number,
      required: [!![], _0x55ebee(0x180)],
      maxLength: [0x5, _0x55ebee(0x17d)],
      default: 0x0,
    },
    description: { type: String, required: [!![], _0x55ebee(0x176)] },
    ratings: { type: Number, default: 0x0 },
    images: [
      {
        public_id: { type: String, required: !![] },
        url: { type: String, required: !![] },
      },
    ],
    menu: {
      type: mongoose[_0x55ebee(0x182)]["Types"][_0x55ebee(0x177)],
      ref: _0x55ebee(0x17a),
    },
    stock: {
      type: Number,
      required: [!![], _0x55ebee(0x17c)],
      maxLength: [0x5, _0x55ebee(0x16e)],
      default: 0x0,
    },
    restaurant: {
      type: mongoose[_0x55ebee(0x182)]["Types"][_0x55ebee(0x177)],
      ref: _0x55ebee(0x172),
    },
    numOfReviews: { type: Number, default: 0x0 },
    reviews: [
      {
        name: { type: String, required: !![] },
        rating: { type: Number, required: !![] },
        Comment: { type: String, required: !![] },
      },
    ],
    createdAt: { type: Date, default: Date[_0x55ebee(0x17f)] },
  });
module["exports"] = mongoose[_0x55ebee(0x179)](_0x55ebee(0x186), foodSchema);
