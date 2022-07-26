const {courseModel} = require("../database/course");


async function getAllCourse(req , res , next){
    try{

        let course = await courseModel.find({});

        return res.status(201).send({
              message : "successful",
              course
        })
         
    }catch(error){
       return res.status(404).send({
              error : "something went wrong"
        })
    }
}

async function createCourse(req , res , next){
     try{

        let data = await courseModel.create(req.body);

        res.status(200).send({
              message : "Course created successfully",
              course : data
        })

        

     }catch(err){
          res.status(404).send({
              err : "something wrong"
          })
     }
}

module.exports = {
      getAllCourse,
      createCourse
}