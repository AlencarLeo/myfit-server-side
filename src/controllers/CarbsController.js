import User from "../models/User";
import Carb from "../models/Carb";

class CarbsController{
  async index(req, res){
    try{
      const { user_id } = req.params;

      const user = await User.findById(user_id)
    
      if(!user){
        return res.status(404).json();
      }

      const carbInfo = await Carb.findOne({
        userId: user_id
      })

      return res.json(carbInfo);
    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res){
    try{
      const { user_id } = req.params;
      const { progress, g, meta } = req.body;

      const user = await User.findById(user_id);
    
      if(!user){
        return res.status(404).json();
      }

      const carbInfo = await Carb.findOne({
        userId: user_id
      })

      if(carbInfo){
        return res.status(422).json();
      }

      const newCarbInfo = await Carb.create({
        progress,
        g,
        meta,
        userId: user_id
      })

      return res.json(newCarbInfo);
    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async update(req, res){
    try{

      const { user_id, id } = req.params;
      const { progress, g, meta } = req.body;
      const user = await User.findById(user_id);
      
      if(!user){
        return res.status(404).json();
      }

      const carbInfo = await Carb.findOne({
        userId: user_id,
        id
      })
      
      if(!carbInfo){
        return res.status(404).json();
      }

      await carbInfo.updateOne({
        progress,
        ml,
        meta
      })

      return res.status(200).json(carbInfo);
    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." })
    }
  }
}

export default new CarbsController();