import {Router} from "express"
import {createBook, deleteBook, getAllBooks, getBookById, updateBook} from "../controllers/book.controller.js"

const router = Router();

router.post("/books/", createBook);
router.get("/books/", getAllBooks);
router.get('/books/:id', getBookById);
router.delete("/books/:id", deleteBook);
router.put("/books/:id", updateBook);

export default router;
