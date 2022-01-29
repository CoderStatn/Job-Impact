import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import company from '../../../images/porsche-100x100.png';
import './JobFeatures.css';

const JobFeatures = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const url = `https://nameless-beyond-69188.herokuapp.com/jobs`;
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div className='container'>
            <div style={{ marginTop: '80px' }} className=' row ms-3'>
                <h3 className='m-3'><span style={{ color: '#e8be2f' }}>Recent</span>Jobs</h3>

                {
                    jobs.slice(0, 4).map(job => <div className='col-12 col-lg-6 col-md-6'>
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

                {/* <div className='col-12 '>
                    <div className='job-features row p-3'>
                        <div className=' col-12 col-lg-3 col-md-3' style={{ borderRadius: '100%' }}>
                            <img width="70%" height="110px" src={company} alt="" />
                        </div>

                        <div className=' col-12 col-lg-5 col-md-5'>
                            <h5 className='fw-bold'>Front End Developer (remotly)</h5>
                            <h6>India , Dilhi, Road-2044 TMS </h6>
                            <small>09:00Am To 06:00Pm</small>
                        </div>

                        <div className=' mt-2 col-12 col-lg-3 col-md-3'>
                            <Link to="/jobDetails">
                                <button style={{ backgroundColor: '#e8be2f' }} className='btn text-light'>See Details</button>
                            </Link>
                        </div>

                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default JobFeatures;