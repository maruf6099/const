import React from 'react';
import Header from './../common/Header';
import { sizeDelimitedEncode } from './../../../node_modules/@bufbuild/protobuf/dist/esm/wire/size-delimited';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import { fileDesc } from './../../../node_modules/@bufbuild/protobuf/dist/esm/codegenv1/file';

const ContactUs = () => {
    return (
        <div>
            <Header/>
            <main>
                {/* hero section */}
         <Hero preHeading="You trust our quality"
         heading="Contact Us" text="At HR Construction, we bring your vision to life with quality craftsmanship, attention to detail, and on-time delivery. Specializing in residential and commercial projects,we build strong, sustainable structures that stand the test of time."
         />
         <section className="section-9 py-5">
            <div className="container">
            <div className="section-header text-center">
                    
                    <h2>Contact Us</h2>
                    <p>Your satisfaction is our priority. We work closely with you, keeping you informed.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="card shadow border-0 mb-3">
                        <div className="card-body p-4">
                                <h5>Call us</h5>
                                <div><a href="">222-227-343-33</a></div>
                                <div><a href="">332-232-343-33</a></div>
                                
                                <h5 className='mt-4'>Mail Us</h5>
                                <div><a href="">zm@gmail.com</a></div>
                                <div><a href="">info.zm@gmail.com</a></div>

                                <h5 className='mt-4'>Address</h5>
                                <div><a href="">3/34,fileDesc</a></div>
                                <div><a href="">djkrr Ghana</a></div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card shadow border-0">
                            <div className="card-body p-5">
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className='form-label'>Name</label>
                                        <input type="text"className='form-control form-control-lg'placeholder='Enter name' />    
                                    </div>    
                                    <div className="col-md-6 mb-4">
                                    <label htmlFor="" className='form-label'>Email</label>
                                    <input type="text"className='form-control form-control-lg'placeholder='Enter email' />    
                                    </div>    
                                </div>    
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className='form-label'>Phone</label>
                                        <input type="text"className='form-control form-control-lg'placeholder='Enter phone' />    
                                    </div>    
                                    <div className="col-md-6 mb-4">
                                    <label htmlFor="" className='form-label'>Subject</label>
                                    <input type="text"className='form-control form-control-lg'placeholder='Enter subject' />    
                                    </div> 

                                    <div>
                                    <label htmlFor="" className='form-label'>Message</label>
                                    <textarea name="" id="" className='form-control form-control-lg'placeholder='Enter message'></textarea>
                                    </div>   
                                </div>  
                                <button className='btn btn-primary large mt-3'>Submit</button>  
                            </form>     
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

         </section>
            </main>
            <Footer/>
        </div>
    );
};

export default ContactUs;