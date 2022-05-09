const UsersModel = require("../user/Users.model");
const Message = require("../message/message.model");

const changeConnect = async (uid, isOnline) => {
  const user = await UsersModel.findById(uid);
  user.online = isOnline;

  await user.save();

  return user;
};

const userConnect = async (uid) => {
  return await changeConnect(uid, true);
};

const userDisconnect = async (uid) => {
  return await changeConnect(uid, false);
};

const getUsers = async () => {
  const users = await UsersModel.find().sort("-online");

  return users;
};

const saveMessage = async (payload) => {
  try {
    const message = new Message(payload);
    await message.save();

    return message;
  } catch (error) {
    console.log({ error });
    return false;
  }
};

module.exports = {
  userConnect,
  userDisconnect,
  getUsers,
  saveMessage
};
