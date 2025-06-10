const _0x948281 = _0x4d80;
function _0x4d80(_0x47d2b2, _0xbfc548) {
  const _0x10b67c = _0x10b6();
  return (
    (_0x4d80 = function (_0x4d8001, _0x5d899a) {
      _0x4d8001 = _0x4d8001 - 0x16a;
      let _0x5cef81 = _0x10b67c[_0x4d8001];
      return _0x5cef81;
    }),
    _0x4d80(_0x47d2b2, _0xbfc548)
  );
}
(function (_0x477f34, _0x5aca57) {
  const _0x5595ac = _0x4d80,
    _0x42037e = _0x477f34();
  while (!![]) {
    try {
      const _0x1c421b =
        -parseInt(_0x5595ac(0x16d)) / 0x1 +
        (parseInt(_0x5595ac(0x16f)) / 0x2) *
          (parseInt(_0x5595ac(0x172)) / 0x3) +
        -parseInt(_0x5595ac(0x173)) / 0x4 +
        (parseInt(_0x5595ac(0x176)) / 0x5) *
          (parseInt(_0x5595ac(0x186)) / 0x6) +
        (-parseInt(_0x5595ac(0x182)) / 0x7) *
          (-parseInt(_0x5595ac(0x177)) / 0x8) +
        parseInt(_0x5595ac(0x184)) / 0x9 +
        (-parseInt(_0x5595ac(0x17a)) / 0xa) *
          (parseInt(_0x5595ac(0x175)) / 0xb);
      if (_0x1c421b === _0x5aca57) break;
      else _0x42037e["push"](_0x42037e["shift"]());
    } catch (_0x413fea) {
      _0x42037e["push"](_0x42037e["shift"]());
    }
  }
})(_0x10b6, 0x899d2);
const app = require("./app"),
  connectDatabase = require(_0x948281(0x16c)),
  dotenv = require(_0x948281(0x185)),
  cloudinary = require("cloudinary"),
  { setDriver } = require(_0x948281(0x17b));
process["on"](_0x948281(0x179), (_0x292333) => {
  const _0x2a3ed7 = _0x948281;
  console[_0x2a3ed7(0x16e)](_0x2a3ed7(0x183) + _0x292333["stack"]),
    console[_0x2a3ed7(0x16e)](_0x2a3ed7(0x180)),
    process[_0x2a3ed7(0x17f)](0x1);
}),
  dotenv[_0x948281(0x16a)]({ path: _0x948281(0x171) }),
  connectDatabase(),
  cloudinary[_0x948281(0x16a)]({
    cloud_name: process[_0x948281(0x170)]["CLOUDINARY_CLOUD_NAME"],
    api_key: process[_0x948281(0x170)][_0x948281(0x17d)],
    api_secret: process["env"][_0x948281(0x178)],
  });
function _0x10b6() {
  const _0x5cdbf7 = [
    "963008uNFeya",
    "PORT",
    "373021GonJyL",
    "55okMaYG",
    "44648zwzYyN",
    "CLOUDINARY_API_SECRET",
    "uncaughtException",
    "250LXKfcT",
    "mongoose",
    "listen",
    "CLOUDINARY_API_KEY",
    "close",
    "exit",
    "Shutting\x20down\x20server\x20due\x20to\x20uncaught\x20exception",
    "NODE_ENV",
    "798EhiuUm",
    "ERROR:\x20",
    "4213512vBHCzb",
    "dotenv",
    "422358ywIGqp",
    "Shutting\x20down\x20the\x20server\x20due\x20to\x20Unhandled\x20Promise\x20rejection",
    "config",
    "unhandledRejection\x20",
    "./config/database",
    "246041ZccFty",
    "log",
    "13006mXNCxl",
    "env",
    "./config/config.env",
    "9djIoyW",
  ];
  _0x10b6 = function () {
    return _0x5cdbf7;
  };
  return _0x10b6();
}
const server = app[_0x948281(0x17c)](
  process[_0x948281(0x170)][_0x948281(0x174)],
  () => {
    const _0x9eb2d = _0x948281;
    console[_0x9eb2d(0x16e)](
      "Server\x20started\x20on\x20PORT:\x20" +
        process[_0x9eb2d(0x170)][_0x9eb2d(0x174)] +
        "\x20in\x20" +
        process[_0x9eb2d(0x170)][_0x9eb2d(0x181)] +
        "\x20mode."
    );
  }
);
process["on"](_0x948281(0x16b), (_0x560a3e) => {
  const _0x518dcc = _0x948281;
  console[_0x518dcc(0x16e)](_0x518dcc(0x183) + _0x560a3e["message"]),
    console[_0x518dcc(0x16e)](_0x518dcc(0x187)),
    server[_0x518dcc(0x17e)](() => {
      process["exit"](0x1);
    });
});
