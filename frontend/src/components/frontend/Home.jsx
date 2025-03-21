import React from 'react'
import { Container } from 'react-bootstrap';

import AboutImg from '../../assets/images/dis.jpeg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SerImg from '../../assets/images/ser1.jpeg'
import ChsImg from '../../assets/images/pro1.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Icon1 from '../../assets/images/icon-1.svg'
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'

const Home = () => {
  return (
    <>
<Header/>
    <main>
        {/* hero section */}
        <section className='section-1'>
        
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
        {/* why choose */}
        <section className='section-4 py-5'>
            <div className="container py-5">
                <div className="section-header text-center">
                    <span>Why choose us</span>
                    <h2>We never compromise on quality</h2>
                    <p>Whether you’re looking to build your dream home or undertake a major renovation, we work closely with you to bring your vision to life</p>
                </div>
                <div className="row pt-4">
                    <div className="col-md-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card-icon">
                                <img src={Icon1} alt="" />
                            </div>
                            <Card.Body>
                        <Card.Title>Pirgong Project</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card-icon">
                                <img src={Icon2} alt="" />
                            </div>
                            <Card.Body>
                        <Card.Title>Pirgong Project</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card-icon">
                                <img src={Icon3} alt="" />
                            </div>
                            <Card.Body>
                        <Card.Title>Pirgong Project</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
    </main>
<Footer/>
    </>
  );
}

export default Home

