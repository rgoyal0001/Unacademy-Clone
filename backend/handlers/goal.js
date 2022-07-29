const {goalModel} = require("../database/goal");

async function getGoalByTitle(req , res , next){
    try{
        const {title} = req.params;
        let goal = await goalModel.find({title : title});

        if(!goal){
            return res.status(404).send({
                 error : "goal not found"
            })
        }

        return res.status(201).send({
              message : "successful",
              goal
        })
         
    }catch(error){
       return res.status(404).send({
              error : "something went wrong"
        })
    }
}

async function createGoal(req , res , next){
     try{

        let goal = await goalModel.create(req.body);

        res.status(200).send({
              message : "Goal created successfully",
              goal
        })

        

     }catch(err){
          res.status(404).send({
              err : "something wrong"
          })
     }
}

module.exports = {
      getGoalByTitle,
      createGoal
}