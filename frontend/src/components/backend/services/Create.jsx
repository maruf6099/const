
import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import { apiUrl, token } from '../../common/Http';
import { Link } from 'react-router-dom';


const Create = () => {
    const [services,setServices]=useState([]);
    
        const fetchServices=async()=>{
            const res=await fetch(apiUrl+'services',{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token()}`,
                },
            });
            const result=await res.json();
            setServices(result.data);
            //console.log(result);
        }
        useEffect(()=>{
            fetchServices();
        },[]);
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
                                 <form>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Name</label>
                                        <input type="text"className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""className='form-label'>Slug</label>
                                        <input type="text"className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""className='form-label'>Short description</label>
                                        <textarea className='form-control'rows={4} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""className='form-label'>Content</label>
                                        <textarea className='form-control'rows={5} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""className='form-label'>Status</label>
                                        <select className='form-control'>
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