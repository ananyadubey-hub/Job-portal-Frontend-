const express=require("express");
const jobSeekerRoute=express.Router();
const { jobSeekerTable } =require('../models/jobSeekermodal');
const {jobPostTable}=require('../models/jobpost');
const { recruiterTable }=require('../models/recruitermodal');
const {appliedJobTable}=require('../models/appliedJobmodal');



jobSeekerRoute.post("/jobSeeker-register",async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const contact=req.body.contact;
    const password=req.body.password;
    const qualification=req.body.qualification;
    const location=req.body.location;
    const jobPreference=req.body.jobPreference;
    const resume=req.files.resume;
    resume.mv("uploads/"+resume.name,(err)=>{
        if(err){
            res.send(err);
        }
    })
    let img=req.files.img;
    img.mv("uploads/"+img.name,(err)=>{
        if(err){
            res.send(err);
        }
    })
    const data = new jobSeekerTable({name:name,email:email,contact:contact,password:password, qualification: qualification,location:location,jobPreference:jobPreference, resume:resume.name,img:img.name})
    const result=await data.save()
        res.json({
           code :200,
           data :result
        })
})


/*jobSeekerRoute.post("/jobSeeker-login", async (req, res) => {
    const { email,password} = req.body;
    const result = await jobSeekerTable.findOne({ email, password });
    if (result) {
        res.json({
            code: 200,
            message: "Login Successfull.",
            data:result
        });
    }
    else {
        res.json({
            code: 404,
            message: "Invalid.."
        })
    }
})*/


jobSeekerRoute.get("/seeker-joblist",async(req,res)=>{
    const jobPost=await jobPostTable.find();
    const finalData= await Promise.all(
        jobPost?.map(async(item)=>{
           const companyDetails = await recruiterTable?.findOne({_id:item.companyId}).sort({createdAt:-1});
           return {
            _id:item._id,
            companyId:item.companyId,
            category:item.category,
            jobTitle:item.jobTitle,
            experience:item.experience,
            jobType:item.jobType,
            vacancies:item.vacancies,
            jobLocation:item.jobLocation,
            salary:item.salary,
            applyDate:item.applyDate,
            logo:companyDetails.logo,
            name:companyDetails.name
           }
        })

    )
    res.json({
        code:200,
        message:"Data Found....",
        data:finalData
    })
})

jobSeekerRoute.post("/seeker-applyjob",async(req,res)=>{
    const {jobId,companyId,userId}=req.body;
    const isApplied=await appliedJobTable.findOne({jobId,userId});
    if(isApplied){
       res.json({
        code:301,
        message:"Already applied",
        data:isApplied
       })
    }else{
        const data=new appliedJobTable({jobId,companyId,userId})
        const result= await data.save();
        res.json({
            code:200,
            message:"Applied Successfully...",
            data:result
        })

    }
})

jobSeekerRoute.post("/seeker-applied",async(req,res)=>{
    try {
        const userId=req.body.userId;
        const appliedList = await appliedJobTable.find({ userId: userId });
        // console.log("Applied List:", appliedList); // Log applied list
    
        const finalData = await Promise.all(
            appliedList.map(async (item) => {
                const jobData = await jobPostTable.findOne({ _id: item.jobId });
                const companyData = await recruiterTable.findOne({ _id: item.companyId });
                return {
                    _id: item?._id,
                    jobId: item?.jobId,
                    jobTitle: jobData?.jobTitle,
                    experience: jobData?.experience,
                    jobType: jobData?.jobType,
                    jobLocation: jobData?.jobLocation,
                    salary: jobData?.salary,
                    applyDate: item?.applyDate, // You may want to use item instead of jobData for applyDate
                    category: jobData?.category,
                    vacancies: jobData?.vacancies,
                    name: companyData?.name,
                    logo: companyData?.logo
                };
            })
        );
    
        res.json({
            code: 200,
            message: "Data Found",
            data: finalData
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ code: 500, message: "Internal Server Error" });
    }
    })

    jobSeekerRoute.put("/seeker-update/:_id", async (req, res) => {
        const _id = req.params._id;
        const { name, email, contact, location, password, qualification, preference } = req.body;
        let img = req.files.img;
        img.mv("uploads/" + img.name, (err) => {
          if (err) {
            res.send(err)
          }
        })
        let resume = req.files.resume;
        resume.mv("uploads/" + resume.name, (err) => {
          if (err) {
            res.send(err)
          }
        })
        const result = await jobSeekerTable.findByIdAndUpdate({ _id: _id }, {
          $set: { name, email, contact, location, password, qualification, preference, img: img.name, resume: resume.name }
        },
          { new: true }
        )
        res.json({
          code: 200,
          message: "Data updated Successfull",
          data: result
        })
      
      })
      
      jobSeekerRoute.post("/seeker-login", async (req, res) => {
        const { email, password } = req.body;
        const result = await jobSeekerTable.findOne({ email, password });
        if (!result) {
          res.json({
            code: 302,
            message: "Invaild Email or Password",
            result: {}
          })
        } else {
          if (result.isBlock) {
            res.json({
              code: 203,
              message: "Your Account is Blocked",
              result: {}
            })
          }
          else {
            res.json({
              code: 200,
              message: "Login successfull",
              data: result
            })
          }
        }
      });


module.exports={jobSeekerRoute}
