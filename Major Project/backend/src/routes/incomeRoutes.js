import express from "express";
import {
  addEditIncome,
  deleteIncome,
  getAllIncome,
} from "../controller/IncomeController.js";

const incomeRoutes = express.Router();

incomeRoutes.get("/get-all-income", getAllIncome);
incomeRoutes.post("/add-edit-income", addEditIncome);
incomeRoutes.get("/delete-income", deleteIncome);

export default incomeRoutes;
