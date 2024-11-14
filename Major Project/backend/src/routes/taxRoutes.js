import express from "express";
import {
  addEditTax,
  deleteTax,
  getAllTax,
} from "../controller/taxController.js";

const taxRoutes = express.Router();

taxRoutes.get("/get-all-tax", getAllTax);
taxRoutes.post("/add-edit-tax", addEditTax);
taxRoutes.get("/delete-tax", deleteTax);

export default taxRoutes;
