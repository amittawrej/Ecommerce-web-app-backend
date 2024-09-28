import express from "express";
import {
  deleteProduct,
  getAdminProduct,
  getAllCategories,
  getAllProduct,
  getLatestProduct,
  getSingleProduct,
  newProduct,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middlerwares/multer.js";
import { adminOnly } from "../middlerwares/auth.js";

const app = express.Router();

app.post("/new", adminOnly, singleUpload, newProduct);

app.get("/all", getAllProduct);   //remainong to check


app.get("/latest", getLatestProduct);

app.get("/categories", getAllCategories);
app.get("/admin-products", adminOnly,getAdminProduct);

app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly,singleUpload,updateProduct)    //check once again
  .delete(adminOnly,deleteProduct);

export default app;
