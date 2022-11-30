const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    title:{
        type:String,required:true,
    },
    is_completed:{
        type:Boolean,default:Boolean
    }
    
},{timestamps:true})
const taskModel= new mongoose.model("Task",taskSchema)
module.exports=taskModel