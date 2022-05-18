import User from '../models/User';
import Water from '../models/Water';

class WatersController{
  async index(req, res){
    try{

      const { user_id } = req.params;

      const user = await User.findById(user_id);

      if(!user){
        return res.status(404).json();
      }

      const waterInfo = await Water.findOne({
        userId: user_id
      })
      
      return res.json(waterInfo);
    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res){
    try{

      const { user_id } = req.params;
      const { progress, ml, meta } = req.body;

      const user = await User.findById(user_id);

      if(!user){
        return res.status(404).json();
      }

      const waterInfo = await Water.findOne({
        userId: user_id
      })

      if(waterInfo){
        return res.status(422).json();
      }
      
      const newWaterInfo = await Water.create({
        progress,
        ml,
        meta,
        userId: user_id
      })

      return res.json(newWaterInfo);
    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async update(req, res){
    try{

      const { user_id, id } = req.params;
      const { progress, ml, meta } = req.body;
      const user = await User.findById(user_id);
      
      if(!user){
        return res.status(404).json();
      }

      const waterInfo = await Water.findOne({
        userId: user_id,
        id
      })
      
      if(!waterInfo){
        return res.status(404).json();
      }

      await waterInfo.updateOne({
        progress,
        ml,
        meta
      })

      return res.status(200).json(waterInfo);
    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." })
    }
  }
}

export default new WatersController();