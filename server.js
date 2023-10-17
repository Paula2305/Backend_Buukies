import express from 'express';
const app = express();
const db = './db.js';

const PORT = process.env.PORT || 4045;

let BookController = './book/BookController.js';
app.use('/books', BookController);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el http://localhost:${PORT}`);
})



