import React, { useContext } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';

const Login = () => {

    const {login}=useContext(AuthContext);

    const navigate=useNavigate();

        const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()
      
        const onSubmit = async (data) => {
            //console.log(data)

            const res=await fetch("http://localhost:8000/api/authenticate",{
                method :'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
            });
            const result= await res.json();
            if(result.status==false){
                toast.error(result.message);
            }
            else{
                const userInfo={
                    id:result.id,
                    token:result.token
                }
                localStorage.setItem('userInfo',JSON.stringify(userInfo))
                login(userInfo);
                navigate('/admin/dashboard')
            }

            console.log(result);
        }
    
      
    return (
        <div>
            <Header/>
            <main>
            <div className="container my-5 d-flex justify-content-center">
                <div className="login-form py-5">
                    <div className="card border-0 shadow">
                        <div className="card-body p-5">
                        <h4 className="text-center mb-4">Login</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                    {...register('email',{
                        required:"This field is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email address'
                        }
                    })}
                    type="email" className={`form-control ${errors.email && 'is-invalid'}`} placeholder="Enter your email"/>
                    {
                        errors.email && <p>{errors.email?.message}</p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                    {...register('password',{
                        required:"This field is required"
                    })}
                    type="password" className={`form-control ${errors.password && 'is-invalid'}`} id="password" placeholder="Enter your password"/>
                    {
                        errors.password && <p>{errors.password?.message}</p>
                    }
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <p className="text-center mt-3">
                    <a href="#">Forgot Password?</a>
                </p>
            </form>
                        </div>
                    </div>
                </div>
            </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Login;