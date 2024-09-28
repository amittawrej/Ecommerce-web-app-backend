import express from "express";
import { adminOnly } from "../middlerwares/auth.js";
import {
  allOrders,
  deleteOrder,
  getSingleOrder,
  myOrders,
  newOrder,
  processOrder,
} from "../controllers/order.js";

const app = express.Router();

//route /api/v1/order/new
app.post("/new", newOrder);
//myoder
app.get("/my", myOrders);

//all order admin
app.get("/all", adminOnly, allOrders);

app
  .route("/:id")
  .get(getSingleOrder)
  .put(adminOnly, processOrder)
  .delete(adminOnly, deleteOrder);

export default app;
