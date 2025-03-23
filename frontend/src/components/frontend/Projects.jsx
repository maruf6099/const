import React from 'react';
import Header from './../common/Header';
import Footer from '../common/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ChsImg from '../../assets/images/pro1.jpeg'
import Hero from '../common/Hero';

const Projects = () => {
    return (
        <div>
            <Header/>
            <main>
                {/* hero section */}
         <Hero preHeading="You trust our quality"
         heading="Our Projects" text="At HR Construction, we bring your vision to life with quality craftsmanship, attention to detail, and on-time delivery. Specializing in residential and commercial projects,we build strong, sustainable structures that stand the test of time."
         />
                {/* Our project */}
        <section className="section-3 bg-light text-center py-5">
            <div className='container-fluid  py-5'>
                <div className="section-header text-center">
                    <span>Our Project</span>
                    <h2>we believe in building more than just structures – we build trust</h2>
                    <p>Your satisfaction is our priority. We work closely with you, keeping you informed.</p>
                </div>
                <div className="row">
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ChsImg} />
                    <Card.Body>
                        <Card.Title>Pirgong Project</Card.Title>
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
                    <Card.Img variant="top" src={ChsImg} />
                    <Card.Body>
                        <Card.Title>Komolapur Project</Card.Title>
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
                    <Card.Img variant="top" src={ChsImg} />
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
                    <Card.Img variant="top" src={ChsImg} />
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
            </main>
            <Footer/>
        </div>
    );
};

export default Projects;