import express from 'express';
import bookRoutes from "./routes/books.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import './utils/mongooseDB.js';
import cors from "cors";
import cookieSession from 'cookie-session';

const app = express();
const PORT = process.env.PORT || 8500;

const allowedDomains = ["http://localhost:63342", "http://127.0.0.1:5500"]
const corsOptions = {
    origin: allowedDomains,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(bookRoutes);
app.use(userRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
})


