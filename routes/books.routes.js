import {Router} from "express"
import {createBook, getBook} from "../controllers/book.controller.js"

const router = Router();

router.post("/books/", createBook);
router.get("/books/", getBook);

export default router;
