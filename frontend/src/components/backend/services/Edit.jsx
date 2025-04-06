import React, { useMemo, useRef, useState } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import { Link,useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';

import JoditEditor from 'jodit-react';
import { apiUrl, token,fileUrl } from '../../common/Http';

const Edit = ({placeholder}) => {
    const editor = useRef(null);
	const [content, setContent] = useState('');
	const [service, setServices] = useState('');
	const [isDisable, setIsDisable] = useState(false);
	const [imageId, setImageId] = useState(null);

    const prams=useParams();

    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || ''
    }),
    [placeholder]
);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        defaultValues: async () => {
            const res=await fetch(apiUrl+'services/'+prams.id,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token()}`,
                }
                
            });
            const result=await res.json();
            //console.log(result);
            setContent(result.data.content);
            setServices(result.data);
            return{
                title:result.data.title,
                slug:result.data.slug,
                short_desc:result.data.short_desc,
                status:result.data.status,
                
            }
        }
      })

      const navigate=useNavigate();

      const onSubmit = async(data) => {
              const newData={...data,"content":content,"imageId":imageId}
               const res=await fetch(apiUrl+'services/'+prams.id,{
                          method: "put",
                          headers: {
                              "Content-Type": "application/json",
                              "Accept": "application/json",
                              "Authorization": `Bearer ${token()}`,
                          },
                          body:JSON.stringify(newData)
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

          const handleFile = async (e) => {
                  const formData = new FormData();
                  const file = e.target.files[0];
                  formData.append("image", file);
              
                  await fetch(apiUrl + 'temp-image', {
                      method: "POST",
                      headers: {
                          "Accept": "application/json",
                          "Authorization": `Bearer ${token()}`,
                      },
                      body: formData
                  })
                  .then(res => res.json()) 
                  .then(result => {
                      if (result.status == false) {
                          toast.error(result.errors.image[0]);
                      } else {
                          setImageId(result.data.id);
                      }
                  })
                  .catch(error => {
                      console.error("Image upload error:", error);
                      toast.error("Image upload failed.");
                  });
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
                                    <h4>Edit Services</h4>
                                    <Link to="/admin/services" className='btn btn-primary'>Back</Link>
                                </div>
                                <hr/>
                                 <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Title</label>
                                        <input
                                        placeholder='Title'
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
                                        placeholder='Slug'
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
                                        <textarea {...register("short_desc")} className='form-control' placeholder='Write short description'rows={4} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""className='form-label'>Content</label>
                                        {/* <textarea {...register("content")} className='form-control' placeholder='Write Content' rows={5} /> */}
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1} // tabIndex of textarea
                                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                            onChange={newContent => {}}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""className='form-label'>Status</label>
                                        <select {...register("status")} className='form-control'>
                                            <option value="1">Active</option>
                                            <option value="0">Block</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor=""className='form-label'>Status</label>
                                        <br />
                                        <input onChange={handleFile} type='file'/>
                                        
                                    </div>
                                    <div className="pb-3">
                                    {
                                            service.image && <img src={fileUrl+'uploads/services/small/'+service.image} alt="" />
                                        }
                                    </div>
                                    <button disabled={isDisable} className='btn btn-success'>Update</button>
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

export default Edit;
    