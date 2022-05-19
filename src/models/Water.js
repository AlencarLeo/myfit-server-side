import mongoose from "mongoose";

const waterSchema = new mongoose.Schema(
  {
    progress:{
      type: Number
    },
    ml:{
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

export default mongoose.model('Water', waterSchema);