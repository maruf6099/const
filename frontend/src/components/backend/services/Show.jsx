import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import { apiUrl, token } from '../../common/Http';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        setServices(result.data);
        //console.log(result);
    }
    const deleteServices=async(id)=>{
        if(confirm("Are you sure!! Want to delete?")){
            const res=await fetch(apiUrl+'services/'+id,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token()}`,
                },
            });
            const result=await res.json();

            if(result.status==true){
                const newServices=services.filter(service=>service.id!=id);
                setServices(newServices);
                toast.success(result.message);
            }else{
                toast.error(result.message);
            }
        }
        
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
                                    <Link to="/admin/services/create" className='btn btn-primary'>create</Link>
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
                                        {
                                            services && services.map(service=>{
                                    return(      
                                        <tr key={service.id}>
                                            <td>{service.id}</td>
                                            <td>{service.title}</td>
                                            <td>{service.slug}</td>
                                            <td>{service.status==1 ? "Active" : "Inactive"}</td>
                                            <td>
                                                <Link to={`/admin/services/edit/${service.id}`} className="btn btn-warning btn-sm">Edit</Link>
                                                <Link onClick={()=>deleteServices(service.id)} className="btn btn-danger btn-sm ms-2">Delete</Link>
                                            </td> 
                                        </tr>)  
                                         })
                                        }
                                        
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