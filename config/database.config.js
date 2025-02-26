import mongoose from "mongoose";
import { DB_URI } from "./env.config.js";

if (!DB_URI) {
  throw new Error("Please define the DB_URI environment variable");
}

const startConnection = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

export default startConnection;
