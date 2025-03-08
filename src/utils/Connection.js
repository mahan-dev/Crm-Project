import mongoose from "mongoose";

const BASE_URL = process.env.MONGO_URI;

const connectToDb = async () => {
    mongoose.set('strictQuery', false)
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(BASE_URL);
  } catch (error) {
    console.log("error occurred !", error);
  }
};

export default connectToDb;