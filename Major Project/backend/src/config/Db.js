import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export const dbConnection = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log("DB error :", err);
    });
};
