import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // MongoDB connection string
    const connectionString = process.env.MONGO_URL
    // Connect to the MongoDB database
    await mongoose.connect(connectionString!);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Handle connection error
  }
};

export default connectDB;

