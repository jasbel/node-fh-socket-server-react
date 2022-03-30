const UsersModel = require("../user/Users.model");

const changeConnect = async (uid, isOnline) => {
  const user = await UsersModel.findById(uid);
  user.online = isOnline;

  await user.save();

  return user;
}

const userConnect = async (uid) => {
  return await changeConnect(uid, true);
};

const userDisconnect = async (uid) => {
  // const user = await UsersModel.findById(uid);
  // user.online = false;

  // await user.save();

  // return user;
  return await changeConnect(uid, false);
};

module.exports = {
  userConnect,
  userDisconnect,
};
