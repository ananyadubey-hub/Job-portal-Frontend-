import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    contact: yup.number().required(),
    password: yup.string().required(),
    qualification: yup.string().required(),
    location: yup.string().required(),
    jobPreference: yup.string().required(),
    resume: yup.mixed().required(),
    img: yup.mixed().required(),
});

function JobSeekerRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleData = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("contact", data.contact);
        formData.append("password", data.password);
        formData.append("qualification", data.qualification);
        formData.append("location", data.location);
        formData.append("jobPreference", data.jobPreference);
        formData.append("resume", data.resume[0]);
        formData.append("img", data.img[0]); // Ensure img is correctly handled

        try {
            const res = await axios.post("http://localhost:6040/api/jobSeeker-register", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Register Successfully");
        } catch (error) {
            console.error(error);
            alert("Registration failed");
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 ">
                    <div className="row ">
                        <div className="col-sm-6 recruiter-register ">
                        <img src="../images (3).jpeg" className='seeker-background' style={{width:"100%",height:"100%"}} />
                        </div>

                        <div className="col-sm-6 form">
                            <h2 className="recruiter_div_signup">JobSeeker SignUp</h2>
                            <div className="p-3 " >
                                <form onSubmit={handleSubmit(handleData)}>
                                    <div className="row mb-2 ">
                                    <input className="t" type="text" placeholder="Enter Your Name.." {...register('name')}/>
                                        {errors.name && <p className="error_msg">{errors.name.message}</p>}
                                    </div>
                                    
                                    <div className="row mb-2">
                                    <input className="t" type="text" placeholder="Enter Your Email.." {...register('email')}/>
                                        {errors.email && <p className="error_msg">{errors.email.message}</p>}
                                    </div>
                                    <div className="row mb-2">
                                    <input className="t" type="file"  {...register('resume')}/>
                                        {errors.resume && <p className="error_msg">{errors.resume.message}</p>}
                                    </div>
                                    <div className="row mb-2">
                                    <input className="t" type="number" placeholder="Enter Your Contact.." {...register('contact')}/>
                                        {errors.contact && <p className="error_msg">{errors.contact.message}</p>}
                                    </div>
                                    <div className="row mb-2">
                                    <input className="t" type="password" placeholder="Enter Your Password.." {...register('password')}/>
                                        {errors.password && <p className="error_msg">{errors.password.message}</p>}
                                    </div>
                                    <div className="row mb-2">
                                    <input className="t" type="text" placeholder="Enter Your Qualification.." {...register('qualification')}/>
                                        {errors.qualification && <p className="error_msg">{errors.qualification.message}</p>}
                                    </div>
                                    <div className="row mb-2">
                                    <input className="t" type="text" placeholder="Enter Your Location.." {...register('location')}/>
                                        {errors.location && <p className="error_msg">{errors.location.message}</p>}
                                    </div>
                                    <div className="row mb-2">
                                    <input className="t" type="text" placeholder="Enter Your JobPreference.." {...register('jobPreference')}/>
                                        {errors.jobPreference && <p className="error_msg">{errors.jobPreference.message}</p>}
                                    </div>
                                    
                                   
                                    <div className="row mb-2">
                                    <input className="t" type="file"  {...register('img')}/>
                                        {errors.img && <p className="error_msg">{errors.img.message}</p>}
                                    </div>
                                    <div className="row mb-2">
                                        <input className="submit_button" type="submit" value="Sign Up" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </>
    );
}

export default JobSeekerRegister;
