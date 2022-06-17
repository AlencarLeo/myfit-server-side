import User from "../models/User";
import Macro from "../models/Macro";

class MacrosController{
  async index(req, res){
    try{
      const { user_id } = req.params;

      const user = await User.findById(user_id)
    
      if(!user){
        return res.status(404).json();
      }

      const macroInfo = await Macro.findOne({
        userId: user_id
      })

      return res.json(macroInfo);
    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res){
    try{
      const { user_id } = req.params;
      const {  
        progressCarb,
        gCarb,
        metaCarb,
        progressProtein,
        gProtein,
        metaProtein,
        progressFat,
        gFat,
        metaFat
      } = req.body;

      const user = await User.findById(user_id);

      if(!user){
        return res.status(404).json();
      }

      const macroInfo = await Macro.findOne({
        userId: user_id
      })

      if(macroInfo){
        return res.status(422).json();
      }

      const newMacroInfo = await Macro.create({
        macro:{
          carb:{
            progress: progressCarb,
            g: gCarb,
            meta: metaCarb
          },
          protein:{
            progress: progressProtein,
            g: gProtein,
            meta: metaProtein
          },
          fat:{
            progress: progressFat,
            g: gFat,
            meta: metaFat
          }
        },
        userId: user_id
      })

      return res.json(newMacroInfo);
    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async update(req, res){
    try{
      const { user_id, id } = req.params;
      const {  
        progressCarb,
        gCarb,
        metaCarb,
        progressProtein,
        gProtein,
        metaProtein,
        progressFat,
        gFat,
        metaFat
      } = req.body;

      const user = User.findById(user_id)

      if(!user){
        return res.status(404).json();
      }

      const macroInfo = Macro.findOne({
        userId: user_id,
        id
      })

      if(!macroInfo){
        return res.status(404).json();
      }

      await macroInfo.updateOne({
        macro:{
          carb:{
            progress: progressCarb,
            g: gCarb,
            meta: metaCarb
          },
          protein:{
            progress: progressProtein,
            g: gProtein,
            meta: metaProtein
          },
          fat:{
            progress: progressFat,
            g: gFat,
            meta: metaFat
          }
        }
      })

      return res.status(200).json(macroInfo);
    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}

export default new MacrosController();