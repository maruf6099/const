import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import BlgImg from '../../assets/images/blg1.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    return (
        <div>
            <Header/>
            <main>
                {/* hero section */}
         <Hero preHeading="You trust our quality"
         heading="Blogs" text="At HR Construction, we bring your vision to life with quality craftsmanship, attention to detail, and on-time delivery. Specializing in residential and commercial projects,we build strong, sustainable structures that stand the test of time."
         />

         {/* Blogs & news */}
        <section className="section-6 py-6">
            <div className="container">
            <div className="section-header text-center">
                <span>Blogs & news</span>
                <h2>Articles and Blog posts</h2>
                <p>Whether you’re looking to build your dream home or undertake a major renovation, we work closely with you to bring your vision to life</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                 <div className="container">
                 <div className="item">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BlgImg} />
                    <Card.Body>
                        <Card.Title>Pirgong Project</Card.Title>
                        
                        <Button variant="primary">Read more</Button>
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
                        <Card.Title>Pirgong Project</Card.Title>
                        
                        <Button variant="primary">Read more</Button>
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
                        <Card.Title>Pirgong Project</Card.Title>
                        
                        <Button variant="primary">Read more</Button>
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
        </div>
    );
};

export default Blogs;