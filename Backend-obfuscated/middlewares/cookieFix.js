// Intercept res.cookie to add sameSite and secure flags for cross-domain cookies
const fixCookies = (req, res, next) => {
  const originalCookie = res.cookie.bind(res);
  res.cookie = (name, value, options = {}) => {
    if (name === "jwt") {
      options.sameSite = "none";
      options.secure = true;
    }
    return originalCookie(name, value, options);
  };
  next();
};

module.exports = fixCookies;
