import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoPlay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };
  return (
    <Slider { ... settings}>
        <div className="testimonial py-4 px-3">
            <p>Our family reunion in Hawaii was a huge success, thanks to Moments and Miles.
                 The accommodations, activities, and dining recommendations were all top-notch.
                 We can't wait to plan our next family adventure with you!"</p>
        <div className="d-flex align-items-center-gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>David Lee</h6>
                <p>Customer</p>
            </div>
        </div>

        </div>
        <div className="testimonial py-4 px-3">
            <p>Our anniversary trip to Paris was everything we dreamed of and more. Moments and Miles
                took care of every detail, from the Eiffel Tower dinner to the Seine
                 River cruise. Merci for the unforgettable memories!"</p>
        <div className="d-flex align-items-center-gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Emily Thompson</h6>
                <p>Customer</p>
            </div>
        </div>

        </div>
        <div className="testimonial py-4 px-3">
            <p>Our luxury vacation to the Maldives was truly fit for royalty. Moments and Miles arranged for a private villa, personal butler,
                 and gourmet dining experiences.
                 We felt like we were in a dream world. Thank you for the ultimate in luxury travel!"</p>
        <div className="d-flex align-items-center-gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Ethan Martin</h6>
                <p>Customer</p>
            </div>
            
        </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Our luxury vacation to the Maldives was truly fit for royalty. Moments and Miles arranged for a private villa, personal butler,
                 and gourmet dining experiences.
                 We felt like we were in a dream world. Thank you for the ultimate in luxury travel!"</p>
        <div className="d-flex align-items-center-gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Jack</h6>
                <p>Customer</p>
            </div>
            
        </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Our luxury vacation to the Maldives was truly fit for royalty. Moments and Miles arranged for a private villa, personal butler,
                 and gourmet dining experiences.
                 We felt like we were in a dream world. Thank you for the ultimate in luxury travel!"</p>
        <div className="d-flex align-items-center-gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Maya</h6>
                <p>Customer</p>
            </div>
            
        </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Our luxury vacation to the Maldives was truly fit for royalty. Moments and Miles arranged for a private villa, personal butler,
                 and gourmet dining experiences.
                 We felt like we were in a dream world. Thank you for the ultimate in luxury travel!"</p>
        <div className="d-flex align-items-center-gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>David Frankly</h6>
                <p>Customer</p>
            </div>
            
        </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Our luxury vacation to the Maldives was truly fit for royalty. Moments and Miles arranged for a private villa, personal butler,
                 and gourmet dining experiences.
                 We felt like we were in a dream world. Thank you for the ultimate in luxury travel!"</p>
        <div className="d-flex align-items-center-gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Joe Bid</h6>
                <p>Customer</p>
            </div>
            
        </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Our luxury vacation to the Maldives was truly fit for royalty. Moments and Miles arranged for a private villa, personal butler,
                 and gourmet dining experiences.
                 We felt like we were in a dream world. Thank you for the ultimate in luxury travel!"</p>
        <div className="d-flex align-items-center-gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Olivia Cruise</h6>
                <p>Customer</p>
            </div>
            
        </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Our luxury vacation to the Maldives was truly fit for royalty. Moments and Miles arranged for a private villa, personal butler,
                 and gourmet dining experiences.
                 We felt like we were in a dream world. Thank you for the ultimate in luxury travel!"</p>
        <div className="d-flex align-items-center-gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Daenny</h6>
                <p>Customer</p>
            </div>
            
        </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Our luxury vacation to the Maldives was truly fit for royalty. Moments and Miles arranged for a private villa, personal butler,
                 and gourmet dining experiences.
                 We felt like we were in a dream world. Thank you for the ultimate in luxury travel!"</p>
        <div className="d-flex align-items-center-gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Ethan Martin</h6>
                <p>Customer</p>
            </div>
            
        </div>
        

        </div>
    </Slider>
  );
};

export default Testimonial;