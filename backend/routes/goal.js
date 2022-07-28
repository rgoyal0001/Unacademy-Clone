const express = require('express');
const goalRouter = express.Router();
const {getGoalByTitle, createGoal} = require("../handlers/goal");

goalRouter.get("/goal/:title" , getGoalByTitle);
goalRouter.post("/goal" , createGoal);


module.exports = {
      goalRouter
}