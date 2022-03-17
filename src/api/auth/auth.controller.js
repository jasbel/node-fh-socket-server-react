const { response } = require("express");
const UsersModel = require("../user/Users.model");

/* eslint-disable no-console */
const create = async (req, res = response) => {
  try {
    const { email, password } = req.body;

    const existEmail = await UsersModel.findOne({email})
    if(existEmail) return res.status(400).json({ok: false, msg: 'El correo ya existe'})

    // TODO: encript

    const user = new UsersModel(req.body);
    await user.save()

    res.json({ email, password, user});
  } catch (error) {
    console.log({ error });
    res.status(500).json({ ok: false, msg: "Hable con el admin", error});
  }
  res.json({ ok: true, user: "ABC" });
};

const login = (req, res = response) => {
  console.log({ req });

  res.json({ ok: true, msg: "login" });
};

const renew = (req, res = response) => {
  res.json({ ok: true, msg: "renew" });
};

module.exports = {
  create,
  login,
  renew,
};
