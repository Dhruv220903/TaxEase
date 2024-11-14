import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema(
  {
    salaryIncome: {
      type: Number,
    },
    interestIncome: {
      type: Number,
      default: 0,
    },
    gainsFromStocks: {
      type: Number,
      default: 0,
    },
    housePropertyIncome: {
      type: Number,
      default: 0,
    },
    dividendIncome: {
      type: Number,
      default: 0,
    },
    professionalIncome: {
      type: Number,
      default: 0,
    },
    cryptoIncome: {
      type: Number,
      default: 0,
    },
    exemptIncome: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Income = mongoose.model("Income", incomeSchema);
export default Income;
