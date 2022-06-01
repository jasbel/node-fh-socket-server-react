// const res = require("express/lib/response")
import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';

export const validateJWT = (req, res, next) => {
  try {
    const token = req.header('x-token');
    console.log(token);

    if (!token) return res.status(401).json({ ok: !1, msg: 'sin token' });

    const payload = jsonwebtoken.verify(token, process.env.JWT_KEY!) as JwtPayload;
    req.uid = payload.uid;
    next();
  } catch (error) {
    return res.status(401).json({ ok: !1, msg: 'token invalido' });
  }
};
