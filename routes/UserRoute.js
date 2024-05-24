import express from "express"
import { create, fetch, update } from "../controller/UserController.js";

const route=express.Router();

route.get("/getallusers",fetch)
route.post("/create",create)
route.put("/update/:id",update)

export default route;