import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import company from '../../images/porsche-100x100.png';
import Footer from '../HomeComponent/Footer/Footer';
import BannerNavigation from '../HomeComponent/Navigation/BannerNavigation';
import HeaderNavigation from '../HomeComponent/Navigation/HeaderNavigation';
import './Jobs.css';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const url = `https://nameless-beyond-69188.herokuapp.com/jobs`;
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div>
            <HeaderNavigation></HeaderNavigation>
            <div className='job-banner'>
                <BannerNavigation></BannerNavigation>
                <div className='text-center mt-5'>
                    <input style={{ width: '40%' }} className='p-2 me-2' type="text" placeholder='Text' />
                    <button style={{ backgroundColor: '#e8be2f' }} className='btn p-2 text-light'> Search</button>
                </div>

            </div>
            <div className='container my-5'>
                <div className=' row ms-3 '>
                    <h3 className='m-3'><span style={{ color: '#e8be2f' }}>All</span>Jobs</h3>

                    {
                        jobs.map(job => <div className='col-12 col-lg-6 col-md-6'>
                            <div className='job-features row py-2 m-1 border rounded'>
                                <div className=' col-12 col-lg-3 col-md-3' style={{ borderRadius: '100%' }}>
                                    <img width="70%" height="60px" src={job.img} alt="" />
                                </div>

                                <div className=' col-12 col-lg-5 col-md-5'>
                                    <h6 className='fw-bold'>{job.title}</h6>
                                    <h6>{job.category} </h6>
                                    <small> <span className='fw-bold'>Published:</span> {job.published}</small> <br />
                                    <small> <span className='fw-bold'>Deadline:</span> {job.deadline}</small>
                                </div>

                                <div className=' mt-2 col-12 col-lg-3 col-md-3'>
                                    <Link to={`/jobDetails/${job._id}`} >
                                        <button style={{ backgroundColor: '#e8be2f' }} className='btn text-dark'> Details</button>
                                    </Link>
                                </div>

                            </div>
                        </div>)
                    }

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Jobs;