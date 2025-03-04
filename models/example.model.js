import mongoose from "mongoose";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.config.js";

const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

exampleSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id, email: this.email },
    JWT_SECRET, // Use a strong secret key, preferably from environment variables
    { expiresIn: JWT_EXPIRES_IN } // Token expires in any number of seconds
  );
}; // This is a method to generate a token for the user

const Example = mongoose.model("Example", exampleSchema);

export default Example;
