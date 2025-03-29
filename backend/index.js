const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const expressFileupload=require('express-fileupload');
const {recruiterRoute} =require('./routes/recruiterRoutes');
const { jobSeekerRoute } =require('./routes/jobSeekerRoutes');
const { AdminRoute }=require('./routes/adminRoutes');
const app=express();
app.use(express.json());
app.use(expressFileupload());
app.use(cors());
app.use("/upload",express.static("./uploads"));
//http://localhost:6040/upload/Screenshot(17).png
const DbConnect=async()=>{
        const con=await mongoose.connect("mongodb://localhost:27017/recruiterx");
        if(con){
            console.log("Db Connected.....");
        }
}  
DbConnect();
app.use("/api",recruiterRoute);
app.use("/api",jobSeekerRoute);
app.use("/api",AdminRoute);



app.listen(6040,()=>{
    console.log("server is running on the 9000")
})