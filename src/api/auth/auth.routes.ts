import { Router } from "express";

/** path: ??? */
import { check } from "express-validator";
import { validateFields } from "../../middlewares/validate-fields";
import { validateJWT } from "../../middlewares/validate-jwt";
import { createUser, login, renew as renewToken } from "./auth.controller";

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

export default router;
