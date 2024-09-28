import express from "express";

import { adminOnly } from "../middlerwares/auth.js";
import { allCoupon, applyDiscount, createPaymentIntent, deleteCoupon, newCoupon } from "../controllers/payment.js";

const app=express.Router();

// /api/v1/payment/create

app.post("/create",createPaymentIntent);


// /api/v1/payment/coupon/new
app.get("/discount",applyDiscount);

app.post("/coupon/new",adminOnly,newCoupon);

// coupon/all
app.get("/coupon/all",adminOnly,allCoupon);
app.delete("/coupon/:id",adminOnly,deleteCoupon);




export default app;