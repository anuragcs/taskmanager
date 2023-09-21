const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true,'MUST PROVIDE NAME'],
            trim:true,
            maxlength:[30,'cannot be more than 30'],
        },
        completed:{
            type :Boolean ,
             default : false,
        },
})

module.exports = mongoose.model('Task',TaskSchema)