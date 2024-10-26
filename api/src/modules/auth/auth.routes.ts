// PACKAGES
import express from "express";

// LOCAL MODULES
import { validate } from "@/middleware/schema-validation";
import {
  handleLoginUser,
  handleLogoutUser,
  handleRegisterUser,
} from "@/modules/auth/auth.controllers";
import { LoginSchema, RegisterSchema } from "@/modules/auth/auth.schema";

const router = express.Router();

router.post("/auth/register", validate(RegisterSchema), handleRegisterUser);
router.post("/auth/login", validate(LoginSchema), handleLoginUser);
router.post("/auth/logout", handleLogoutUser);

export default router;
