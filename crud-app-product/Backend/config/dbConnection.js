import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const db = process.env.CONNECTION_STRING;

function DBconnection() {
    mongoose
        .connect(db)
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((error) => {
            console.error("Database connection failed:", error);
        });
}

export { DBconnection };
