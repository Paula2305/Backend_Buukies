import express from 'express';
import bookRoutes from "./routes/books.routes.js"
import userRouter from "./routes/user.routes.js"
import './utils/mongooseDB.js';

const app = express();
const PORT = process.env.PORT || 4045;


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(bookRoutes);
app.use(userRouter);

app.listen(PORT, () => {
})


