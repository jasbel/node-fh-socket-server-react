const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, uniquie: true },
  password: { type: String, required: true },
  online: { type: Boolean, default: false },
});

// Retorno sin password uid=_id
UserSchema.method("toJSON", function () {
  const { __v, _id, password, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model("User", UserSchema);
