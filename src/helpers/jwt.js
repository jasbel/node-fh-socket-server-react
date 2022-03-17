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

module.exports = {
  generateJWT,
};
