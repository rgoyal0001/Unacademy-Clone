let res = require('dotenv').config()
 console.log(res)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const {courseRouter} = require("./routes/course")
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(courseRouter);


async function connectDatabase(){

    try{

      let res = await mongoose.connect(process.env.DBURL)
      console.log("Connected")

    }catch(err){
       console.log("not connected")
    }
}



function logger(req , res , next){
    console.log(new Date() , req.method , req.path);

    next();
}

const PORT = process.env.PORT || 8080

connectDatabase().then(() => {
    app.listen(8080 , () => {
        console.log(`server is listening at ${PORT}`)
    })
})
