import {Router} from "express";
import {login, signUp,logout} from "../controllers/auth.controller.js";

const router = Router();

router.post('/auth/signup', signUp);
router.post('/auth/login', login);
router.get('/auth/logout', logout);

export default router;
