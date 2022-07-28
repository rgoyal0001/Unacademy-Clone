const express = require('express');
const userRouter = express.Router();
const {registerUser , loginUser, getLoggedInUser, getUser} = require("../handlers/user");
const {auth} = require("./middlewares/auth");

userRouter.get("/getUser/:id" , getUser);
userRouter.post("/register" , registerUser);
userRouter.post("/login" , loginUser);
userRouter.get("/getLoggedIn" , auth , getLoggedInUser);


module.exports = {
      userRouter
}