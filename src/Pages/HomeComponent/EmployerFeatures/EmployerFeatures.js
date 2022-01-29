import React from 'react';
import './EmployerFeatures.css'
import imgE from '../../../images/emmm.png'

const EmployerFeatures = () => {
    return (
        <div style={{ marginTop: '80px' }} className=' container-fluid bg-light'>
            <div className=''>
                <div style={{ paddingTop: '50px' }} className='text-center '>
                    <h3  >Popular Job <span style={{ color: '#e8be2f' }}>Employer</span></h3>
                    <p>One of our jobs has some kind of flexibility option - such as telecommutinga <br /> part-time schedule or a flexible or flextime schedule</p>
                </div>

                <div className=' text-center '>
                    <div style={{ marginTop: '70px' }} className='row ms-auto  '>
                        <div className='col-12 col-lg-4 col-md-4'>
                  <div className='employ-man'>
                       <img src={imgE} alt="" />
                       </div>
                        </div>
                        <div className='col-12 col-lg-8 col-md-8'>
                       <div className='row'>
                       <div className='col-12 col-lg-4 col-md-4 text-center mb-4 '>
                            <div className='py-3 employ '>
                                <h1><i className="fas fa-briefcase"></i></h1>
                                <hr />
                                <h6>Md Rajib </h6>
                                <small>1 job AfganSthan</small>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-4 text-center mb-4 '>
                            <div className='py-3 employ'>
                                <h1><i className="fas fa-briefcase"></i></h1>
                                <hr />
                                <h6>MD Likhon</h6>
                                <small>1 job AfganSthan</small>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-4 text-center mb-4'>
                            <div className='py-3 employ'>
                                <h1><i className="fas fa-briefcase"></i></h1>
                                <hr />
                                <h6>Hasan Arnob</h6>
                                <small>1 job AfganSthan</small>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-4 text-center mb-4'>
                            <div className='py-3 employ'>
                                <h1><i className="fas fa-briefcase"></i></h1>
                                <hr />
                                <h6>Md Rokibul</h6>
                                <small>1 job AfganSthan</small>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-4 text-center mb-4'>
                            <div className='py-3 employ'>
                                <h1><i className="fas fa-briefcase"></i></h1>
                                <hr />
                                <h6>Maria Munni</h6>
                                <small>1 job AfganSthan</small>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 col-md-4 text-center mb-4'>
                            <div className='py-3 employ'>
                                <h1><i className="fas fa-briefcase"></i></h1>
                                <hr />
                                <h6>MD Likhon</h6>
                                <small>1 job AfganSthan</small>
                            </div>
                        </div>
                       </div>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default EmployerFeatures;