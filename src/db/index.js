import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// DB is in another continent

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log("MongoDB connected !!  ", connectInstance.connection.host);
  } catch (err) {
    console.log("MONGODB CONNECTION ERROR", err);
    process.exit(1);
  }
};

export default connectDB;
