import mongoose from "mongoose";

const BASE_URL = process.env.MONGO_URI;

const connectToDb = async (res) => {
  mongoose.set("strictQuery", false);
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(BASE_URL);
  } catch (error) {
    console.log("error occurred !", error);
    res
      .status(500)
      .json({ status: "Failed", message: "can not connect to db!", error });
  }
};

export default connectToDb;
