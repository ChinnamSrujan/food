function _0x11c8() {
  const _0x55edd1 = [
    "replace",
    "page",
    "stringify",
    "247866uXdEGe",
    "filter",
    "584118mFjMVY",
    "toLowerCase",
    "216148QxtWOC",
    "keyword",
    "reviews",
    "log",
    "2572332EvEfeE",
    "find",
    "pagination",
    "parse",
    "search",
    "4655664vsWykv",
    "query",
    "sort",
    "sortBy",
    "438336DCUdJP",
    "15VYODaT",
    "exports",
    "skip",
    "forEach",
    "limit",
    "queryStr",
    "3767386iNmXgd",
  ];
  _0x11c8 = function () {
    return _0x55edd1;
  };
  return _0x11c8();
}
const _0x4c06ca = _0x5f47;
(function (_0x22793a, _0x5d519e) {
  const _0x52a1ba = _0x5f47,
    _0x431c3c = _0x22793a();
  while (!![]) {
    try {
      const _0x121f4b =
        parseInt(_0x52a1ba(0x132)) / 0x1 +
        -parseInt(_0x52a1ba(0x13f)) / 0x2 +
        -parseInt(_0x52a1ba(0x13d)) / 0x3 +
        (parseInt(_0x52a1ba(0x141)) / 0x4) *
          (-parseInt(_0x52a1ba(0x133)) / 0x5) +
        parseInt(_0x52a1ba(0x145)) / 0x6 +
        parseInt(_0x52a1ba(0x139)) / 0x7 +
        -parseInt(_0x52a1ba(0x12e)) / 0x8;
      if (_0x121f4b === _0x5d519e) break;
      else _0x431c3c["push"](_0x431c3c["shift"]());
    } catch (_0x377acc) {
      _0x431c3c["push"](_0x431c3c["shift"]());
    }
  }
})(_0x11c8, 0x45f2a);
class APIFeatures {
  constructor(_0x9b2154, _0x42992b) {
    const _0x3a4d9b = _0x5f47;
    (this["query"] = _0x9b2154), (this[_0x3a4d9b(0x138)] = _0x42992b);
  }
  [_0x4c06ca(0x12d)]() {
    const _0x169d6b = _0x4c06ca,
      _0x4962e6 = this[_0x169d6b(0x138)][_0x169d6b(0x142)]
        ? {
            name: {
              $regex: this[_0x169d6b(0x138)][_0x169d6b(0x142)],
              $options: "i",
            },
          }
        : {};
    return (
      (this[_0x169d6b(0x12f)] = this["query"][_0x169d6b(0x146)]({
        ..._0x4962e6,
      })),
      this
    );
  }
  [_0x4c06ca(0x13e)]() {
    const _0x25612a = _0x4c06ca,
      _0xf64c16 = { ...this[_0x25612a(0x138)] };
    console["log"](_0xf64c16);
    const _0x3ed6dd = [_0x25612a(0x142), _0x25612a(0x137), _0x25612a(0x13b)];
    _0x3ed6dd[_0x25612a(0x136)]((_0x1e81c2) => delete _0xf64c16[_0x1e81c2]),
      console[_0x25612a(0x144)](_0xf64c16);
    let _0x30085e = JSON[_0x25612a(0x13c)](_0xf64c16);
    (_0x30085e = _0x30085e[_0x25612a(0x13a)](
      /\b(gt|gte|lt|lte)\b/g,
      (_0x597d9e) => "$" + _0x597d9e
    )),
      console["log"](_0x30085e),
      (this["query"] = this["query"][_0x25612a(0x146)](
        JSON[_0x25612a(0x12c)](_0x30085e)
      ));
    if (this["queryStr"][_0x25612a(0x131)]) {
      const _0xe976b2 = this[_0x25612a(0x138)]["sortBy"][_0x25612a(0x140)]();
      if (_0xe976b2 === "ratings") sortQuery = { ratings: -0x1 };
      else
        _0xe976b2 === _0x25612a(0x143) && (sortQuery = { numOfReviews: -0x1 });
    }
    return (
      (this[_0x25612a(0x12f)] =
        this[_0x25612a(0x12f)][_0x25612a(0x130)](sortQuery)),
      this
    );
  }
  [_0x4c06ca(0x12b)](_0x20dcd9) {
    const _0x1a05b9 = _0x4c06ca,
      _0x4d4173 = Number(this[_0x1a05b9(0x138)]["page"]) || 0x1,
      _0x14cdd1 = _0x20dcd9 * (_0x4d4173 - 0x1);
    return (
      (this[_0x1a05b9(0x12f)] = this[_0x1a05b9(0x12f)]
        [_0x1a05b9(0x137)](_0x20dcd9)
        [_0x1a05b9(0x135)](_0x14cdd1)),
      this
    );
  }
  [_0x4c06ca(0x130)]() {
    const _0x92f05a = _0x4c06ca;
    if (this[_0x92f05a(0x138)][_0x92f05a(0x131)]) {
      const _0x396e88 = this[_0x92f05a(0x138)]["sortBy"][_0x92f05a(0x140)]();
      let _0x436602 = {};
      if (_0x396e88 === "ratings") _0x436602 = { ratings: -0x1 };
      else
        _0x396e88 === _0x92f05a(0x143) && (_0x436602 = { numOfReviews: -0x1 });
      this[_0x92f05a(0x12f)] = this[_0x92f05a(0x12f)]["sort"](_0x436602);
    }
    return this;
  }
}
function _0x5f47(_0x5d48d7, _0x2a0266) {
  const _0x11c881 = _0x11c8();
  return (
    (_0x5f47 = function (_0x5f4754, _0x339c5d) {
      _0x5f4754 = _0x5f4754 - 0x12b;
      let _0x437076 = _0x11c881[_0x5f4754];
      return _0x437076;
    }),
    _0x5f47(_0x5d48d7, _0x2a0266)
  );
}
module[_0x4c06ca(0x134)] = APIFeatures;
