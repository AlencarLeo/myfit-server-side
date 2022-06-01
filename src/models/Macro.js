import mongoose from "mongoose";

const macroSchema = mongoose.Schema(
  {
    macro:{
      carb:{
        progress: Number,
        g: Number,
        meta: Number
      },
      protein:{
        progress: Number,
        g: Number,
        meta: Number
      },
      fat:{
        progress: Number,
        g: Number,
        meta: Number
      }
    },
    userId: {  // permite criação desse dado mantendo a privacidade entre usuários
      type: String,
      required: true
    }
  }
)

export default mongoose.model("Macro", macroSchema);