import React from 'react'
import { Container } from 'react-bootstrap';


import Header from '../common/Header';
import Footer from '../common/Footer';
import SerImg from '../../assets/images/ser1.jpeg'
import ChsImg from '../../assets/images/pro1.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Icon1 from '../../assets/images/icon-1.svg'
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import AvtImg from '../../assets/images/avt1.jpg'
import BlgImg from '../../assets/images/blg1.jpeg'
import 'swiper/css';
import {  Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import About from '../common/About';

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
        <About/>
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

        {/* testimonial */}
        <section className='section-5'>
            <div className="container py-5">
                <div className="section-header text-center">
                    <span>Testimonials</span>
                    <h2>What people are saying about us</h2>
                    <p>Whether you’re looking to build your dream home or undertake a major renovation, we work closely with you to bring your vision to life</p>
                    <Swiper
       modules={[Pagination]}              
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="card shadow border-0 p-4 swiper">                   
            <Card.Body>
                <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <div className="contents pt-4 pb-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, repudiandae molestiae itaque esse eius dicta nemo pariatur. Laboriosam ipsa cupiditate ad dolores, dicta ipsum officia, odio reiciendis vitae quibusdam dolorum.</p>
                </div>
                <hr />
                <div className="meta d-flex">
                    <div>
                        <img src={AvtImg} alt="zm" width={50} />
                    </div>
                    <div className='ps-3'>
                        <div className='name'>Linkon Borowse</div>
                        <div>CEO</div>
                    </div>
                </div>
            </Card.Body>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card shadow border-0 p-4 swiper">                   
            <Card.Body>
                <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <div className="contents pt-4 pb-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, repudiandae molestiae itaque esse eius dicta nemo pariatur. Laboriosam ipsa cupiditate ad dolores, dicta ipsum officia, odio reiciendis vitae quibusdam dolorum.</p>
                </div>
                <hr />
                <div className="meta d-flex">
                    <div>
                        <img src={AvtImg} alt="zm" width={50} />
                    </div>
                    <div className='ps-3'>
                        <div className='name'>Linkon Borowse</div>
                        <div>CEO</div>
                    </div>
                </div>
            </Card.Body>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card shadow border-0 p-4 swiper">                   
            <Card.Body>
                <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <div className="contents pt-4 pb-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, repudiandae molestiae itaque esse eius dicta nemo pariatur. Laboriosam ipsa cupiditate ad dolores, dicta ipsum officia, odio reiciendis vitae quibusdam dolorum.</p>
                </div>
                <hr />
                <div className="meta d-flex">
                    <div>
                        <img src={AvtImg} alt="zm" width={50} />
                    </div>
                    <div className='ps-3'>
                        <div className='name'>Linkon Borowse</div>
                        <div>CEO</div>
                    </div>
                </div>
            </Card.Body>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card shadow border-0 p-4 swiper">                   
            <Card.Body>
                <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>
                <div className="contents pt-4 pb-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, repudiandae molestiae itaque esse eius dicta nemo pariatur. Laboriosam ipsa cupiditate ad dolores, dicta ipsum officia, odio reiciendis vitae quibusdam dolorum.</p>
                </div>
                <hr />
                <div className="meta d-flex">
                    <div>
                        <img src={AvtImg} alt="zm" width={50} />
                    </div>
                    <div className='ps-3'>
                        <div className='name'>Linkon Borowse</div>
                        <div>CEO</div>
                    </div>
                </div>
            </Card.Body>
        </div>
      </SwiperSlide>
    </Swiper>
                   
                </div>
            </div>
        </section>

        {/* Blogs & news */}
        <section className="section-6 py-6">
            <div className="container ">
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
                    <Card.Img variant="top" src={ChsImg} />
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
    </>
  );
}

export default Home

