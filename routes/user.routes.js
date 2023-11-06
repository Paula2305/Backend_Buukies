import {Router} from "express"
import { createUser,getAllUsers,getUserById, deleteUserById,updateUser } from "../controllers/user.controller.js";

const router = Router();

router.post('/user/', createUser);
router.get('/user/', getAllUsers);
router.get('/user/:id', getUserById);
router.delete('/user/:id',deleteUserById);
router.put('/user/:id', updateUser);

export default router;

