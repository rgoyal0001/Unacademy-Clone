const express = require('express');
const courseRouter = express.Router();
const {getAllCourse, createCourse} = require("../handlers/course");

courseRouter.get("/courses" , getAllCourse);
courseRouter.post("/course" , createCourse);


module.exports = {
      courseRouter
}