import { model, Schema } from "mongoose";

/** params: from, to, message */
const MessageSchema = new Schema(
  {
    from: { type: Schema.Types.ObjectId, ref: "User", required: true },
    to: { type: Schema.Types.ObjectId, ref: "User", required: true },
    msg: { type: String, required: true },
  },
  { timestamps: true }
);

// Retorno sin password uid=_id
MessageSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

export default model("Message", MessageSchema);
