import mongoose from "mongoose";

const carbSchema = mongoose.Schema(
  {
    progress:{
      type: Number | NaN
    },
    g:{
      type: Number
    },
    meta:{
      type: Number
    },
    userId: {  // permite criação desse dado mantendo a privacidade entre usuários
      type: String,
      required: true
    }
  }
)

export default mongoose.model("Carb", carbSchema);;