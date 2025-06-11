function _0x5373(_0x5ea334, _0x4e376f) {
  const _0x17ddaf = _0x17dd();
  return (
    (_0x5373 = function (_0x53730b, _0x1b97be) {
      _0x53730b = _0x53730b - 0xd4;
      let _0x1d3600 = _0x17ddaf[_0x53730b];
      return _0x1d3600;
    }),
    _0x5373(_0x5ea334, _0x4e376f)
  );
}
const _0x515189 = _0x5373;
(function (_0x50bb3f, _0x49d82e) {
  const _0x50f34c = _0x5373,
    _0x4468d3 = _0x50bb3f();
  while (!![]) {
    try {
      const _0x2fe68b =
        -parseInt(_0x50f34c(0xf8)) / 0x1 +
        -parseInt(_0x50f34c(0x100)) / 0x2 +
        parseInt(_0x50f34c(0xd7)) / 0x3 +
        (-parseInt(_0x50f34c(0xf3)) / 0x4) *
          (-parseInt(_0x50f34c(0xee)) / 0x5) +
        (-parseInt(_0x50f34c(0xd6)) / 0x6) *
          (-parseInt(_0x50f34c(0xdb)) / 0x7) +
        -parseInt(_0x50f34c(0xe2)) / 0x8 +
        (-parseInt(_0x50f34c(0xdf)) / 0x9) * (-parseInt(_0x50f34c(0xf6)) / 0xa);
      if (_0x2fe68b === _0x49d82e) break;
      else _0x4468d3["push"](_0x4468d3["shift"]());
    } catch (_0x32de17) {
      _0x4468d3["push"](_0x4468d3["shift"]());
    }
  }
})(_0x17dd, 0x92eb7);
const mongoose = require(_0x515189(0xff)),
  validator = require(_0x515189(0xfd)),
  bcrypt = require("bcryptjs"),
  jwt = require(_0x515189(0xe6)),
  crypto = require(_0x515189(0xf9)),
  userSchema = new mongoose["Schema"]({
    name: {
      type: String,
      required: [!![], _0x515189(0xe3)],
      maxLength: [0x1e, _0x515189(0xef)],
    },
    email: {
      type: String,
      required: [!![], _0x515189(0xec)],
      unique: !![],
      lowercase: !![],
      validate: [validator["isEmail"], _0x515189(0xd8)],
    },
    password: {
      type: String,
      required: [!![], _0x515189(0xfa)],
      minlength: [0x6, _0x515189(0xe8)],
      select: ![],
    },
    passwordConfirm: {
      type: String,
      required: [!![], _0x515189(0xeb)],
      validate: function (_0x54d8e7) {
        const _0x54e180 = _0x515189;
        return _0x54d8e7 === this[_0x54e180(0xd4)];
      },
      message: _0x515189(0x101),
    },
    avatar: {
      public_id: { type: String, required: !![] },
      url: { type: String, required: !![] },
    },
    role: {
      type: String,
      enum: [_0x515189(0xe1), _0x515189(0xe7), _0x515189(0xf4)],
      default: _0x515189(0xe1),
    },
    phoneNumber: { type: String, required: !![] },
    createdAt: { type: Date, default: Date["now"]() },
    passwordChangedAt: Date,
    active: { type: Boolean, default: !![], select: ![] },
    passwordResetToken: String,
    passwordResetExpires: Date,
  });
userSchema[_0x515189(0xe9)](_0x515189(0xf2), async function (_0x34a41a) {
  const _0x5bd564 = _0x515189;
  if (!this[_0x5bd564(0xf0)](_0x5bd564(0xd4))) return _0x34a41a();
  (this[_0x5bd564(0xd4)] = await bcrypt[_0x5bd564(0xe4)](
    this[_0x5bd564(0xd4)],
    0xc
  )),
    (this[_0x5bd564(0xd5)] = undefined),
    _0x34a41a();
}),
  (userSchema[_0x515189(0xfc)]["correctPassword"] = async function (
    _0x5093a7,
    _0x3f4bca
  ) {
    const _0x4757f3 = _0x515189;
    return await bcrypt[_0x4757f3(0xda)](_0x5093a7, _0x3f4bca);
  }),
  (userSchema[_0x515189(0xfc)][_0x515189(0xf7)] = function (_0x51888b) {
    const _0x3e3b5a = _0x515189;
    if (this["passwordChangedAt"]) {
      const _0xb65d74 = parseInt(
        this[_0x3e3b5a(0xf5)][_0x3e3b5a(0xe5)]() / 0x3e8,
        0xa
      );
      return _0x51888b < _0xb65d74;
    }
    return ![];
  }),
  (userSchema[_0x515189(0xfc)]["createPasswordResetToken"] = function () {
    const _0x516fdf = _0x515189,
      _0x233cfb = crypto[_0x516fdf(0xfe)](0x20)[_0x516fdf(0xdd)](
        _0x516fdf(0xfb)
      );
    return (
      (this[_0x516fdf(0xed)] = crypto["createHash"]("sha256")
        [_0x516fdf(0xe0)](_0x233cfb)
        [_0x516fdf(0xf1)](_0x516fdf(0xfb))),
      (this[_0x516fdf(0xea)] = Date[_0x516fdf(0xdc)]() + 0xa * 0x3c * 0x3e8),
      _0x233cfb
    );
  }),
  (module[_0x515189(0xd9)] = mongoose["model"](_0x515189(0xde), userSchema));
function _0x17dd() {
  const _0x28317f = [
    "toString",
    "User",
    "53397CtDuBs",
    "update",
    "user",
    "6660360UzgYDD",
    "Please\x20enter\x20your\x20name",
    "hash",
    "getTime",
    "jsonwebtoken",
    "restaurant-owner",
    "Your\x20password\x20must\x20be\x20longer\x20than\x206\x20characters",
    "pre",
    "passwordResetExpires",
    "Please\x20consfirm\x20your\x20password",
    "Please\x20enter\x20your\x20email",
    "passwordResetToken",
    "415OjmHBu",
    "Your\x20name\x20cannot\x20exceed\x2030\x20characters",
    "isModified",
    "digest",
    "save",
    "16540hnoKdy",
    "admin",
    "passwordChangedAt",
    "2960FKnief",
    "changedPasswordAfter",
    "1076771ovnIhj",
    "crypto",
    "Please\x20enter\x20your\x20password",
    "hex",
    "methods",
    "validator",
    "randomBytes",
    "mongoose",
    "1099754DdFMRz",
    "password\x20are\x20not\x20same\x20!",
    "password",
    "passwordConfirm",
    "322878DroHQo",
    "2077614rnIvEP",
    "Please\x20enter\x20valid\x20email\x20address",
    "exports",
    "compare",
    "35gzwRNY",
    "now",
  ];
  _0x17dd = function () {
    return _0x28317f;
  };
  return _0x17dd();
}
