import mongoose from "mongoose";

(async () => {
    try {
        const db = await mongoose.connect("mongodb://localhost:27017/buukies");
        console.log("Db connected to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();