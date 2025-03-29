import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    contact: yup.number().required(),
    password: yup.string().required(),
    location: yup.string().required(),
    logo: yup.mixed().required(),
});

function RecruiterRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleData = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("contact", data.contact);
        formData.append("password", data.password);
        formData.append("location", data.location);
        formData.append("logo", data.logo[0]); // Ensure logo is correctly handled

        try {
            const res = await axios.post("http://localhost:6040/api/recruiter-register", formData, {
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
            <div className="row seeker-background " style={{background:"100% 100%",backgroundRepeat:"no-repeat"}}>
                <div className="col-sm-2"></div>
                <div className="col-sm-8 " >
                    <div className="row ">
                        <div className="col-sm-6  " style={{padding:"40px"}}>
                            <img src="../c17.png" className='seeker-background' style={{width:"100%",height:"100%"}} />
                        </div>

                        <div className="col-sm-6 form">
                            <h2 className="recruiter_div_signup">Recruiter SignUp</h2>
                            <div className="p-3">
                                <form onSubmit={handleSubmit(handleData)}>
                                    <div className="row mb-4">
                                    <input className="t" type="text" placeholder="Enter Your Name.." {...register('name')}/>
                                        {errors.name && <p className="error_msg">{errors.name.message}</p>}
                                    </div>
                                    <div className="row mb-4">
                                    <input className="t" type="text" placeholder="Enter Your Email.." {...register('email')}/>
                                        {errors.email && <p className="error_msg">{errors.email.message}</p>}
                                    </div>
                                    <div className="row mb-4">
                                    <input className="t" type="number" placeholder="Enter Your Contact.." {...register('contact')}/>
                                        {errors.contact && <p className="error_msg">{errors.contact.message}</p>}
                                    </div>
                                    <div className="row mb-4">
                                    <input className="t" type="password" placeholder="Enter Your Password.." {...register('password')}/>
                                        {errors.password && <p className="error_msg">{errors.password.message}</p>}
                                    </div>
                                    <div className="row mb-4">
                                    <input className="t" type="text" placeholder="Enter Your Location.." {...register('location')}/>
                                        {errors.location && <p className="error_msg">{errors.location.message}</p>}
                                    </div>
                                    <div className="row mb-4">
                                    <input className="t" type="file"  {...register('logo')}/>
                                        {errors.logo && <p className="error_msg">{errors.logo.message}</p>}
                                    </div>
                                    <div className="row mb-4">
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

export default RecruiterRegister;
