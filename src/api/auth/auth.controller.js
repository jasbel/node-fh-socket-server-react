const create = (req, res) => {
  res.json({ ok: true, user: "ABC" });
}

const login = (req, res) => {
  const data = req.body;

  res.json({ ok: true, msg: "login", data});
}

const renew = (req, res) => {
  res.json({ ok: true, msg: "renew" });
}

module.exports = {
  create,
  login,
  renew,
}