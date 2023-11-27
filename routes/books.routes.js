import {Router} from "express"
import {createBook, deleteBook, getAllBooks, getBookById, updateBook, getBooksByGenero, getBooksByFiltro} from "../controllers/book.controller.js"

const router = Router();

router.post("/books/", createBook);
router.get("/books/", getAllBooks);
router.get('/books/:id', getBookById);
router.delete("/books/:id", deleteBook);
router.put("/books/:id", updateBook);
router.get("/books/genero/:genero", getBooksByGenero);
router.get("/filtro", getBooksByFiltro);

// /books/filtro?genero=romance&precio_minimo=1000&precio_maximo=2000

export default router;
