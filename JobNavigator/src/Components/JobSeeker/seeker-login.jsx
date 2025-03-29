import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

function SeekerLogin() {
    const Navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleData = async (data) => {
       const payload ={
        email: data.email,
        password: data.password,
       }
       const response= await axios.post("http://localhost:6040/api/seeker-login",payload,{
        headers:{
            "Content-Type":"application/json",
        }
       })
       if (response.data.code==200){
        localStorage.setItem("data",JSON.stringify(response.data.data))
        localStorage.setItem("userType",JSON.stringify("seeker"))

        alert("Login Successfully...")
        Navigate("/seeker")
       }else if(response.data.code==203){
        alert("Your account is blocked contact to admin")
       }
       else if(response.data.code==302){
        alert("Invalid Email and Password")
       }

    };

    return (
        <>
        <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 ">
            <div className="row ">
                <div className="col-sm-6 adminlogin ">
                <img src="../c20.png" className='seeker-background' style={{width:"100%",height:"100%"}} />
                </div>

                <div className="col-sm-6 form">
                    <h2 className="recruiter_div_signup">Seeker Login</h2>
                    <div className="p-5" >
                        <form onSubmit={handleSubmit(handleData)}>


                            <div className="row mb-5">
                                <input className="t" type="text" placeholder="Enter Your Email.." {...register('email')} />
                                {errors.email && <p className="error_msg">{errors.email.message}</p>}
                            </div>

                            <div className="row mb-5">
                                <input className="t" type="password" placeholder="Enter Your Password.." {...register('password')} />
                                {errors.password && <p className="error_msg">{errors.password.message}</p>}
                            </div>
                            <div className="row mb-5">
                                <input className="submit_button" type="submit" value="Login" />
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

export default SeekerLogin;