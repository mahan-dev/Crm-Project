import { model, models, Schema } from "mongoose";

const CustomerSchema = new Schema({
  name: {
    type: String,
    minLength: 4,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 4,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  product: {
    type: Array,
    default: [],
  },
  date: Date,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Customer =
  models.secondCustomerSchema || model("secondCustomerSchema", CustomerSchema);
export default Customer;
