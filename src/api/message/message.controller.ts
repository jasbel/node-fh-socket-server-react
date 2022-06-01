import messageModel from "./message.model";

export const getChat = async (req, res) => {
  try {
    const id = req.uid;
    console.log({id})
    const msgFrom = req.params.from;
    console.log({reqparam: JSON.stringify(req.params)})

    const last30Msgs = await messageModel
      .find({
        $or: [
          { from: id, to: msgFrom },
          { from: msgFrom, to: id },
        ],
      })
      .sort({ createdAt: "asc" })
      .limit(30);

    res.json({ ok: !0, msg: last30Msgs });
  } catch (error) {
    res.status(500).json({ msg: "error", error });
  }
};
