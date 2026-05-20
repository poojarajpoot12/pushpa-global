import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  mobileno: String,
  role: String
}, { timestamps: true });

export default mongoose.model("Career", careerSchema);