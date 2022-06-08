import mongoose from "mongoose";

const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qntd: {
      type: String,
      required: true,
    },
    info:{
      carb: {
        type: String,
        required: true,
      },
      protein: {
        type: String,
        required: true,
      },
      fat: {
        type: String,
        required: true,
      },
      kcal: {
        type: String,
        required: true,
      },
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model("Food", foodSchema);