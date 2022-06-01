import UsersModel from "../user/Users.model";
import Message from "../message/message.model";

const changeConnect = async (uid, isOnline) => {
  const user = await UsersModel.findById(uid);
  user.online = isOnline;

  await user.save();

  return user;
};

export const userConnect = async (uid) => {
  return await changeConnect(uid, true);
};

export const userDisconnect = async (uid) => {
  return await changeConnect(uid, false);
};

export const getUsers = async () => {
  const users = await UsersModel.find().sort("-online");

  return users;
};

export const saveMessage = async (payload) => {
  try {
    const message = new Message(payload);
    await message.save();

    return message;
  } catch (error) {
    console.log({ error });
    return false;
  }
};

