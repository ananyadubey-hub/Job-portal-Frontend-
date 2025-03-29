import { useEffect, useState } from 'react';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import '../../app.css'
import { FaHome,FaBriefcase, FaCheckCircle, FaInfoCircle, FaPhoneAlt,  FaUserShield, FaUserTie, FaUser,FaUserPlus, FaUserAlt, FaUsers,  FaSignOutAlt } from "react-icons/fa";


function NavBar(){
  const [data,setData]=useState("");
  const location=useLocation();
  const [userType,setUserType]=useState("");
  const navigate=useNavigate();
  useEffect(()=>{
     const temData=JSON.parse(localStorage.getItem("data"))
     setData(temData);
     const temUserType=JSON.parse(localStorage.getItem("userType"));
     setUserType(temUserType);
  },[location]);
  
  const adminLogout=()=>{
     localStorage.removeItem("data")
     localStorage.removeItem("userType")
     navigate("/admin/login")
  }
  const seekerLogout=()=>{
    localStorage.removeItem("data")
     localStorage.removeItem("userType")
     navigate("/seeker/login")
  }
  const recruiterLogout=()=>{
    localStorage.removeItem("data")
     localStorage.removeItem("userType")
     navigate("/recruiter/login")
  }
  //console.log(data,userType,"Local Storage Data")

  if(userType=="admin"){
    return (
      <> 
      <div className="row">
     <div className="col-sm-2"></div>
     <div className="col-sm-9">
       <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
           <Link className="navbar-brand" to="">
             <img className="navbar_logo" src={`http://localhost:6040/upload/${data.image}`}/>
           </Link>
           <button
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNav"
             aria-controls="navbarNav"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span className="navbar-toggler-icon" />
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <Link className="nav-link nav_font" aria-current="page" to="/admin">
                 <FaHome className="menu-icon" />&nbsp; Dashboard
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link nav_font" aria-current="page" to="/admin/seekerlist">
                 <FaUsers className="menu-icon" />&nbsp;SeekerList
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link nav_font" aria-current="page" to="/admin/recruiterlist">
                 <FaUserTie className="menu-icon" />&nbsp;RecruiterList
                 </Link>
               </li>
               
               <li className="nav-item" onClick={adminLogout}>
                 <Link className="nav-link nav_font" aria-current="page" >
                 <FaSignOutAlt className="menu-icon" />&nbsp; LogOut
                 </Link>
               </li>
               
             </ul>
   
           </div>
         </div>
       </nav>
     </div>
     <div className="col-sm-1"></div>
   </div>
   
       
       </>
    )
  }
  else if(userType=="seeker"){
    return (
      <> 
      <div className="row">
     <div className="col-sm-2"></div>
     <div className="col-sm-9">
       <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
           <Link className="navbar-brand" to="">
           <img className="navbar_logo" src={`http://localhost:6040/upload/${data.img}`}/>
           </Link>
           <button
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNav"
             aria-controls="navbarNav"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span className="navbar-toggler-icon" />
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <Link className="nav-link nav_font" aria-current="page" to="/seeker">
                 <FaHome className="menu-icon" />&nbsp; Dashboard
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link nav_font" aria-current="page" to="/seeker/jobapply">
                 <FaBriefcase className="menu-icon" />&nbsp;ApplyJob
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link nav_font" aria-current="page" to="/seeker/appliedjob">
                 <FaCheckCircle className="menu-icon" />&nbsp;  AppliedJob
                 </Link>
               </li>
               <li className="nav-item" onClick={seekerLogout}>
                 <Link className="nav-link nav_font" aria-current="page">
                 <FaSignOutAlt className="menu-icon" />&nbsp; LogOut
                 </Link>
               </li>
               
             </ul>
   
           </div>
         </div>
       </nav>
     </div>
     <div className="col-sm-1"></div>
   </div>
   
       
       </>
    )
  }
  else if(userType=="recruiter"){
    return (
      <> 
      <div className="row">
     <div className="col-sm-2"></div>
     <div className="col-sm-9">
       <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
           <Link className="navbar-brand" to="">
             {/* <img src="/c15.jpg" alt="logo" /> */}
             

             <img className='image-fluid' style={{height:"80px", borderRadius:"50%"}} src={`http://localhost:6040/upload/${data.logo}`} />
           </Link>
           <button
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNav"
             aria-controls="navbarNav"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span className="navbar-toggler-icon" />
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <Link className="nav-link nav_font" aria-current="page" to="/recruiter/update">
                 <FaHome className="menu-icon" />&nbsp; Dashboard
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link nav_font" aria-current="page" to="/recruiter/jobpost">
                 <FaBriefcase />&nbsp;PostJob
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link nav_font" aria-current="page" to="/recruiter">
                 <FaUser className="menu-icon" />&nbsp;PostedJobs
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link nav_font" aria-current="page" to="/recruiter/appliedjob">
                 <FaCheckCircle className="menu-icon" />&nbsp; AppliedJob
                 </Link>
               </li>
              
               <li className="nav-item" onClick={recruiterLogout}>
                 <Link className="nav-link nav_font" aria-current="page">
                 <FaSignOutAlt className="menu-icon" />&nbsp;LogOut
                 </Link>
               </li>
               
             </ul>
   
           </div>
         </div>
       </nav>
     </div>
     <div className="col-sm-1"></div>
   </div>
   
       
       </>
    )
  }
  else{
     return (
      <> 
      <div className="row">
     <div className="col-sm-2"></div>
     <div className="col-sm-9">
       <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
           <Link className="navbar-brand" to="">
             <img src="/logo.png" alt="logo" />
           </Link>
           <button
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNav"
             aria-controls="navbarNav"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span className="navbar-toggler-icon" />
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <Link className="nav-link nav_font" aria-current="page" to="/">
                 <FaHome />&nbsp;
                   Home
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link nav_font" to="/findjob">
                 <FaBriefcase />&nbsp; Find a Job
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link nav_font" to="/about">
                 <FaInfoCircle />&nbsp; About
                 </Link>
               </li>
               <li className="nav-item">
                 <Link
                   className="nav-link nav_font"
                   to="/contact"
                   tabIndex={-1}
                   aria-disabled="true"
                 >
                   <FaPhoneAlt />&nbsp;Contact
                 </Link>
               </li>
             </ul>
   
             {/* First Dropdown */}
             <div className="dropdown ms-auto mt-2">
               <button
                 className="btn btn-outline-primary dropdown-toggle custom-btn hover-effect"
                 type="button"
                 id="dropdownMenuButton1"
                 data-bs-toggle="dropdown"
                 aria-expanded="false"
               >
                 <b>Registration</b>
               </button>
               <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton1">
                 <li>
                   <Link className="dropdown-item" to="recruiter/register">
                   <FaUserPlus />&nbsp; Recriuter 
                   </Link>
                 </li>
                 <li>
                   <Link className="dropdown-item" to="/seeker/register">
                   <FaUserAlt />&nbsp;Job Seeker
                   </Link>
                 </li>
               </ul>
             </div>
   
             {/* Second Dropdown */}
             <div className="dropdown ms-4 mt-2">
               <button
                 className="btn btn-outline-secondary dropdown-toggle custom-btn hover-effect"
                 type="button"
                 id="dropdownMenuButton2"
                 data-bs-toggle="dropdown"
                 aria-expanded="false"
               >
                <b> Login</b>
               </button>
               <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton2">
                 <li>
                   <Link className="dropdown-item" to="/admin/login">
                   <FaUserShield />&nbsp; Admin Login
                   </Link>
                 </li>
                 <li>
                   <Link className="dropdown-item" to="/recruiter/login">
                   <FaUserTie />&nbsp; Recriuter Login
                   </Link>
                 </li>
                 <li>
                   <Link className="dropdown-item" to="/seeker/login">
                   <FaUser />&nbsp;Seeker Login
                   </Link>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </nav>
     </div>
     <div className="col-sm-1"></div>
   </div>
   
       
       </>
    )
  }

// return (
    <> 
   <div className="row">
  <div className="col-sm-2"></div>
  <div className="col-sm-9">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          <img src="/logo.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link nav_font" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav_font" to="/findjob">
                Find a Job
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav_font" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav_font"
                to="/contact"
                tabIndex={-1}
                aria-disabled="true"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* First Dropdown */}
          <div className="dropdown ms-auto mt-2">
            <button
              className="btn btn-outline-primary dropdown-toggle custom-btn hover-effect"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <b>Registration</b>
            </button>
            <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="recruiter/register">
                  Recriuter 
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/seeker/register">
                  Job Seeker
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Dropdown */}
          <div className="dropdown ms-4 mt-2">
            <button
              className="btn btn-outline-secondary dropdown-toggle custom-btn hover-effect"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <b> Login</b>
            </button>
            <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton2">
              <li>
                <Link className="dropdown-item" to="/admin/login">
                  Admin Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/recruiter/login">
                Recriuter Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/seeker/login">
                  Seeker Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div className="col-sm-1"></div>
</div>

    
    </>
 //)

}

export default NavBar;