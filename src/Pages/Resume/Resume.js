import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BannerNavigation from '../HomeComponent/Navigation/BannerNavigation';
import HeaderNavigation from '../HomeComponent/Navigation/HeaderNavigation';
import './Resume.css';
import user from '../../images/user1-100x100.jpg'
import Footer from '../HomeComponent/Footer/Footer';

const Resume = () => {
    const [allResume, setAllResume, isLoading] = useState([]);

    useEffect(() => {
        fetch('https://nameless-beyond-69188.herokuapp.com/resume')
            .then(res => res.json())
            .then(data => setAllResume(data))


    }, [allResume])

    if (isLoading) {
        return (
            <div class="d-flex justify-content-center mt-4">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
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
                <div style={{ marginTop: '30px' }} className=' row ms-3 '>
                    <h3 className='m-3'><span style={{ color: '#e8be2f' }}>All</span>Jobs</h3>
                    {
                        allResume?.map(resume =>
                            <div className='col-12 w-75 col-lg-12 col-md-12'>
                                <div className='job-features row p-1 m-1'>

                                    <div className=' col-12 col-lg-8 col-md-8'>
                                        <h6 className='fw-bold'>{resume.name}</h6>
                                        <small>{resume.link} </small> <br />
                                    </div>

                                    <div className=' mt-2 col-12 col-lg-3 col-md-3'>

                                        <button style={{ backgroundColor: '#e8be2f' }} className='btn text-light'> Select</button>

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

export default Resume;