import express from "express";
import { deleteUser, getAllUsers, getUser, newUser } from "../controllers/user.js";
import { adminOnly } from "../middlerwares/auth.js";

const app=express.Router();

//route /api/v1/user/new
app.post("/new",newUser);   

// /api/v1/user/all
app.get("/all",adminOnly,getAllUsers)

// /api/v1/user/:id

app.route("/:id").get(getUser).delete(adminOnly,deleteUser);

export default app;