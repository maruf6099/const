
import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import { apiUrl, token } from '../../common/Http';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';

const Create = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const navigate=useNavigate();

      const onSubmit = async(data) => {
         const res=await fetch(apiUrl+'services',{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token()}`,
                    },
                    body:JSON.stringify(data)
                });
                const result=await res.json();
                if(result.status==true){
                    toast.success(result.message);
                    navigate('/admin/services');
                }else{
                    toast.error(result.message);
                }
                console.log(result)
    }


    return (
        <div>
             <Header/>
            <main>
                <div className="container my-5">
                <div className="row">
                    <div className='col-md-3'>
                        {/* sidebar */}
                        <Sidebar/>
                    </div>
                    <div className='col-md-9'>
                        {/* dashboard */}
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between">
                                    <h4>Services</h4>
                                    <Link to="/admin/services" className='btn btn-primary'>Back</Link>
                                </div>
                                <hr/>
                                 <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Name</label>
                                        <input
                                        {
                                            ...register("title",{
                                                required:"This field is required"
                                            })

                                        }
                                        type="text"className={`form-control ${errors.title && 'is-invalid'}`} />
                                         {errors.title && <span className='invalid-feedback'>{errors.title?.message}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""className='form-label'>Slug</label>
                                        <input 
                                        {
                                            ...register("slug",{
                                                required:"Slug field is required"
                                            })

                                        }
                                        type="text" className={`form-control ${errors.slug && 'is-invalid'}`} />
                                        {errors.slug && <p>{errors.slug?.message}</p>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""className='form-label'>Short description</label>
                                        <textarea {...register("short_desc")} className='form-control'rows={4} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""className='form-label'>Content</label>
                                        <textarea {...register("content")} className='form-control'rows={5} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""className='form-label'>Status</label>
                                        <select {...register("status")} className='form-control'>
                                            <option value="1">Active</option>
                                            <option value="0">Block</option>
                                        </select>
                                    </div>
                                    <button className='btn btn-success'>Submit</button>
                                 </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Create;