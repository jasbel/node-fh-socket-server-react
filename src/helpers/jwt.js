const jsonwebtoken = require("jsonwebtoken");

const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jsonwebtoken.sign(
      payload,
      process.env.JWT_KEY,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          console.log({ err });
          reject("No se pudo genera el JWT");
        } else {
          resolve(token)
        }
      }
    );
  });
};

const comprobarJWT = (token = '') => {
  try {
    const {uid} = jsonwebtoken.verify(token, process.env.JWT_KEY)
    return [true, uid]
  } catch (error) {
    return [false, null]
  }
}

module.exports = {
  generateJWT,
  comprobarJWT,
};
