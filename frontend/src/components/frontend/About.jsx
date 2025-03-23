import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
//import About from '../common/About';
import {default as AboutNew} from '../common/About';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BlgImg from '../../assets/images/mem1.jpeg'
import Hero from '../common/Hero';

const about = () => {
    return (
        <>
           
        <Header/>
        <main>
         {/* hero section */}
         <Hero preHeading="You trust our quality"
         heading="About Us" text="At HR Construction, we bring your vision to life with quality craftsmanship, attention to detail, and on-time delivery. Specializing in residential and commercial projects,we build strong, sustainable structures that stand the test of time."
         />
    <AboutNew/>
    <section className="section-8">
        <div className="container bg-light py-5">
            <div className="section-header text-center">
                <span>Team</span>
                <h2>Our Team</h2>
                <p>Whether you’re looking to build your dream home or undertake a major renovation, we work closely with you to bring your vision to life</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                 <div className="container">
                 <div className="item">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BlgImg} />
                    <Card.Body>
                        <Card.Title><div className='card-title'>
                            Mical Belik                        
                            <p>Web Developer</p>
                        </div></Card.Title>
                    </Card.Body>
                    </Card>
                        </div>
                 </div>
                </div>
                <div className="col-md-4">
                 <div className="container">
                 <div className="item">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BlgImg} />
                    <Card.Body>
                        <Card.Title><div className='card-title'>
                            Mical Belik                        
                            <p>Web Developer</p>
                        </div></Card.Title>
                    </Card.Body>
                    </Card>
                        </div>
                 </div>
                </div>
                <div className="col-md-4">
                 <div className="container">
                 <div className="item">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BlgImg} />
                    <Card.Body>
                        <Card.Title>                            
                        <div className='card-title'>
                            Mical Belik                        
                            <p>Web Developer</p>
                        </div>
                        </Card.Title>
                    </Card.Body>
                    </Card>
                </div>
                 </div>
                </div>
            </div>
        </div>
    </section>
        </main>
        <Footer/>
            
        </>
    );
};

export default about;