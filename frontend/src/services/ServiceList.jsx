import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import CustomizationImg from '../assets/images/customization.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Plan ahead with our real-time weather updates.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Unlock the secrets of your destination with our guides.",
    },
    {
        imgUrl: CustomizationImg,
        title: "Customization",
        desc: "Personalized travel planning: every detail, every desire.",
    },
]

const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item,index)=> (<Col lg='3' md='6' sm='12' className='mb-4' key={index}><ServiceCard item=
        {item} />
        </Col>
        ))
    }
    </>
  );
};

export default ServiceList;