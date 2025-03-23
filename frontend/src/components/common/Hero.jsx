import React from 'react';

const Hero = ({preHeading,heading,text}) => {
    return (
        <div>
               {/* hero section */}
        <section className='section-7'>
        
        <div className='hero d-flex align-items-center'>
            <div className='container'>
            <div className="overlay">
                <div className='text-left'>
                    <span>{preHeading}</span>
                    <h1>{heading}</h1>
                    {/* <p>{text}</p> */}
                    <p dangerouslySetInnerHTML={{ __html:text }}></p>
                </div>
            </div>
        </div>
        </div>
        </section>
        </div>
    );
};

export default Hero;