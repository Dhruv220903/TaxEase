import express from "express";
import {
  addEditUser,
  deleteAccount,
  getAllUsers,
  getSingleUserById,
} from "../controller/UserController.js";

const userRoutes = express.Router();

userRoutes.get("/get-all-users", getAllUsers);
userRoutes.get("/get-single-user/:_id", getSingleUserById);
userRoutes.post("/add-edit-profile", addEditUser);
userRoutes.get("/delete-user", deleteAccount);

export default userRoutes;
