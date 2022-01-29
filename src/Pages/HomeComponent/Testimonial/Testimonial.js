import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "./styles.css";
import SwiperCore, {
    Pagination
} from 'swiper';
import user1 from '../../../images/candidate_01-300x300.jpg';
import user2 from '../../../images/candidate_03-300x300.jpg';
import user3 from '../../../images/candidate_06-300x300.jpg';
import user4 from '../../../images/candidate_03-300x300.jpg';

// install Swiper modules
SwiperCore.use([Pagination]);

const Testimonial = () => {
    return (
        <div style={{ marginTop: '100px' }} className='border ms-5 me-5 p-3'>
            <h3 className='fw-bold m-4'>Our <span style={{ color: '#e8be2f' }}>Testimonial</span></h3>
            <div>
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={{ clickable: true }}
                    className="mySwiper">

                  
                    <SwiperSlide>
                        <div className='row  '>
                        <div className='col-12 col-lg-4 col-md-4'>
                        <img src={user1} alt="" />
                        </div>
                        
                        <div className='col-12 col-lg-8 col-md-8 '>
                            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, deserunt! Modi itaque voluptates laborum corrupti aspernatur recusandae esse velit dolorum reprehenderit distinctio quis, facilis alias, numquam animi quibusdam vero quidem!</h6>
                            <h5 style={{ color: '#e8be2f' }}>Md Likhon --...</h5>
                        </div>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='row  '>
                        <div className='col-12 col-lg-4 col-md-4'>
                        <img src={user2} alt="" />
                        </div>
                        
                        <div className='col-12 col-lg-8 col-md-8'>
                            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, deserunt! Modi itaque voluptates laborum corrupti aspernatur recusandae esse velit dolorum reprehenderit distinctio quis, facilis alias, numquam animi quibusdam vero quidem!</h6>
                            <h5 style={{ color: '#e8be2f' }}>Md Hasan --...</h5>
                        </div>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='row  '>
                        <div className='col-12 col-lg-4 col-md-4'>
                        <img src={user3} alt="" />
                        </div>
                        
                        <div className='col-12 col-lg-8 col-md-8'>
                            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, deserunt! Modi itaque voluptates laborum corrupti aspernatur recusandae esse velit dolorum reprehenderit distinctio quis, facilis alias, numquam animi quibusdam vero quidem!</h6>
                            <h5 style={{ color: '#e8be2f' }}>Munni Khatun --...</h5>
                        </div>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='row  '>
                        <div className='col-12 col-lg-4 col-md-4'>
                        <img src={user4} alt="" />
                        </div>
                        
                        <div className='col-12 col-lg-8 col-md-8'>
                            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, deserunt! Modi itaque voluptates laborum corrupti aspernatur recusandae esse velit dolorum reprehenderit distinctio quis, facilis alias, numquam animi quibusdam vero quidem!</h6>
                            <h5 style={{ color: '#e8be2f' }}>Md Rokibul --...</h5>
                        </div>
                        </div>
                        
                    </SwiperSlide>
                   
                    

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;