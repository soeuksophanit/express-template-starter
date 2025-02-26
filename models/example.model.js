import mongoose from "mongoose";

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

const Example = mongoose.model("Example", exampleSchema);

export default Example;
