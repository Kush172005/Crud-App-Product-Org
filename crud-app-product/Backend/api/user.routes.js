import express from "express";
import { display } from "../services/display.js";
import { Adduser } from "../services/AddUser.js";
import { Update } from "../services/Update.js";
import { Delete } from "../services/Delete.js";

const app1 = express.Router();

app1.use(express.json());

app1.post("/AddProduct", Adduser);
app1.get("/display", display);
app1.put("/update", Update);
app1.delete("/delete", Delete);

export { app1 };
