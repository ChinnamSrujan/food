const _0x822252 = _0x2f11;
function _0x2f11(_0x29a148, _0x2ba781) {
  const _0x284fa6 = _0x284f();
  return (
    (_0x2f11 = function (_0x2f11d4, _0x203ad9) {
      _0x2f11d4 = _0x2f11d4 - 0x13a;
      let _0x4672ce = _0x284fa6[_0x2f11d4];
      return _0x4672ce;
    }),
    _0x2f11(_0x29a148, _0x2ba781)
  );
}
(function (_0x12deb5, _0x5d9e12) {
  const _0x2390da = _0x2f11,
    _0x40d169 = _0x12deb5();
  while (!![]) {
    try {
      const _0x253318 =
        parseInt(_0x2390da(0x13b)) / 0x1 +
        parseInt(_0x2390da(0x143)) / 0x2 +
        (parseInt(_0x2390da(0x14e)) / 0x3) *
          (parseInt(_0x2390da(0x154)) / 0x4) +
        -parseInt(_0x2390da(0x15b)) / 0x5 +
        (-parseInt(_0x2390da(0x13c)) / 0x6) *
          (-parseInt(_0x2390da(0x155)) / 0x7) +
        -parseInt(_0x2390da(0x13e)) / 0x8 +
        (-parseInt(_0x2390da(0x152)) / 0x9) *
          (parseInt(_0x2390da(0x13f)) / 0xa);
      if (_0x253318 === _0x5d9e12) break;
      else _0x40d169["push"](_0x40d169["shift"]());
    } catch (_0x401afc) {
      _0x40d169["push"](_0x40d169["shift"]());
    }
  }
})(_0x284f, 0x6e1b9);
function _0x284f() {
  const _0x18bc45 = [
    "Resource\x20not\x20found.\x20Invalid:\x20",
    "1210366EpZjYs",
    "statusCode",
    "path",
    "json",
    "NODE_ENV",
    "JSON\x20Web\x20Token\x20is\x20invalid.\x20Try\x20Again!!!",
    "errors",
    "name",
    "exports",
    "castError",
    "keyValue",
    "7629nQTMUr",
    "\x20entered",
    "DEVELOPMENT",
    "ValidationError",
    "1027791OxWAUl",
    "values",
    "32bRpSfh",
    "85330QoYstV",
    "../utils/errorHandler",
    "stack",
    "map",
    "TokenExpiredError",
    "env",
    "1507830PvphLj",
    "message",
    "87324FhcTZm",
    "372KsXAQG",
    "PRODUCTION",
    "2987736WWfVVM",
    "30MlyIyO",
    "JsonWebTokenError",
    "code",
  ];
  _0x284f = function () {
    return _0x18bc45;
  };
  return _0x284f();
}
const ErrorHandler = require(_0x822252(0x156));
module[_0x822252(0x14b)] = (_0xc6fa59, _0x58123a, _0x352363, _0x3584bd) => {
  const _0x50acd1 = _0x822252;
  _0xc6fa59[_0x50acd1(0x144)] = _0xc6fa59[_0x50acd1(0x144)] || 0x1f4;
  process[_0x50acd1(0x15a)]["NODE_ENV"] === _0x50acd1(0x150) &&
    _0x352363["status"](_0xc6fa59[_0x50acd1(0x144)])["json"]({
      success: ![],
      error: _0xc6fa59,
      errMessage: _0xc6fa59[_0x50acd1(0x13a)],
      stack: _0xc6fa59[_0x50acd1(0x157)],
    });
  if (process[_0x50acd1(0x15a)][_0x50acd1(0x147)] === _0x50acd1(0x13d)) {
    let _0x5d984e = { ..._0xc6fa59 };
    _0x5d984e[_0x50acd1(0x13a)] = _0xc6fa59[_0x50acd1(0x13a)];
    if (_0xc6fa59[_0x50acd1(0x14a)] == _0x50acd1(0x14c)) {
      const _0x388918 = _0x50acd1(0x142) + _0xc6fa59[_0x50acd1(0x145)];
      _0x5d984e = new ErrorHandler(_0x388918, 0x190);
    }
    if (_0xc6fa59["name"] === _0x50acd1(0x151)) {
      const _0x2fdf1d = Object[_0x50acd1(0x153)](_0xc6fa59[_0x50acd1(0x149)])[
        _0x50acd1(0x158)
      ]((_0x2398a3) => _0x2398a3[_0x50acd1(0x13a)]);
      _0x5d984e = new ErrorHandler(_0x2fdf1d, 0x190);
    }
    if (_0xc6fa59[_0x50acd1(0x141)] === 0x2af8) {
      const _0x3af329 =
        "Duplicate\x20" +
        Object["keys"](_0xc6fa59[_0x50acd1(0x14d)]) +
        _0x50acd1(0x14f);
      _0x5d984e = new ErrorHandler(_0x3af329, 0x190);
    }
    if (_0xc6fa59[_0x50acd1(0x14a)] === _0x50acd1(0x140)) {
      const _0x4134bb = _0x50acd1(0x148);
      _0x5d984e = new ErrorHandler(_0x4134bb, 0x190);
    }
    if (_0xc6fa59["name"] === _0x50acd1(0x159)) {
      const _0x6a21a4 =
        "JSON\x20Web\x20Token\x20is\x20expired.\x20Try\x20Again!!!";
      _0x5d984e = new ErrorHandler(_0x6a21a4, 0x190);
    }
    _0x352363["status"](_0x5d984e[_0x50acd1(0x144)])[_0x50acd1(0x146)]({
      success: ![],
      message: _0x5d984e["message"] || "Internal\x20Server\x20Error",
    });
  }
};
