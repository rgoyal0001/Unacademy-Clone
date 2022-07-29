const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
        category : String,
        courses: [{
                logo_url : String,
                 title : String,
                 plan : String
        }]
},{
    timeStamps : true
})

const courseModel = mongoose.model("courses" , courseSchema);

module.exports = {
      courseModel
}