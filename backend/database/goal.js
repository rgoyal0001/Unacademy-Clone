const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    title : {
        type : String,
         required : true
    },
    youWillGet : [ { 
        title : String,
        text : String,
         logo : String
    } ],
        
    liteSubscription : [{
          title : String,
           text : String,
            logo : String
    }],
    freeClases : [{
          imageUrl : String,
          subject : String,
          language : String,
          text : String,
          time : String,
          name : String
    }],
    topEducators : [{
          imageUrl : String,
          name : String,
          text : String,
           watch : String,
           followers : [String]
    }],
    moreBatches : [{
        imageUrl : String,
        language : String,
        syllabus : String,
        text : String,
        time : String,
        class : String,
        name : [String]
    }],
    startingSoon : [{
          imageUrl : String,
          language : String,
          subject : String,
          chapter : String,
          time : String,
          lesson : String,
          name : String
    }],
    recentCourses : [{
         imageUrl : String,
        language : String,
        subject : String,
        chapter : String,
        time : String,
        lesson : String,
        name : String

    }],
    bestAllTime:[{
        imageUrl : String,
        language : String,
        subject : String,
        chapter : String,
        time : String,
        lesson : String,
        name : String

    }],
    comprehensive : [{
        subject : String,
        course : String,
        text : String,
        logo : String
    }],

},{
timeStamps : true
})

const goalModel = mongoose.model("goals" , goalSchema);

module.exports = {
      goalModel
}
