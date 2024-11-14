import { StatusCodes } from "http-status-codes";
import { ResponseMessage } from "../utils/ResponseMessage.js";
import Tax from "../models/taxSchema.js";

export const addEditTax = async (req, res) => {
  try {
    const {
      _id,
      deduction80C,
      disabledDependent,
      disabilityNature,
      dependentType,
      panOfDependent,
      aadhaarOfDependent,
      form10IADetails,
      form10IAFilingDate,
      form10IAAckNo,
      udidNo,
      insuranceSelf,
      insuranceParents,
      donation,
      cashContribution,
      nonCashContribution,
      contributionDate,
      transactionRefNo,
      ifscCode,
    } = req.body;

    const taxFields = {
      deduction80C,
      disabledDependent,
      disabilityNature,
      dependentType,
      panOfDependent,
      aadhaarOfDependent,
      form10IADetails,
      form10IAFilingDate,
      form10IAAckNo,
      udidNo,
      insuranceSelf,
      insuranceParents,
      donation,
      cashContribution,
      nonCashContribution,
      contributionDate,
      transactionRefNo,
      ifscCode,
    };

    let tax;

    if (_id) {
      tax = await Tax.findByIdAndUpdate(_id, taxFields, { new: true });

      if (!tax) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ResponseMessage.BAD_REQUEST,
          data: [],
          status: StatusCodes.BAD_REQUEST,
        });
      }

      return res.status(StatusCodes.OK).json({
        message: "Tax updated successfully",
        data: tax,
        status: StatusCodes.OK,
      });
    } else {
      tax = await Tax.create(taxFields);

      return res.status(StatusCodes.CREATED).json({
        message: "Tax created successfully",
        data: tax,
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

export const getAllTax = async (req, res) => {
  try {
    const getTax = await Tax.find({ isDeleted: false }).sort({ createdAt: -1 });
    if (getTax.length == 0) {
      return res.status(400).json({
        message: ResponseMessage.DATA_NOT_FOUND,
        data: [],
        status: StatusCodes.BAD_REQUEST,
      });
    }

    return res.status(200).json({
      status: StatusCodes.OK,
      message: ResponseMessage.DATA_FOUND,
      data: getTax,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: ResponseMessage.INTERNAL_SERVER_ERROR,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      data: [],
    });
  }
};

export const deleteTax = async (req, res) => {
  try {
    const _id = req.query.id;
    if (!_id) {
      return res.status(400).json({
        message: ResponseMessage.BAD_REQUEST,
        data: [],
        status: StatusCodes.BAD_REQUEST,
      });
    }
    const findTax = await Tax.findByIdAndUpdate(
      _id,
      { isDeleted: true },
      { new: true }
    );
    if (findTax) {
      return res.status(200).json({
        message: "Tax deleted successfully",
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
