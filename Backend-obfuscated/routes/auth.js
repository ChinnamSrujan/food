const _0x2475e7 = _0x2f5a;
(function (_0x2ad733, _0x3041ae) {
  const _0x5e4448 = _0x2f5a,
    _0x5dda81 = _0x2ad733();
  while (!![]) {
    try {
      const _0x206547 =
        (parseInt(_0x5e4448(0x1a3)) / 0x1) *
          (parseInt(_0x5e4448(0x1a2)) / 0x2) +
        (parseInt(_0x5e4448(0x1aa)) / 0x3) *
          (-parseInt(_0x5e4448(0x190)) / 0x4) +
        parseInt(_0x5e4448(0x1a6)) / 0x5 +
        -parseInt(_0x5e4448(0x19e)) / 0x6 +
        parseInt(_0x5e4448(0x19b)) / 0x7 +
        (parseInt(_0x5e4448(0x1a1)) / 0x8) *
          (-parseInt(_0x5e4448(0x1a0)) / 0x9) +
        (parseInt(_0x5e4448(0x1af)) / 0xa) * (parseInt(_0x5e4448(0x193)) / 0xb);
      if (_0x206547 === _0x3041ae) break;
      else _0x5dda81["push"](_0x5dda81["shift"]());
    } catch (_0x2ffd60) {
      _0x5dda81["push"](_0x5dda81["shift"]());
    }
  }
})(_0x5e80, 0x7a939);
function _0x5e80() {
  const _0x1b2cbd = [
    "exports",
    "signup",
    "1593380sJjFtH",
    "/resetPassword/:token",
    "16dksemp",
    "forgotPassword",
    "getUserProfile",
    "22zWHSyX",
    "/me/update",
    "route",
    "put",
    "updatePassword",
    "Router",
    "/me",
    "patch",
    "5420730yirCtU",
    "post",
    "express",
    "4284570IfduPw",
    "get",
    "9Ejmiwa",
    "2680280gfSVKx",
    "4CLnwzi",
    "397004dPtCuK",
    "/password/update",
    "resetPassword",
    "3096685bCsypt",
    "logout",
    "../controllers/authController",
    "/signup",
    "716406CoBcVM",
    "/login",
    "protect",
  ];
  _0x5e80 = function () {
    return _0x1b2cbd;
  };
  return _0x5e80();
}
const express = require(_0x2475e7(0x19d)),
  router = express[_0x2475e7(0x198)](),
  authController = require(_0x2475e7(0x1a8));
function _0x2f5a(_0x5a17f8, _0x416fb3) {
  const _0x5e80d4 = _0x5e80();
  return (
    (_0x2f5a = function (_0x2f5a90, _0x40060f) {
      _0x2f5a90 = _0x2f5a90 - 0x18f;
      let _0x488c1f = _0x5e80d4[_0x2f5a90];
      return _0x488c1f;
    }),
    _0x2f5a(_0x5a17f8, _0x416fb3)
  );
}
router[_0x2475e7(0x19c)](_0x2475e7(0x1a9), authController[_0x2475e7(0x1ae)]),
  router[_0x2475e7(0x19c)](_0x2475e7(0x1ab), authController["login"]),
  router[_0x2475e7(0x19c)]("/forgetPassword", authController[_0x2475e7(0x191)]),
  router[_0x2475e7(0x19a)](_0x2475e7(0x18f), authController[_0x2475e7(0x1a5)]),
  router[_0x2475e7(0x195)]("/logout")["get"](authController[_0x2475e7(0x1a7)]),
  router[_0x2475e7(0x195)](_0x2475e7(0x199))[_0x2475e7(0x19f)](
    authController[_0x2475e7(0x1ac)],
    authController[_0x2475e7(0x192)]
  ),
  router[_0x2475e7(0x195)](_0x2475e7(0x1a4))[_0x2475e7(0x196)](
    authController["protect"],
    authController[_0x2475e7(0x197)]
  ),
  router["route"](_0x2475e7(0x194))["put"](
    authController["protect"],
    authController["updateProfile"]
  ),
  (module[_0x2475e7(0x1ad)] = router);
