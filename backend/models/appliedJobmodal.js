const mongoose=require('mongoose');
const  appliedJobsSchema=new mongoose.Schema({
    jobId:{type:String},
    companyId:{type:String},
    userId:{type:String},
    status:{type:String,default:'1'},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
})

const appliedJobTable=mongoose.model("appliedJobs",appliedJobsSchema);
module.exports={appliedJobTable};