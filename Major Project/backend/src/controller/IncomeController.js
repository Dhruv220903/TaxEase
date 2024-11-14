import { StatusCodes } from "http-status-codes";
import { ResponseMessage } from "../utils/ResponseMessage.js";
import Income from "../models/IncomeSchema.js";

export const addEditIncome = async (req, res) => {
  try {
    const {
      _id,
      salaryIncome,
      interestIncome,
      gainsFromStocks,
      housePropertyIncome,
      dividendIncome,
      professionalIncome,
      cryptoIncome,
      exemptIncome,
    } = req.body;

    const incomeFields = {
      salaryIncome,
      interestIncome,
      gainsFromStocks,
      housePropertyIncome,
      dividendIncome,
      professionalIncome,
      cryptoIncome,
      exemptIncome,
    };

    let income;

    if (_id) {
      income = await Income.findByIdAndUpdate(_id, incomeFields, { new: true });

      if (!income) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ResponseMessage.BAD_REQUEST,
          data: [],
          status: StatusCodes.BAD_REQUEST,
        });
      }

      return res.status(StatusCodes.OK).json({
        message: "Income updated successfully",
        data: income,
        status: StatusCodes.OK,
      });
    } else {
      income = await Income.create(incomeFields);

      return res.status(StatusCodes.CREATED).json({
        message: "Income created successfully",
        data: income,
        status: StatusCodes.CREATED,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: ResponseMessage.INTERNAL_SERVER_ERROR,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      data: [],
    });
  }
};

export const getAllIncome = async (req, res) => {
  try {
    const getIncome = await Income.find({ isDeleted: false }).sort({
      createdAt: -1,
    });
    if (getIncome.length == 0) {
      return res.status(400).json({
        message: ResponseMessage.DATA_NOT_FOUND,
        data: [],
        status: StatusCodes.BAD_REQUEST,
      });
    }

    return res.status(200).json({
      status: StatusCodes.OK,
      message: ResponseMessage.DATA_FOUND,
      data: getIncome,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: ResponseMessage.INTERNAL_SERVER_ERROR,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      data: [],
    });
  }
};

export const deleteIncome = async (req, res) => {
  try {
    const _id = req.query.id;
    if (!_id) {
      return res.status(400).json({
        message: ResponseMessage.BAD_REQUEST,
        data: [],
        status: StatusCodes.BAD_REQUEST,
      });
    }
    const findIncome = await Income.findByIdAndUpdate(
      _id,
      { isDeleted: true },
      { new: true }
    );
    if (findIncome) {
      return res.status(200).json({
        message: "Income deleted successfully",
        status: StatusCodes.OK,
        data: [],
      });
    } else {
      return res.status(400).json({
        message: ResponseMessage.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: [],
      message: ResponseMessage.INTERNAL_SERVER_ERROR,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
