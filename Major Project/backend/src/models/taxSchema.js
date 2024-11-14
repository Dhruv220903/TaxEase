import mongoose from "mongoose";

const taxSchema = new mongoose.Schema(
  {
    deduction80C: { type: Number },
    disabledDependent: { type: Boolean },
    disabilityNature: { type: String },
    dependentType: { type: String },
    panOfDependent: { type: String },
    aadhaarOfDependent: { type: String },
    form10IADetails: { type: String },
    form10IAFilingDate: { type: Date },
    form10IAAckNo: { type: String },
    udidNo: { type: String },
    insuranceSelf: { type: Number },
    insuranceParents: { type: Number },
    donation: { type: Number },
    cashContribution: { type: Number },
    nonCashContribution: { type: Number },
    contributionDate: { type: Date },
    transactionRefNo: { type: String },
    ifscCode: { type: String },
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

const Tax = mongoose.model("Tax", taxSchema);
export default Tax;
