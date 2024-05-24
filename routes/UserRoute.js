import express from "express"
import { create, fetch } from "../controller/UserController.js";

const route=express.Router();

route.get("/fetch",fetch)
route.post("/create",create)

export default route;