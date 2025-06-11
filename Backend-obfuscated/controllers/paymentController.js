function _0x3eaf() {
  const _0x3ab7e7 = [
    "env",
    "stripe",
    "fixed_amount",
    "./config/config.env",
    "images",
    "140555cCRTPT",
    "url",
    "user",
    "sessions",
    "3923022aQSWEt",
    "/success?session_id={CHECKOUT_SESSION_ID}",
    "items",
    "Delivery\x20Charges",
    "config",
    "STRIPE_SECRET_KEY",
    "dotenv",
    "17941231dUqDEE",
    "201760GVDEgN",
    "40sjelRW",
    "FRONTEND_URL",
    "/cart",
    "inr",
    "268eWoFzF",
    "../middlewares/catchAsyncErrors",
    "hour",
    "map",
    "processPayment",
    "69328JoidgS",
    "28UQQQsa",
    "log",
    "sendStripApi",
    "2480430kjyGKr",
    "json",
    "45XifYgu",
    "923304MyETIl",
    "body",
    "foodItem",
    "status",
    "STRIPE_API_KEY",
  ];
  _0x3eaf = function () {
    return _0x3ab7e7;
  };
  return _0x3eaf();
}
const _0x588f60 = _0x50f0;
(function (_0x26bca9, _0x4aee41) {
  const _0x30699e = _0x50f0,
    _0x470279 = _0x26bca9();
  while (!![]) {
    try {
      const _0x2c0e37 =
        (parseInt(_0x30699e(0x130)) / 0x1) *
          (-parseInt(_0x30699e(0x139)) / 0x2) +
        -parseInt(_0x30699e(0x127)) / 0x3 +
        (-parseInt(_0x30699e(0x134)) / 0x4) *
          (-parseInt(_0x30699e(0x123)) / 0x5) +
        -parseInt(_0x30699e(0x116)) / 0x6 +
        (parseInt(_0x30699e(0x13a)) / 0x7) *
          (parseInt(_0x30699e(0x119)) / 0x8) +
        (-parseInt(_0x30699e(0x118)) / 0x9) *
          (-parseInt(_0x30699e(0x12f)) / 0xa) +
        parseInt(_0x30699e(0x12e)) / 0xb;
      if (_0x2c0e37 === _0x4aee41) break;
      else _0x470279["push"](_0x470279["shift"]());
    } catch (_0x3d98f2) {
      _0x470279["push"](_0x470279["shift"]());
    }
  }
})(_0x3eaf, 0xeca87);
const catchAsyncErrors = require(_0x588f60(0x135)),
  dotenv = require(_0x588f60(0x12d));
dotenv[_0x588f60(0x12b)]({ path: _0x588f60(0x121) });
function _0x50f0(_0x27ee5e, _0x4a8588) {
  const _0x3eaf83 = _0x3eaf();
  return (
    (_0x50f0 = function (_0x50f0ed, _0x8ff535) {
      _0x50f0ed = _0x50f0ed - 0x116;
      let _0x292dc0 = _0x3eaf83[_0x50f0ed];
      return _0x292dc0;
    }),
    _0x50f0(_0x27ee5e, _0x4a8588)
  );
}
const stripe = require(_0x588f60(0x11f))(process["env"][_0x588f60(0x12c)]);
console[_0x588f60(0x13b)]("KEY", process["env"]["STRIPE_SECRET_KEY"]),
  (exports[_0x588f60(0x138)] = catchAsyncErrors(
    async (_0x57f9d5, _0x55d4c9, _0x47b75c) => {
      const _0x522a92 = _0x588f60;
      console["log"](_0x57f9d5[_0x522a92(0x11a)]);
      const _0x17f08d = await stripe["checkout"][_0x522a92(0x126)]["create"]({
        customer_email: _0x57f9d5[_0x522a92(0x125)]["email"],
        phone_number_collection: { enabled: !![] },
        line_items: _0x57f9d5[_0x522a92(0x11a)][_0x522a92(0x129)][
          _0x522a92(0x137)
        ]((_0x2b8477) => ({
          price_data: {
            currency: _0x522a92(0x133),
            product_data: {
              name: _0x2b8477[_0x522a92(0x11b)]["name"],
              images: [
                _0x2b8477[_0x522a92(0x11b)][_0x522a92(0x122)][0x0][
                  _0x522a92(0x124)
                ],
              ],
            },
            unit_amount: _0x2b8477[_0x522a92(0x11b)]["price"] * 0x64,
          },
          quantity: _0x2b8477["quantity"],
        })),
        mode: "payment",
        shipping_address_collection: { allowed_countries: ["US", "IN"] },
        shipping_options: [
          {
            shipping_rate_data: {
              display_name: _0x522a92(0x12a),
              type: _0x522a92(0x120),
              fixed_amount: { amount: 0x157c, currency: "inr" },
              delivery_estimate: {
                minimum: { unit: _0x522a92(0x136), value: 0x1 },
                maximum: { unit: _0x522a92(0x136), value: 0x3 },
              },
            },
          },
        ],
        success_url:
          process[_0x522a92(0x11e)]["FRONTEND_URL"] + _0x522a92(0x128),
        cancel_url:
          process[_0x522a92(0x11e)][_0x522a92(0x131)] + _0x522a92(0x132),
      });
      _0x55d4c9["status"](0xc8)[_0x522a92(0x117)]({ url: _0x17f08d["url"] });
    }
  )),
  (exports[_0x588f60(0x13c)] = catchAsyncErrors(
    async (_0x97ee0e, _0x19506e, _0x5d24e0) => {
      const _0x4ca17b = _0x588f60;
      _0x19506e[_0x4ca17b(0x11c)](0xc8)["json"]({
        stripeApiKey: process[_0x4ca17b(0x11e)][_0x4ca17b(0x11d)],
      });
    }
  ));
