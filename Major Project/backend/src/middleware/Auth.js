import jwt from "jsonwebtoken";
import { ResponseMessage } from "../utils/ResponseMessage.js";
import { StatusCodes } from "http-status-codes";
export const verifyToken = async (req, res, next) => {
  const token = req.headers["auth"];
  if (!token) {
    return res.status(401).json({
      message: ResponseMessage.TOKEN_REQUIRED,
      status: StatusCodes.BAD_REQUEST,
      data: [],
    });
  }
  try {
    const decodeToken = await jwt.verify(token, process.env.SECRET_KEY);
    if (decodeToken) {
      req.auth = decodeToken;
    }
  } catch (error) {
    return res.status(401).json({
      message: ResponseMessage.NOT_AUTHORIZE,
    });
  }
  return next();
};
