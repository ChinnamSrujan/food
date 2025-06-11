const _0x484696 = _0x309e;
function _0x309e(_0x5bf62b, _0x14e001) {
  const _0x55dd50 = _0x55dd();
  return (
    (_0x309e = function (_0x309e61, _0x102a91) {
      _0x309e61 = _0x309e61 - 0xf9;
      let _0x5975ab = _0x55dd50[_0x309e61];
      return _0x5975ab;
    }),
    _0x309e(_0x5bf62b, _0x14e001)
  );
}
(function (_0x5cc3f2, _0x3719c4) {
  const _0x2f388e = _0x309e,
    _0x146100 = _0x5cc3f2();
  while (!![]) {
    try {
      const _0x36b1bb =
        (-parseInt(_0x2f388e(0x10f)) / 0x1) *
          (-parseInt(_0x2f388e(0x117)) / 0x2) +
        -parseInt(_0x2f388e(0x100)) / 0x3 +
        parseInt(_0x2f388e(0x11b)) / 0x4 +
        (parseInt(_0x2f388e(0x109)) / 0x5) *
          (parseInt(_0x2f388e(0x108)) / 0x6) +
        parseInt(_0x2f388e(0x110)) / 0x7 +
        parseInt(_0x2f388e(0x10b)) / 0x8 +
        -parseInt(_0x2f388e(0x118)) / 0x9;
      if (_0x36b1bb === _0x3719c4) break;
      else _0x146100["push"](_0x146100["shift"]());
    } catch (_0x29311a) {
      _0x146100["push"](_0x146100["shift"]());
    }
  }
})(_0x55dd, 0x30ea3);
const nodemailer = require("nodemailer"),
  pug = require(_0x484696(0x10d)),
  htmlToText = require(_0x484696(0x11c));
module[_0x484696(0x11a)] = class Email {
  constructor(_0x51eb5f, _0x21fb66) {
    const _0x22d525 = _0x484696;
    console[_0x22d525(0x106)](process["env"][_0x22d525(0x11d)]),
      (this["to"] = _0x51eb5f[_0x22d525(0xfa)]),
      (this[_0x22d525(0x114)] =
        _0x51eb5f[_0x22d525(0x101)][_0x22d525(0x113)]("\x20")[0x0]),
      (this[_0x22d525(0x115)] = _0x21fb66),
      (this[_0x22d525(0x10c)] =
        _0x22d525(0x116) + process[_0x22d525(0xfd)][_0x22d525(0x112)] + ">");
  }
  ["newTransport"]() {
    const _0x576786 = _0x484696;
    return nodemailer[_0x576786(0x107)]({
      host: process["env"][_0x576786(0x11d)],
      port: process["env"][_0x576786(0x104)],
      auth: {
        user: process["env"][_0x576786(0x111)],
        pass: process[_0x576786(0xfd)][_0x576786(0xf9)],
      },
    });
  }
  async ["send"](_0x3f224c, _0x5c1275) {
    const _0x21f619 = _0x484696,
      _0x20aaa1 = pug[_0x21f619(0xfb)](
        __dirname + "/../view/" + _0x3f224c + _0x21f619(0x10a),
        {
          firstName: this["firstName"],
          url: this[_0x21f619(0x115)],
          subject: _0x5c1275,
        }
      ),
      _0x2546b0 = {
        from: this[_0x21f619(0x10c)],
        to: this["to"],
        subject: _0x5c1275,
        html: _0x20aaa1,
        text: htmlToText["convert"](_0x20aaa1),
      };
    await this[_0x21f619(0x103)]()[_0x21f619(0xff)](_0x2546b0);
  }
  async [_0x484696(0x10e)]() {
    const _0x39defa = _0x484696;
    await this[_0x39defa(0x11e)](_0x39defa(0xfc), _0x39defa(0x102));
  }
  async [_0x484696(0x119)]() {
    const _0x5ccbb8 = _0x484696;
    await this[_0x5ccbb8(0x11e)](_0x5ccbb8(0x105), _0x5ccbb8(0xfe));
  }
};
function _0x55dd() {
  const _0x5cf83b = [
    "email",
    "renderFile",
    "welcome",
    "env",
    "password\x20reset\x20token\x20(valid\x20for\x20only\x2010\x20minutes)",
    "sendMail",
    "233760dGmhfE",
    "name",
    "welcome\x20to\x20the\x20Order\x20It!",
    "newTransport",
    "EMAIL_PORT",
    "passwordReset",
    "log",
    "createTransport",
    "18114HmMyky",
    "355zuhPVZ",
    ".pug",
    "347744SfolPv",
    "from",
    "pug",
    "sendWelcome",
    "8siEJDD",
    "2526636AxckaC",
    "EMAIL_USERNAME",
    "EMAIL_FROM",
    "split",
    "firstName",
    "url",
    "OrderIt\x20<",
    "48754WkRNqZ",
    "5881806wHLGmj",
    "sendPasswordReset",
    "exports",
    "472112DinorW",
    "html-to-text",
    "EMAIL_HOST",
    "send",
    "EMAIL_PASSWORD",
  ];
  _0x55dd = function () {
    return _0x5cf83b;
  };
  return _0x55dd();
}
