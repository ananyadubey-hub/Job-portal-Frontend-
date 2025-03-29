const mongoose=require("mongoose");
let jobSeekerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    img:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:Number,required:true},
    password:{type:String,required:true},
    qualification:{type:String,required:true},
    location:{type:String,required:true},
    jobPreference:{type:String,required:true},
    resume:{type:String,required:true},
    isBlock:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
})

const jobSeekerTable=mongoose.model("seeker",jobSeekerSchema);
module.exports={jobSeekerTable};