var express=require("express")
var approuter=express.Router()

approuter.get('/',function(req,res){
    res.send("hello world")
})

module.exports=approuter