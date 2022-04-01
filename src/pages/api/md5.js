const md5 = require("md5");

export default function md5Gen(req, res) {
  const hash = md5(new Date());
  return res.status(200).json({ hash: hash });
}
