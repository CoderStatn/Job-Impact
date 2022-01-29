import React from 'react';
import BannerNavigation from '../Navigation/BannerNavigation';
import './Banner.css';
const Banner = () => {
    return (
        <div >
            <div className='banner-photo'>
                <div className=''>
                    <BannerNavigation></BannerNavigation>
                </div>
                <div className='container'>
                    <div style={{ marginTop: '150px' }} className='text-light ms-3'>
                        <h1> <span style={{ color: '#e8be2f' }}> 5,000+</span>Browse Jobs</h1>
                        <p style={{ fontSize: '23px', marginTop: '20px', marginBottom: '20px' }}>
                            More than 5000 trusted jobs are available on the website for candidates to send to <br /> their applications and exactly find their expected jobs

                        </p>
                    </div>
                    <div className=''>
                    <div className='row'>
                        <div className='col-12 col-lg-3 col-md-3'>
                            <input style={{ width:'85%'}} className='p-2 ms-3' type="text" placeholder='Text' />
                        </div>
                        <div className='col-12 col-lg-3 col-md-3'>
                        <input style={{ width:'83%'}}  type="text" className="py-2" aria-label="Text input with dropdown button" placeholder='Job Categories' />
                            <button className="btn py-2 mb-1 btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Front-End Developer</a></li>
                                <li><a className="dropdown-item" href="#">React Developer</a></li>
                                <li><a className="dropdown-item" href="#">Full Stack Developer</a></li>
                                <li><a className="dropdown-item" href="#">Software Developer</a></li>
                            </ul>
                        </div>
                        <div className='col-12 col-lg-3 col-md-3'>
                        <input style={{ width:'83%'}}  placeholder='Job Location'  type="text" className="py-2" aria-label="Text input with dropdown button" />
                            <button className="btn py-2 mb-1 btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Bangladesh</a></li>
                                <li><a className="dropdown-item" href="#">China</a></li>
                                <li><a className="dropdown-item" href="#">Singapur</a></li>
                                <li><a className="dropdown-item" href="#">India</a></li>
                            </ul>
                        </div>
                        <div className='col-12 col-lg-3 col-md-3'>
                        <button style={{backgroundColor:'#e8be2f', width:'160px'}} className='btn '>
                            Search
                        </button>
                        </div>
                        

                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;