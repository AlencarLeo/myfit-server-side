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
    }
  }
)

export default mongoose.model('Water', waterSchema);