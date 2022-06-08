import mongoose from "mongoose";

const foodSchema = mongoose.Schema(
  {
    name: String,
    qntd: Number,
    info:{
      carb: Number,
      protein: Number,
      fat: Number,
      kcal: Number
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model("Food", foodSchema);