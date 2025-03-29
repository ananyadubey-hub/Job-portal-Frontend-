const mongoose=require("mongoose");
let jobPostSchema=new mongoose.Schema({
    companyId:{type:String},
    category:{type:String,required:true},
    jobTitle:{type:String},
    experience:{type:String},
    jobType:{type:String},
    vacancies:{type:String},
    jobLocation:{type:String},
    salary:{type:String},
    applyDate:{type:String},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
})

const jobPostTable=mongoose.model("jobPost",jobPostSchema);
module.exports={jobPostTable};



/*jobTitle: yup.string().required(),
    experience: yup.string().required(),
    jobType: yup.string().required(),
    vacancies: yup.string().required(),
    jobLocation: yup.string().required(),
    salary: yup.string().required(),
    applyDate: yup.string().required(),
    category: yup.string().required()*/