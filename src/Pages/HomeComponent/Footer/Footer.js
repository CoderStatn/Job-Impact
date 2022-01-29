import React from 'react';

const Footer = () => {
    return (
        <div>
            <div>
                <div style={{ backgroundColor: '#e8be2f', marginTop: '50px' }}>
                    <div className='container'>
                        <div className='row p-2 text-light ms-5 '>
                            <div className='col-12 col-lg-6 col-md-6'>
                                <div className=' m-3'>
                                    <h4>Still Need Help ?</h4>
                                    <h6>Let us now about your issue and a Professional will reach you out.</h6>
                                </div>
                            </div>
                            <div className='col-12 col-lg-5 col-md-5'>
                                <div className=' m-3 text-end'>
                                    <input className='p-1' type="email" name="" id="" placeholder='Email..' />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <section style={{backgroundColor:'#32373a'}} id="about">
                    <div className="container-fluid">
                        <div className="row p-4 text-light footter">

                            <div className="col-12 col-md-3 col-lg-3 ms-4 mt-4">
                                <h2><span style={{color:'#e8be2f'}}>Career</span> Impacts</h2>
                                <p><small>
                                    Based in Utah, USA, Wanderland is a blog by Markus Thompson. His posts
                                    explore outdoor experiences through photos and diaries with tips & tricks.</small></p>
                              
                            </div>
                            <div className="col-12 col-md-3 col-lg-2 mt-4 ms-5 footer-text">
                            <h6>Catagories</h6>
                                <ul>
                                    <li>Enviroment</li>
                                    <li> Life Style</li>
                                    <li>  Ruls</li>
                                    <li> Motivate</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-12 col-lg-2 mt-4 footer-text">
                                <h6>NewsLetter</h6>
                                <p><span>Sign up for our newsletter and get update about our letest Promotion</span></p>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mt-4 ms-5 footer-text">
                               
                                <h6>Contact</h6>
                                <ul>
                                    <li>Address: Via Venti Settembre , Ireland</li>
                                    <li>Phone: +3244575656</li>
                                    <li>App , Viber, Whatsapp</li>
                                    <li>Email: maria@gmail.com </li>

                                </ul>
                                <div className="d-flex ms-3">
                                    <h1><i className="fab fa-google text-primary "></i></h1>
                                    <h1> <i className="fab fa-twitter text-warning mx-3"></i></h1>
                                    <h1><i className="fab fa-youtube text-danger"></i></h1>
                                </div>
                            </div>

                            

                        </div>
                    </div>
                </section>
                <footer className="col-12 bg-dark text-center text-light py-3">
                    <small >© 2022 CareerImpacts. Designed with  by Programming Hero Team 22</small>
                </footer>
            </div>
        </div>
    );
};

export default Footer;