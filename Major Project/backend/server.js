import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./src/config/Db.js";
import cors from "cors";
import userRoutes from "./src/routes/UserRoutes.js";
import incomeRoutes from "./src/routes/incomeRoutes.js";
import taxRoutes from "./src/routes/taxRoutes.js";

const app = express();

dotenv.config();

dbConnection();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("./public/uploads"));

app.use("/api", userRoutes);
app.use("/api", incomeRoutes);
app.use("/api", taxRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
