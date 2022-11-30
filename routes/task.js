const router=require('express').Router()
const bodyParser=require("body-parser")
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))
const taskModel= require("../model/Task")
router.get("/tasks",async(req,res)=>{
    try {
        const tasks=await taskModel.find()
        res.status(200).json({
            tasks
        })
    } catch (err) {
        res.json({
            message:err.message
        })
    }
    
})
router.get("/tasks/:id",async(req,res)=>{
    try {
        const tasks=await taskModel.findOne({_id:req.params.id})
        res.status(200).json({
            tasks
        })
    } catch (err) {
        res.status(404).json({
            message:"There is no task at that id"
        })
    }
    
})
router.post("/tasks",async(req,res)=>{
    try {
        const tasks=await taskModel.create(req.body)
        const id=tasks.id
        res.status(201).json({
            id
        }) 
    } catch (err) {
        res.status(404).json({
            message:err.message
        })
    }
    
})
router.delete("/tasks/:id",async(req,res)=>{
    try {
        const tasks=await taskModel.deleteOne({_id:req.params.id})
        res.status(204).json({
            
        })
    } catch (err) {
        res.status(404).json({
            message:err.message
        })
    }
})
router.put("/tasks/:id",async(req,res)=>{
    try {
        const tasks=await taskModel.updateOne({_id:req.params.id},req.body)
        res.status(204).json({
            tasks
        })
    } catch (err) {
        res.status(404).json({
            err:"There is no task at that id"
        })
    }
})
router.delete("/tasks",async(req,res)=>{
    const tasks=await taskModel.deleteMany(req.body._id)
    console.log(tasks);
    res.status(204).json({
        
    })
})
module.exports=router