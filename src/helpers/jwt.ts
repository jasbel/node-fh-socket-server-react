import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';

export const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jsonwebtoken.sign(
      payload,
      process.env.JWT_KEY!,
      {
        expiresIn: '24h',
      },
      (err, token) => {
        if (err) {
          console.log({ err });
          reject('No se pudo genera el JWT');
        } else {
          resolve(token);
        }
      }
    );
  });
};

export const comprobarJWT = (token = '') => {
  try {
    const { uid } = jsonwebtoken.verify(token, process.env.JWT_KEY!) as JwtPayload;
    return [true, uid];
  } catch (error) {
    return [false, null];
  }
};
