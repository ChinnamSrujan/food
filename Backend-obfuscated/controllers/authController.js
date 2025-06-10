const _0x31b6ca = _0x4b99;
function _0x3ba2() {
  const _0x41d1f4 = [
    "687830BxLUmj",
    "/users/resetPassword/",
    "logout",
    "Invalid\x20Email\x20or\x20Password",
    "sign",
    "../utils/errorHandler",
    "15FUTRKe",
    "Bearer",
    "User\x20recently\x20changed\x20password\x20!\x20please\x20log\x20in\x20again.",
    "json",
    "iat",
    "CLOUDINARY_API_SECRET",
    "../models/user",
    "create",
    "email",
    "token",
    "params",
    "correctPassword",
    "digest",
    "password",
    "passwordConfirm",
    "forgotPassword",
    "dotenv",
    "+password",
    "uploader",
    "public_id",
    "findById",
    "Token\x20sent\x20to\x20email!",
    "env",
    "findOne",
    "JWT_EXPIRES_TIME",
    "../middlewares/catchAsyncErrors",
    "now",
    "scale",
    "hex",
    "resetPassword",
    "getUserProfile",
    "error",
    "CLOUDINARY_API_KEY",
    "../config/config.env",
    "success",
    "There\x20was\x20an\x20error\x20sending\x20the\x20email,\x20try\x20again\x20later!",
    "headers",
    "1143982VmTWUK",
    "save",
    "22692wPWGIr",
    "protect",
    "sha256",
    "body",
    "Internal\x20Server\x20Error",
    "4300975EWlIvY",
    "cookie",
    "cookies",
    "authorization",
    "update",
    "passwordResetExpires",
    "multer-storage-cloudinary",
    "You\x20are\x20not\x20logged\x20in!\x20Please\x20log\x20in\x20to\x20get\x20access.",
    "log",
    "avatar",
    "1629372rRfejZ",
    "createPasswordResetToken",
    "6882864bdTMAo",
    "avatars",
    "_id",
    "updatePassword",
    "JWT_SECRET",
    "verify",
    "jsonwebtoken",
    "select",
    "config",
    "secure_url",
    "default",
    "jwt",
    "Password\x20updated\x20successfully",
    "login",
    "destroy",
    "createHash",
    "cloudinary",
    "upload",
    "split",
    "../utils/email",
    "4368125UNMPKF",
    "name",
    "status",
    "signup",
    "user",
    "passwordResetToken",
    "crypto",
  ];
  _0x3ba2 = function () {
    return _0x41d1f4;
  };
  return _0x3ba2();
}
(function (_0x3cdbbd, _0x4e0fdc) {
  const _0x4d0cfa = _0x4b99,
    _0x48da85 = _0x3cdbbd();
  while (!![]) {
    try {
      const _0x4a6a2b =
        parseInt(_0x4d0cfa(0x170)) / 0x1 +
        -parseInt(_0x4d0cfa(0x142)) / 0x2 +
        (-parseInt(_0x4d0cfa(0x176)) / 0x3) *
          (-parseInt(_0x4d0cfa(0x144)) / 0x4) +
        parseInt(_0x4d0cfa(0x169)) / 0x5 +
        -parseInt(_0x4d0cfa(0x153)) / 0x6 +
        parseInt(_0x4d0cfa(0x149)) / 0x7 +
        -parseInt(_0x4d0cfa(0x155)) / 0x8;
      if (_0x4a6a2b === _0x4e0fdc) break;
      else _0x48da85["push"](_0x48da85["shift"]());
    } catch (_0x8b2121) {
      _0x48da85["push"](_0x48da85["shift"]());
    }
  }
})(_0x3ba2, 0x7a26e);
function _0x4b99(_0x1ed673, _0x20ecc7) {
  const _0x3ba275 = _0x3ba2();
  return (
    (_0x4b99 = function (_0x4b99f6, _0x5144aa) {
      _0x4b99f6 = _0x4b99f6 - 0x12e;
      let _0x32b9bf = _0x3ba275[_0x4b99f6];
      return _0x32b9bf;
    }),
    _0x4b99(_0x1ed673, _0x20ecc7)
  );
}
const User = require(_0x31b6ca(0x17c)),
  crypto = require(_0x31b6ca(0x16f)),
  jwt = require(_0x31b6ca(0x15b)),
  { promisify } = require("util"),
  dotenv = require(_0x31b6ca(0x186)),
  ErrorHandler = require(_0x31b6ca(0x175)),
  Email = require(_0x31b6ca(0x168)),
  catchAsyncErrors = require(_0x31b6ca(0x136)),
  cloudinary = require(_0x31b6ca(0x165))["v2"],
  { CloudinaryStorage } = require(_0x31b6ca(0x14f)),
  multer = require("multer");
dotenv[_0x31b6ca(0x15d)]({ path: _0x31b6ca(0x13e) });
const signToken = (_0x52aba6) => {
    const _0x3bae38 = _0x31b6ca;
    return jwt[_0x3bae38(0x174)](
      { id: _0x52aba6 },
      process[_0x3bae38(0x133)][_0x3bae38(0x159)],
      { expiresIn: process[_0x3bae38(0x133)][_0x3bae38(0x135)] + "d" }
    );
  },
  createSendToken = (_0x5adec4, _0x83272d, _0x304067) => {
    const _0x3ee223 = _0x31b6ca,
      _0x30a201 = signToken(_0x5adec4[_0x3ee223(0x157)]),
      _0x47d86b = {
        expires: new Date(
          Date[_0x3ee223(0x137)]() +
            process[_0x3ee223(0x133)][_0x3ee223(0x135)] *
              0x18 *
              0x3c *
              0x3c *
              0x3e8
        ),
        httpOnly: !![],
      };
    _0x304067[_0x3ee223(0x14a)](_0x3ee223(0x160), _0x30a201, _0x47d86b),
      (_0x5adec4["password"] = undefined),
      _0x304067["status"](_0x83272d)["json"]({
        success: !![],
        token: _0x30a201,
        data: { user: _0x5adec4 },
      });
  };
cloudinary[_0x31b6ca(0x15d)]({
  cloud_name: process["env"]["CLOUDINARY_CLOUD_NAME"],
  api_key: process["env"][_0x31b6ca(0x13d)],
  api_secret: process[_0x31b6ca(0x133)][_0x31b6ca(0x17b)],
});
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: _0x31b6ca(0x156),
      transformation: [{ width: 0x96, crop: "scale" }],
    },
  }),
  upload = multer({ storage: storage })["single"](_0x31b6ca(0x152));
(exports[_0x31b6ca(0x16c)] = catchAsyncErrors(
  async (_0x36ed18, _0x5de136, _0x133edf) => {
    const _0x573990 = _0x31b6ca,
      {
        name: _0x1f9cdf,
        email: _0x3255fa,
        password: _0x3c7b82,
        passwordConfirm: _0x2def08,
        phoneNumber: _0x5abbc9,
      } = _0x36ed18["body"];
    let _0x2b3a66 = {};
    if (_0x36ed18[_0x573990(0x147)][_0x573990(0x152)] === "/images/images.png")
      _0x2b3a66 = {
        public_id: _0x573990(0x15f),
        url: _0x36ed18["body"][_0x573990(0x152)],
      };
    else {
      const _0x19fd98 = await cloudinary[_0x573990(0x12f)][_0x573990(0x166)](
        _0x36ed18["body"][_0x573990(0x152)],
        { folder: _0x573990(0x156), width: 0x96, crop: "scale" }
      );
      _0x2b3a66 = {
        public_id: _0x19fd98["public_id"],
        url: _0x19fd98[_0x573990(0x15e)],
      };
    }
    const _0x1208d4 = await User[_0x573990(0x17d)]({
      name: _0x1f9cdf,
      email: _0x3255fa,
      password: _0x3c7b82,
      passwordConfirm: _0x2def08,
      phoneNumber: _0x5abbc9,
      avatar: _0x2b3a66,
    });
    createSendToken(_0x1208d4, 0xc8, _0x5de136);
  }
)),
  (exports[_0x31b6ca(0x162)] = catchAsyncErrors(
    async (_0x37bbe6, _0x399123, _0x141f80) => {
      const _0x100f7e = _0x31b6ca,
        { email: _0x4000b8, password: _0x1ebfb1 } = _0x37bbe6[_0x100f7e(0x147)];
      if (!_0x4000b8 || !_0x1ebfb1)
        return _0x141f80(
          new ErrorHandler("Please\x20enter\x20email\x20&\x20password", 0x190)
        );
      const _0x3bf199 = await User["findOne"]({ email: _0x4000b8 })[
        _0x100f7e(0x15c)
      ]("+password");
      if (!_0x3bf199)
        return _0x141f80(new ErrorHandler(_0x100f7e(0x173), 0x191));
      const _0x576947 = await _0x3bf199[_0x100f7e(0x181)](
        _0x1ebfb1,
        _0x3bf199["password"]
      );
      if (!_0x576947)
        return _0x141f80(new ErrorHandler(_0x100f7e(0x173), 0x191));
      createSendToken(_0x3bf199, 0xc8, _0x399123);
    }
  )),
  (exports[_0x31b6ca(0x145)] = catchAsyncErrors(
    async (_0xb0fa2, _0x60f196, _0x2afd7d) => {
      const _0x4806b9 = _0x31b6ca;
      let _0x5766d5;
      if (
        _0xb0fa2[_0x4806b9(0x141)][_0x4806b9(0x14c)] &&
        _0xb0fa2[_0x4806b9(0x141)][_0x4806b9(0x14c)]["startsWith"](
          _0x4806b9(0x177)
        )
      )
        _0x5766d5 =
          _0xb0fa2[_0x4806b9(0x141)][_0x4806b9(0x14c)][_0x4806b9(0x167)](
            "\x20"
          )[0x1];
      else
        _0xb0fa2["cookies"]["jwt"] &&
          (_0x5766d5 = _0xb0fa2[_0x4806b9(0x14b)]["jwt"]);
      if (!_0x5766d5)
        return _0x2afd7d(new ErrorHandler(_0x4806b9(0x150), 0x194));
      const _0x4e1d92 = await promisify(jwt[_0x4806b9(0x15a)])(
          _0x5766d5,
          process[_0x4806b9(0x133)][_0x4806b9(0x159)]
        ),
        _0x31c942 = await User[_0x4806b9(0x131)](_0x4e1d92["id"]);
      if (!_0x31c942)
        return _0x2afd7d(new ErrorHandler(_0x4806b9(0x178), 0x194));
      if (_0x31c942["changedPasswordAfter"](_0x4e1d92[_0x4806b9(0x17a)]))
        return _0x2afd7d(new ErrorHandler(_0x4806b9(0x178), 0x194));
      (_0xb0fa2[_0x4806b9(0x16d)] = _0x31c942), _0x2afd7d();
    }
  )),
  (exports[_0x31b6ca(0x13b)] = catchAsyncErrors(
    async (_0x2fb0f4, _0x4fb165, _0xd73848) => {
      const _0x27e13d = _0x31b6ca,
        _0x26c44c = await User[_0x27e13d(0x131)](
          _0x2fb0f4[_0x27e13d(0x16d)]["id"]
        );
      _0x4fb165["status"](0xc8)["json"]({ success: !![], user: _0x26c44c });
    }
  )),
  (exports[_0x31b6ca(0x158)] = async (_0x4a4b2a, _0x4e8507, _0x41f18d) => {
    const _0x14246b = _0x31b6ca;
    try {
      console[_0x14246b(0x151)](_0x4a4b2a["body"]);
      const {
          oldPassword: _0x519ec3,
          newPassword: _0x277f3f,
          newPasswordConfirm: _0x287737,
        } = _0x4a4b2a[_0x14246b(0x147)],
        _0x3b8e21 = await User[_0x14246b(0x131)](
          _0x4a4b2a[_0x14246b(0x16d)]["id"]
        )["select"](_0x14246b(0x12e)),
        _0x345d2c = await _0x3b8e21["correctPassword"](
          _0x519ec3,
          _0x3b8e21[_0x14246b(0x183)]
        );
      if (!_0x345d2c)
        return _0x41f18d(
          new ErrorHandler("Old\x20password\x20is\x20incorrect", 0x190)
        );
      (_0x3b8e21["password"] = _0x277f3f),
        (_0x3b8e21[_0x14246b(0x184)] = _0x287737),
        await _0x3b8e21["save"](),
        _0x4e8507[_0x14246b(0x16b)](0xc8)[_0x14246b(0x179)]({
          success: !![],
          message: _0x14246b(0x161),
        });
    } catch (_0x5efd8b) {
      return (
        console[_0x14246b(0x13c)](_0x5efd8b),
        _0x41f18d(new ErrorHandler(_0x14246b(0x148), 0x1f4))
      );
    }
  }),
  (exports["updateProfile"] = catchAsyncErrors(
    async (_0xd6d9db, _0x53c909, _0x553956) => {
      const _0x2e1c95 = _0x31b6ca,
        _0x3f8dc5 = {
          name: _0xd6d9db[_0x2e1c95(0x147)][_0x2e1c95(0x16a)],
          email: _0xd6d9db[_0x2e1c95(0x147)][_0x2e1c95(0x17e)],
        };
      if (_0xd6d9db["body"][_0x2e1c95(0x152)] !== "") {
        const _0x24d644 = await User[_0x2e1c95(0x131)](
            _0xd6d9db[_0x2e1c95(0x16d)]["id"]
          ),
          _0x509cd3 = _0x24d644[_0x2e1c95(0x152)][_0x2e1c95(0x130)],
          _0x4cebf9 = await cloudinary[_0x2e1c95(0x12f)][_0x2e1c95(0x163)](
            _0x509cd3
          ),
          _0x380fb7 = await cloudinary[_0x2e1c95(0x12f)][_0x2e1c95(0x166)](
            _0xd6d9db[_0x2e1c95(0x147)]["avatar"],
            { folder: _0x2e1c95(0x156), width: 0x96, crop: _0x2e1c95(0x138) }
          );
        _0x3f8dc5["avatar"] = {
          public_id: _0x380fb7[_0x2e1c95(0x130)],
          url: _0x380fb7[_0x2e1c95(0x15e)],
        };
      }
      const _0x3a0c76 = await User["findByIdAndUpdate"](
        _0xd6d9db["user"]["id"],
        _0x3f8dc5,
        { new: !![], runValidators: !![], useFindAndModify: ![] }
      );
      _0x53c909[_0x2e1c95(0x16b)](0xc8)[_0x2e1c95(0x179)]({ success: !![] });
    }
  )),
  (exports[_0x31b6ca(0x185)] = catchAsyncErrors(
    async (_0x55b205, _0xbabc1f, _0xab8dd7) => {
      const _0x102509 = _0x31b6ca,
        _0x2470da = await User[_0x102509(0x134)]({
          email: _0x55b205[_0x102509(0x147)][_0x102509(0x17e)],
        });
      if (!_0x2470da)
        return _0xab8dd7(
          new ErrorHandler(
            "There\x20is\x20no\x20user\x20with\x20email\x20address\x20.",
            0x194
          )
        );
      const _0x500d41 = _0x2470da[_0x102509(0x154)]();
      await _0x2470da[_0x102509(0x143)]({ validateBeforeSave: ![] });
      try {
        const _0x425114 =
          process["env"]["FRONTEND_URL"] + _0x102509(0x171) + _0x500d41;
        return (
          await new Email(_0x2470da, _0x425114)["sendPasswordReset"](),
          _0xbabc1f[_0x102509(0x16b)](0xc8)["json"]({
            status: _0x102509(0x13f),
            message: _0x102509(0x132),
          })
        );
      } catch (_0x5a6308) {
        return (
          (_0x2470da[_0x102509(0x16e)] = undefined),
          (_0x2470da[_0x102509(0x14e)] = undefined),
          await _0x2470da[_0x102509(0x143)]({ validateBeforeSave: ![] }),
          _0xab8dd7(new ErrorHandler(_0x102509(0x140), 0x1f4))
        );
      }
    }
  )),
  (exports[_0x31b6ca(0x13a)] = catchAsyncErrors(
    async (_0x17eda0, _0x386798, _0x326e7a) => {
      const _0x4e98e9 = _0x31b6ca,
        _0x123b07 = crypto[_0x4e98e9(0x164)](_0x4e98e9(0x146))
          [_0x4e98e9(0x14d)](_0x17eda0[_0x4e98e9(0x180)][_0x4e98e9(0x17f)])
          [_0x4e98e9(0x182)](_0x4e98e9(0x139)),
        _0x2e8172 = await User[_0x4e98e9(0x134)]({
          passwordResetToken: _0x123b07,
          passwordResetExpires: { $gt: Date[_0x4e98e9(0x137)]() },
        });
      if (!_0x2e8172)
        return _0x326e7a(
          new ErrorHandler(
            "Token\x20is\x20invalid\x20or\x20has\x20expired",
            0x190
          )
        );
      (_0x2e8172[_0x4e98e9(0x183)] =
        _0x17eda0[_0x4e98e9(0x147)][_0x4e98e9(0x183)]),
        (_0x2e8172["passwordConfirm"] =
          _0x17eda0[_0x4e98e9(0x147)][_0x4e98e9(0x184)]),
        (_0x2e8172[_0x4e98e9(0x16e)] = undefined),
        (_0x2e8172[_0x4e98e9(0x14e)] = undefined),
        await _0x2e8172[_0x4e98e9(0x143)](),
        createSendToken(_0x2e8172, 0xc8, _0x386798);
    }
  )),
  (exports[_0x31b6ca(0x172)] = catchAsyncErrors(
    async (_0x4aaeee, _0x202ce2, _0x2831d8) => {
      const _0x300a69 = _0x31b6ca;
      _0x202ce2["cookie"](_0x300a69(0x160), null, {
        expires: new Date(Date[_0x300a69(0x137)]()),
        httpOnly: !![],
      }),
        _0x202ce2["status"](0xc8)[_0x300a69(0x179)]({
          success: !![],
          message: "Logged\x20out",
        });
    }
  ));
