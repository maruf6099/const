import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import SerImg from '../../assets/images/ser1.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Services = () => {
    return (
        <div>
            <Header/>
            {/* hero section */}
         <Hero preHeading="You trust our quality"
         heading="Services" text="At HR Construction, we bring your vision to life with quality craftsmanship, attention to detail, and on-time delivery. Specializing in residential and commercial projects,we build strong, sustainable structures that stand the test of time."
         />

         {/* our services */}
        <section className="section-3 bg-light text-center py-5">
            <div className='container-fluid  py-5'>
                <div className="section-header text-center">
                    <span>Our Services</span>
                    <h2>Our construction services</h2>
                    <p>Explore our portfolio to see the wide variety of successful projects we’ve completed</p>
                </div>
                <div className="row">
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={SerImg} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={SerImg} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={SerImg} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={SerImg} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                        </div>
                    </div>
                </div>
                <div className="row">
                
                </div>
            </div>
        </section>
            <Footer/> 
        </div>
    );
};

export default Services;