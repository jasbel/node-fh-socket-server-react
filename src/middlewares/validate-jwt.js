const res = require("express/lib/response")
const jsonwebtoken = require("jsonwebtoken")

const validateJWT = (req, res, next) => {
  try {
    const token = req.header('x-token');
    console.log(token)

    if(!token) return res.status(401).json({ok: !1, msg: 'sin token'})

    const payload = jsonwebtoken.verify(token, process.env.JWT_KEY)
    req.uid = payload.uid
    next()
  } catch (error) {
    return res.status(401).json({ok: !1, msg: 'token invalido'})
  }
}

module.exports = {
  validateJWT
}