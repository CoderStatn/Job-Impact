import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../HomeComponent/Footer/Footer';
import BannerNavigation from '../HomeComponent/Navigation/BannerNavigation';
import HeaderNavigation from '../HomeComponent/Navigation/HeaderNavigation';

const Company = () => {
    const [companys, setCompanys] = useState([]);

    useEffect(() => {
        fetch('https://nameless-beyond-69188.herokuapp.com/company')
            .then(res => res.json())
            .then(data => setCompanys(data))


    }, [])

    // if(loading){
    //     return(
    //         <div class="d-flex justify-content-center mt-4">
    //         <div class="spinner-border" role="status">
    //           <span class="visually-hidden">Loading...</span>
    //         </div>
    //       </div>
    //     )
    // }
    return (
        <div>
            <HeaderNavigation></HeaderNavigation>
            <div className='resume-banner'>
                <BannerNavigation></BannerNavigation>
                <div className='text-center mt-5'>
                    <input style={{ width: '40%' }} className='p-2 me-2' type="text" placeholder='Text' />
                    <button style={{ backgroundColor: '#e8be2f' }} className='btn p-2 text-light'> Search</button>
                </div>

            </div>
            <div className='container'>
                <div style={{ marginTop: '30px' }} className=' row ms-3'>
                    <h3 className='m-3'><span style={{ color: '#e8be2f' }}>All</span>Jobs</h3>
                    {
                        companys?.map(company =>
                            <div className='col-12 col-lg-12 col-md-12'>
                                <div className='job-features row p-1 m-1'>
                                    <div className=' col-12 col-lg-3 col-md-3' style={{ borderRadius: '100%' }}>
                                        <img width="70%" height="110px" src={company.logo} alt="" />
                                    </div>

                                    <div className=' col-12 col-lg-5 col-md-5'>
                                        <h6 className='fw-bold'>{company.name}</h6>
                                        <small>{company.email} </small> <br />
                                        <small>{company.link}</small>
                                    </div>

                                    <div className=' mt-2 col-12 col-lg-3 col-md-3'>
                                        <a href={company?.link} target="_blank" rel="noopener noreferrer">

                                            <button style={{ backgroundColor: '#e8be2f' }} className='btn text-light'> See Web Site</button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        )
                    }


                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Company;