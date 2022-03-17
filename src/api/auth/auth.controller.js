const bcryptjs = require("bcryptjs");
const { response } = require("express");
const { generateJWT } = require("../../helpers/jwt");
const UsersModel = require("../user/Users.model");

/* eslint-disable no-console */
const createUser = async (req, res = response) => {
  try {
    const { email, password } = req.body;

    const existEmail = await UsersModel.findOne({ email });
    if (existEmail)
      return res.status(400).json({ ok: false, msg: "El correo ya existe" });

    const user = new UsersModel(req.body);

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    const token = await generateJWT(user._id);

    res.json({ user, token });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ ok: false, msg: "Hable con el admin", error });
  }
};

const login = async (req, res = response) => {
  try {
    const { email, password } = req.body;

    const userByEmail = await UsersModel.findOne({ email });
    if (!userByEmail)
      return res.status(404).json({ ok: !!0, msg: "email no encontrado" });

    const validPassword = bcryptjs.compareSync(password, userByEmail.password);
    if (!validPassword)
      return res.status(400).json({ ok: !!0, msg: "Password no es correcto" });
    
    const token = await generateJWT(userByEmail.id);

    res.json({ok: !!1, user: userByEmail, token})

  } catch (error) {
    console.log({ error });
    res.status(500).json({ ok: !!0, msg: "Call to admin" });
  }
};

const renew = async (req, res = response) => {
  const {uid} = req;

  const token = await generateJWT(uid)

  const user = await UsersModel.findById(uid)


  res.json({ ok: true, token, user});
};

module.exports = {
  createUser,
  login,
  renew,
};
