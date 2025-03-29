import { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route, useLocation} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import NavBar from "./Components/LandingPage/NavBar"
import Home from "./Components/LandingPage/Home"
import './App.css'
import Postjob from './Components/Recruiter/jobpost'
import RecruiterRegister from './Components/Recruiter/RecruiterRegister'
import JobSeekerRegister from './Components/JobSeeker/JobSeekerRegister'
import AdminLogin from './Components/Admin/admin-login'
import RecruiterLogin from './Components/Recruiter/RecruiterLogin'
import SeekerLogin from './Components/JobSeeker/seeker-login';
import AdminSeekerlist from './Components/Admin/AdminSeekerlist'
import AdminRecruiterlist from './Components/Admin/AdminRecruiterlist';
import RecruiterUpdate from './Components/Recruiter/Recruiterprofile'
import RecruiterPostedJobs from './Components/Recruiter/Postedjob'
import SeekerUpdate from './Components/JobSeeker/Seekerprofile'
import AdminUpdate from './Components/Admin/Adminprofile'
import SeekerApplyJobList from './Components/JobSeeker/SeekerApplyJobList'
import SeekerAppliedJob from './Components/JobSeeker/SeekerAppliedJob'
import RecruiterAppliedJob from './Components/Recruiter/RecruiterAppliedJob'
import FindJob from './Components/LandingPage/FindJob'
import Contact from './Components/LandingPage/Contact'
import About from './Components/LandingPage/About'
import Footer from './Components/LandingPage/Footer'
import PageNotFound from './Components/LandingPage/404Error'

function App() {
  const location = useLocation();
  const [role,setRole]=useState('')
  useEffect(()=>{
    const userType=JSON.parse(localStorage.getItem("userType"));
    setRole(userType)
  },[role,location])

  return (
    <>
 
  <NavBar />
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/findjob" element={<FindJob/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/admin/login" element={<h1><AdminLogin/></h1>}/> 
    <Route path="/seeker/register" element={<h1>< JobSeekerRegister/></h1>}/>
    <Route path="/seeker/login" element={<><SeekerLogin/></>}/>
    <Route path="/recruiter/register" element={<h1><RecruiterRegister/></h1>}/>
    <Route path="/recruiter/login" element={<RecruiterLogin/>}/>

   {role=="admin" && (<>
    <Route path="/admin" element={<AdminUpdate/>}/>
    <Route path="/admin/seekerlist" element={<AdminSeekerlist/>}/>
    <Route path="/admin/recruiterlist" element={<AdminRecruiterlist/>}/>
   </>)}

    

    {role=="seeker" && (<>
      <Route path="/seeker/register" element={<h1>< JobSeekerRegister/></h1>}/>
    <Route path="/seeker/login" element={<><SeekerLogin/></>}/>
    <Route path="/seeker" element={<SeekerUpdate/>}/>
    <Route path="/seeker/jobapply" element={<SeekerApplyJobList/>}/>
    <Route path="/seeker/appliedjob" element={<SeekerAppliedJob/>}/>
    </>)}
    


     {role=="recruiter" && (<>
      <Route path="/recruiter/register" element={<h1><RecruiterRegister/></h1>}/>
      <Route path="/recruiter/login" element={<RecruiterLogin/>}/>
      <Route path="/recruiter" element={<RecruiterPostedJobs/>}/>
      <Route path="/recruiter/jobpost" element={<><Postjob/></>}/>
      <Route path="/recruiter/appliedjob" element={<RecruiterAppliedJob/>}/>
      <Route path="/recruiter/update" element={<RecruiterUpdate/>}/>
     </>)}








    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  <Footer/>
 
    </>
  )
}

function WrapperRouter(){
  return(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  )
}

export default WrapperRouter
