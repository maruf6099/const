import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import { apiUrl, token } from '../../common/Http';

const Show = () => {
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
        console.log(result);
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
                                    <a href="" className='btn btn-primary'>create</a>
                                </div>
                                <hr/>
                                <table className='table table-striped'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Slug</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>s</td>
                                            <td>s</td>
                                            <td>d</td>
                                            <td>d</td>
                                            <td>d</td> 
                                        </tr>
                                    </tbody>
                                </table>
                                
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

export default Show;