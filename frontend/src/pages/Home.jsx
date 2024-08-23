import React from "react";
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from'../assets/images/experience.png';
import Subtitle from './../shared/Subtitle';

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return ( <>
  
  {/* ================== hero section  start ======================== */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center" >
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt="" />
          </div>
          <h1>Journey with us, where moments matter more than <span 
          className="highlight"> miles</span></h1>
          <p>
            Welcome to Moments and Miles, where every journey is a 
            chance to collect unforgettable experiences and create lifelong memories.
            Our mission is to inspire you to explore the world, one moment at a time, 
            and to help you turn your travel dreams into reality.
            </p>
        </div>
        </Col>

        <Col lg="2">
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box hero__video-box mt-4">
          <video src={heroVideo} alt="" controls/>
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt="" />
        </div>
        </Col>

        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/* ================== hero section  start ======================== */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
        <h5 className="services__subtitle">What we serve</h5>
        <h2 className="services__title">We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>

  {/*=========featured tour section start==========*/}
  <section>
    <Container>
    <Row>
      <Col lg = '12' className="mb-5">
      <Subtitle subtitle={'Explore'}/>
      <h2 className="featured__tour-title">Our featured tours</h2>
      </Col>
      <FeaturedTourList />
    </Row>
    </Container>
  </section>
  {/*=========featured tour section end==========*/}


  {/*============experience section start==============*/}
   <section>
    <Container>
      <Row>
        <Col lg='6'>
        <div className="experience__content">
          <Subtitle subtitle={'Experience'}/>

          <h2>With our experience <br /> we will serve you</h2>
          <p>
          At Moments and Miles, we believe that travel is
           about more than just miles traveled – it's about the moments that make life unforgettable. 
            <br />
            With our expertise, we'll take you on a journey that's tailored to your unique style,
             whether that's exploring hidden gems,
             indulging in local cuisine, or simply soaking up the sun.
          </p>
        </div>

        <div className="counter__wrapper d-flex align-items-center gap-5">
          <div className="counter__box">
            <span>12k+</span>
            <h6>Successfull trip</h6>
          </div>
          <div className="counter__box">
            <span>2k+</span>
            <h6>Regular clients</h6>
          </div>
          <div className="counter__box">
            <span>15</span>
            <h6>Years of experience</h6>
          </div>
        </div>
        </Col>
        <Col lg='6'>
        <div className="experience__img">
          <img src={experienceImg} alt="" />
        </div>
        </Col>
      </Row>
    </Container>
   </section>

  {/*============experience section end==============*/}

  {/*=============gallery section start================ */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
        <Subtitle subtitle={'Gallery'}/>
        <h2 className="gallery__title">
          Our clients tour gallery
        </h2>
        </Col>
        <Col lg='12'>
        <MasonryImagesGallery/>
        </Col>
      </Row>
    </Container>
  </section>

  {/*=============gallery section end================ */}

  {/*====================testimonial section start========== */}
   <section>
    <Container>
      <Row>
        <Col lg='12'>
        <Subtitle subtitle={'Clients Experience'} />
        <h2 className="testimonial__title">
          What our clients say
        </h2>
        </Col>
        <Col lg='12'>
        <Testimonial />
        </Col>
      </Row>
    </Container>
   </section>
  {/*====================testimonial section end========== */}
  <Newsletter/>

  </>
  );
};

export default Home;