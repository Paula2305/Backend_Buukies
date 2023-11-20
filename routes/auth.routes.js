import {Router} from "express";
import {login, signUp} from "../controllers/auth.controller.js";

const router = Router();

router.post('/auth/signup', signUp);
router.post('/auth/login', login);

export default router;
