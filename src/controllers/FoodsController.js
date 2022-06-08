import Food from '../models/Food';

class FoodsController{
  async index(req, res){
    try{
      const foods = await Food.find();
      return res.json(foods);

    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." })
    }
  }

  async show(req, res){
    try{

      const { id } = req.params;
      const food = await Food.findById(id);
      
      if(!food){
        return res.status(404).json();
      }

      return res.json(food);

    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." })
    }
  }

  async create(req, res){
    try{
      const {  
        name,
        qntd,
        carb,
        protein,
        fat,
        kcal
      } = req.body;

      const food = await User.findOne({ name });

      if(food){
        return res.status(422).json({ message: `User ${food} already exists.` })
      }

      const newFood = await Food.create(
        {
          name,
          qntd,
          carb,
          protein,
          fat,
          kcal
        }
      );

      return res.status(201).json(newFood);

    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." })
    }
  }

  async update(req, res){
    try{

      const { id } = req.params;
      const {  
        name,
        qntd,
        carb,
        protein,
        fat,
        kcal
      } = req.body;

      const food = await Food.findById(id);

      if(!food){
        return res.status(404).json();
      }

      await food.updateOne({  
        name,
        qntd,
        carb,
        protein,
        fat,
        kcal
      });

      return res.status(200).json(food);

    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." })
    }
  }

  async destroy (req, res){
    try{

      const { id } = req.params;

      const food = await Food.findById(id);

      if(!food){
        return res.status(404).json();
      }

      await food.deleteOne();

      return res.status(200).json();

    }catch(err){
      console.error(err);
      return res.status(500).json({ error: "Internal server error." })
    }
  }
}

export default new FoodsController();