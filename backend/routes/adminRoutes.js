const express = require('express')
const AdminRoute = express.Router()
const { adminTable } = require('../models/adminmodal')
const {jobSeekerTable} =require('../models/jobSeekermodal')
const { recruiterTable } = require('../models/recruitermodal')

AdminRoute.post("/admin-register", async (req, res) => {
    const { name, email, contact, password ,location} = req.body;
    let image = req.files.image;
    image.mv("uploads/" + image.name, (err) => {
        if (err) {
            res.send(err)
        }
    })
    const data = new adminTable({ name, email, contact, password,location, image: image.name })
    const result = await data.save();
    res.json({
        code: 200,
        data: result
    })
})

AdminRoute.post("/admin-login", async (req, res) => {
    const { email, password } = req.body;
    const result = await adminTable.findOne({ email, password });
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
});

AdminRoute.get("/admin-seekerlist",async(req,res)=>{
    try{
        const result=await jobSeekerTable.find();
        res.json({
           code: 200,
           message: "Data Found......",
           data:result
        })
    }catch(err){
        console.log(err)
    }
})

AdminRoute.get("/admin-recruiterlist",async(req,res)=>{
    try{
        const result=await recruiterTable.find();
        res.json({
           code: 200,
           message: "Data Found......",
           data:result
        })
    }catch(err){
        console.log(err)
    }
})

AdminRoute.put("/admin-update/:_id",async(req,res)=>{
    const _id=req.params._id;
    const {name,email,contact,password,location}=req.body;
    let image=req.files.image;
    image.mv("uploads/" + image.name, (err) => {
        if (err) {
            res.send(err)
        }
    })

    const result=await adminTable.findByIdAndUpdate({_id:_id},{
        $set:{name,email,contact,password,location,image: image.name}},
        {new:true}
    )
    res.json({
        code:200,
        message:"Data Updated Succefull...",
        data:result
    })
})


AdminRoute.put("/admin-recruiterblock/:_id",async(req,res)=>{
    const _id=req.params._id;
    const status=req.body.status;
    const result=await recruiterTable.findByIdAndUpdate({_id:_id},{
      $set:{isBlock:status}},{new:true})
    res.json({
      code:200,
      message:"Data updated Successfull",
      data:result
    })
  })

  AdminRoute.put("/admin-seekerblock/:_id",async(req,res)=>{
    const _id=req.params._id;
    const status=req.body.status;
    const result=await jobSeekerTable.findByIdAndUpdate({_id:_id},{
      $set:{isBlock:status}},{new:true})
    res.json({
      code:200,
      message:"Data updated Successfull",
      data:result
    })
  })
  


module.exports = { AdminRoute };
