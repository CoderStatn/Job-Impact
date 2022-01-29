import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../Footer/Footer';
import BannerNavigation from '../Navigation/BannerNavigation';
import HeaderNavigation from '../Navigation/HeaderNavigation';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState({});

    useEffect(() => {
        fetch(`https://nameless-beyond-69188.herokuapp.com/jobs/${id}`)
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])

    const { user } = useAuth();

    // const onSubmit = (data) => {
    //     const email = user?.email;
    //     data = { ...job, email };
    //     fetch("https://nameless-beyond-69188.herokuapp.com/appliedJobs", {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(data),
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 alert('Your Application Successfully Done');

    //             }
    //         });
    //     // console.log(job);
    // };

    return (
        <div className='mb-4'>
            <HeaderNavigation></HeaderNavigation>
            <div className='details-banner'>
                <BannerNavigation></BannerNavigation>
                <div className='text-light container mt-5 '>
                    <h1 className='fw-bold'>Financial Systems Solutions Developer</h1>
                    <h5 className='fw-bold'>1/03/22 / 2:00Pm</h5>
                </div>
            </div>
            <div style={{ marginTop: '80px' }}>
                <div className='container'>
                    <div>
                        <img width="20%" className='mb-2' src={job.img} alt="" />
                        <h6 className='fw-bold'>{job.title}</h6>
                        <h6>{job.category} </h6>
                        <small> <span className='fw-bold'>Published:</span> {job.published}</small> <br />
                        <small> <span className='fw-bold'>Deadline:</span> {job.deadline}</small>
                    </div>
                    <Link to={`/apply/${job._id}`}>
                        <button style={{ backgroundColor: '#e8be2f' }} className='btn text-light fw-bold'> Apply Now</button>
                    </Link>                    <div>
                        <h5 className='fw-bold my-3'>Job Description</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero ratione officiis sed ad ipsam obcaecati similique, maxime eos, necessitatibus eum doloribus inventore tempore nulla ipsum fugit debitis rerum aut quasi facilis exercitationem, et iure quas. Quam voluptatibus harum adipisci quos molestias eius odit corporis maiores architecto sed. Maiores, quidem.</p>

                    </div>
                    <div>
                        <h4>Requierment:</h4>
                        <p>{job.requirement}</p>
                    </div>
                    {job.status ? <h3 className='bg dark text-light'>Applied</h3> :
                        <Link to={`/apply/${job._id}`}>
                            <button style={{ backgroundColor: '#e8be2f' }} className='btn text-light fw-bold'> Apply Now</button>
                        </Link>
                    }

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;