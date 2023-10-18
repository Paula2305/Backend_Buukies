import express from 'express';
import indexRoutes from "./routes/books.routes.js"
import './utils/mongooseDB.js';

const app = express();
const PORT = process.env.PORT || 4045;


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(indexRoutes);

app.listen(PORT, () => {
})


