import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export const generateJwt = async ({ payload, expirationTime }) => {
  return await jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: expirationTime,
  });
};
