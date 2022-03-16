/**
 * path: ???
 */

const { Router } = require("express");
const { create: createLogin, login, renew: renewToken } = require("./auth.controller");

const router = Router();

router.post("/new", createLogin);
router.post("/", login);
router.get("/renew", renewToken);

module.exports = router;
