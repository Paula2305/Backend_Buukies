import express from 'express';
import bookRoutes from "./routes/books.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import './utils/mongooseDB.js';
import cookieSession from 'cookie-session';

const app = express();
const PORT = process.env.PORT || 4045;


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(bookRoutes);
app.use(userRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
})


