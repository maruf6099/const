import React from 'react';
import AboutImg from '../../assets/images/dis.jpeg';


const About = () => {
    return (
        <div>
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
        </div>
    );
};

export default About;