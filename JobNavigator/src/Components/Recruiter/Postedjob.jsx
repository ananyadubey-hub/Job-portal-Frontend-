import axios from 'axios';
import React, { useEffect, useState } from 'react'



const RecruiterPostedJobs = () => {

    const [dataId, setDataId] = useState("");
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        const tempData = JSON.parse(localStorage.getItem('data'));
        setDataId(tempData._id);
        getData();
        // console.log(tempData._id, 'temp');
    }, [dataId]);
    // console.log(dataId, 'did')
    const getData = async () => {
        const tempData = JSON.parse(localStorage.getItem('data'));
        const payload = {
            companyId: tempData._id   // working
        }
        const response = await axios.post('http://localhost:6040/api/recruiter-postedjob', payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.data.code == 200) {
            setJobData(response.data.data);                                                          
        }
       
    }
 const arr=[ {
    logo: "company1_logo.png",
    name: "Tech Innovators Inc.",
    jobTitle: "Software Engineer",
    jobType: "Full-Time",
    category: "IT & Software",
    jobLocation: "New York, USA",
    salary: "$80,000 - $100,000",
    vacancies: 3,
    applyDate: "2024-12-31"
},
{
    logo: "company2_logo.png",
    name: "Global Marketing Ltd.",
    jobTitle: "Marketing Specialist",
    jobType: "Part-Time",
    category: "Marketing",
    jobLocation: "London, UK",
    salary: "£35,000 - £50,000",
    vacancies: 2,
    applyDate: "2024-11-15"
},
{
    logo: "company3_logo.png",
    name: "Health Solutions Corp.",
    jobTitle: "Data Analyst",
    jobType: "Contract",
    category: "Healthcare",
    jobLocation: "Toronto, Canada",
    salary: "$70,000 - $85,000",
    vacancies: 1,
    applyDate: "2024-10-01"
}]

    return (
        <>
            <div className="container my-3">
                
                    {jobData.map((el) => {
                        return (
                            <div className="card p-3 mb-3 postedjob_card">
                            <div className="row d-flex justify-content-center align-items-center">
                                {/* Logo Column */}
                                <div className="col-md-3 d-flex justify-content-center align-items-center">
                                    <img src={`http://localhost:6040/upload/${el.logo}`} alt="Company Logo" className="img-fluid bg-dark" style={{ maxHeight: '100px' }} />
                                </div>

                                {/* Company Name, Job Title, and Job Type Column */}
                                <div className="col-md-3 d-flex justify-content-start flex-column my-3">
                                    <h5 className='postedjob_h'> {el.name}</h5>
                                    <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobTitle}</span></div>
                                    <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobType}</span></div>
                                </div>

                                {/* Job Category, Location, and Salary Column */}
                                <div className="col-md-3">
                                    <div className='postedjob_p2 mb-2'>Category: <span className='postedjob_p1'> {el.category}</span></div>
                                    <div className='postedjob_p2 mb-2'>Location: <span className='postedjob_p1'> {el.jobLocation}</span></div>
                                    <div className='postedjob_p2 mb-2'>Salary: <span className='postedjob_p1'> {el.salary}</span></div>
                                </div>

                                {/* Apply Date and Vacancies Column */}
                                <div className="col-md-3">
                                    <div className='postedjob_p2 mb-2'>Vacancies: <span className='postedjob_p1'> {el.vacancies}</span></div>
                                    <div className='postedjob_p2 mb-2'>Apply By: <span className='postedjob_p1'> {el.applyDate}</span></div>
                                    {/* <input className='form_button mt-3' type='submit' value='APPLY NOW' style={{width:'150px', fontSize:"0.8em"}}/> */}
                                </div>
                            </div>
                            </div>
                        )
                    })}
                
            </div>
        </>
                
    
    )
}


export default RecruiterPostedJobs















