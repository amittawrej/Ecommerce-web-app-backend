import express from "express";

import { adminOnly } from "../middlerwares/auth.js";
import {
  getBarCharts,
  getDashboardStats,
  getLineCharts,
  getPieCharts,
} from "../controllers/adminDashboard.js";

const app = express.Router();

//route /api/v1/dashboard/new

app.get("/stats", adminOnly, getDashboardStats);

app.get("/pie", adminOnly, getPieCharts);

app.get("/bar", adminOnly, getBarCharts);

app.get("/line", adminOnly, getLineCharts);

export default app;
