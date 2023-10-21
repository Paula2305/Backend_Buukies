import {Router} from "express"
import {createBook, deleteBook, getBook, updateBook} from "../controllers/book.controller.js"

const router = Router();

router.post("/books/", createBook);
router.get("/books/", getBook);
router.delete("/books/:id", deleteBook);
router.put("/books/:id", updateBook);

export default router;
