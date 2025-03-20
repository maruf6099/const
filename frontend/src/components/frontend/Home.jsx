import React from 'react'
import { Container } from 'react-bootstrap';

import AboutImg from '../../assets/images/dis.jpeg';
import Header from '../common/Header';
import Footer from '../common/Footer';

const Home = () => {
  return (
    <>
<Header/>
    <main>
        {/* hero section */}
        <section className='section-1 container'>
        
            <div className='hero d-flex align-items-center'>
                <div className='container-fluid'>
                <div className="overlay">
                    <div className='text-center'>
                        <span>Building Your Dreams, One Brick at a Time</span>
                        <h1>Welcome to HR Construction</h1>
                        <p>At HR Construction, we bring your vision to life with quality craftsmanship, attention to detail, and on-time delivery. Specializing in residential and commercial projects, we build strong, sustainable structures that stand the test of time.</p>
                        <div className='mt-4'>
                        <a className="btn btn-custom">Click Me</a>
                        <a className="btn btn-custom2 ms-2">Click Me</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        {/* About Us section */}
        <section className='section-2 container py-5'>
            <div className='row py-5'>
                <div className='col-md-6'>
                    <img src={AboutImg} className='w-100' alt="o" />
                </div>
                <div className='col-md-6'>
                    <span>About us</span>
                    <h2>Quality Construction, Trusted Results</h2>
                    <p>ZM Construction is a reliable and innovative construction company committed to delivering high-quality projects on time and within budget. With a focus on excellence and attention to detail, ZM Construction has built a strong reputation in the industry for its expertise in residential, commercial, and industrial construction. The company offers a wide range of services, including project management, design-build solutions, general contracting, and renovations.</p>
                    <p>Whether it's constructing new buildings, completing complex renovations, or offering consultation services, ZM Construction approaches each project with a client-centered mindset. The team is composed of experienced professionals who are skilled in all aspects of construction, from planning and design to execution and completion.</p>
                </div>
            </div>
        </section>
    </main>
<Footer/>
    </>
  );
}

export default Home

