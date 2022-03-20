const messageModel = require("./message.model");

const getChat = async (req, res) => {
  try {
    const id = req.uid;
    const msgFrom = req.param.msgFrom;

    const last30Msgs = await messageModel
      .find({
        $or: [
          { from: id, to: msgFrom },
          { from: msgFrom, to: id },
        ],
      })
      .sort({ createdAt: "desc" })
      .limit(30);

    res.json({ ok: !0, msg: last30Msgs });
  } catch (error) {
    res.status(500).json({ msg: "error", error });
  }
};

module.exports = {
  getChat,
};
