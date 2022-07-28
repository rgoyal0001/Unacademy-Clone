const {userModel} = require("../database/user");
const {SECRET} = require("../constants")
const jwt = require('jsonwebtoken');
  console.log(userModel)

async function registerUser(req , res , next){
    console.log(req.body);
    const {user} = req.body;
    let existingUser = await userModel.findOne({ $or : [{
          email : user.email} , {mobile : user.mobile}]})

     try {  

    if(existingUser){
          return res.status(404).send({
              error : "User already registered"     
            })
    }

   let userDoc =  await userModel.create(user);
    
       res.status(201).send({
           message : "user succesfully registered",
           user : userDoc
      })

    }catch(err){
          return res.status(404).send({
               error : "Something Went Wrong"
          })
    }
} 


async function loginUser(req , res , next){

      try { 
      const {email , password , mobile} = req.body;

      let user = await userModel.findOne({ $or : [{email: email} , {mobile : mobile}]});
        console.log(user);

      if(user){
          if(user.password === password){
                 // generate a secret token
                // encrypt user object {id, email, name}
                let encryptedToken = jwt.sign({
                      id : user._id,
                      email : user.email,
                      name : user.name,
                      mobile : user.mobile
                } , SECRET)

                  console.log(encryptedToken);

                return res.send({
                        token: encryptedToken
                })
          }else {
               return res.status({ 
                   error : "Password does not match"
               })
          }
      }else {
           return res.status(404).send({
               error : "user Not found"
           })
      }

   }catch(err){
         return res.status(404).send({
              error : "something went wrong"      
              })
   }
}

async function getLoggedInUser(req , res , next){
      const {context} = req;
      if(!context.user){
          res.status(404).send({
              error : "Token not provided"
          })
      }else {
           res.status(200).send({
               data : context.user
           })
      }

}


async function getUser(req , res , next){
      try{
         const {id} = req.params;
         console.log(id);

        let user = await userModel.findById(id);

        console.log(user)
        if(!user){
             return res.status(404).send({
                  error : "user not found"
             })
        }

        return res.status(201).send({
              user
        })

      }catch(err){
           res.status(404).send({
              error : "something went wrong"
           })
      }
}

module.exports = {
      registerUser, 
      loginUser,
      getLoggedInUser,
       getUser
}