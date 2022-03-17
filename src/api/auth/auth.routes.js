/**
 * path: ???
 */

const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../../middlewares/validate-fields");
const { validateJWT } = require("../../middlewares/validate-jwt");
const { createUser, login, renew: renewToken } = require("./auth.controller");

const router = Router();

router.post(
  "/new",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "email is required").isEmail(),
    check("password", "password is required").not().isEmpty(),
    validateFields,
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required").not().isEmpty(),
    validateFields,
  ],
  login
);
router.get("/renew", [validateJWT], renewToken);

module.exports = router;
