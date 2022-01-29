import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import BannerNavigation from '../../Navigation/BannerNavigation';
import HeaderNavigation from '../../Navigation/HeaderNavigation';
import './ApplyJob.css'

const ApplyJobForm = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [apply, setApply] = useState({});
    const { register, handleSubmit } = useForm();


    // get Apply id 
    useEffect(() => {
        fetch(`https://nameless-beyond-69188.herokuapp.com/jobs/${id}`)
            .then(res => res.json())
            .then(data => setApply(data))
    }, [])

    console.log(apply);

    //post order
    const onSubmit = data => {
        data.title = `${apply.title}`;
        data.img = `${apply.img}`;
        data.email = `${user?.email}`;
        data.status = 'Applied';
        fetch(`https://nameless-beyond-69188.herokuapp.com/appliedJobs/${id}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Apply Successfully!'
                    )

                }

                console.log(data);
            })
    };

    return (

        <div>
            <HeaderNavigation></HeaderNavigation>
            <div className='resume-banner'>
                <BannerNavigation></BannerNavigation>
            </div>
            <div className='container mt-5'>
                <div className='row '>

                    <div className='col-12 col-lg-12 col-md-12'>
                        <div className='text-center formStyle'>
                            <h1 className="mb-4 text-center fw-bold text-dark">Apply <span className='text-warning'>Form</span></h1>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <h5 className='mt-3'>Your Name</h5>
                                <input {...register("name")} placeholder="Name" /> <br />
                                <h5 className='mt-3'>Your Email</h5>
                                <input {...register("email")} placeholder="email" value={user?.email} disabled /> <br />
                                <h5 className='mt-3'>Your Address</h5>
                                <input type="text" {...register("address")} placeholder="Address" /> <br />
                                <h5 className='mt-3'>Resume Link</h5>
                                <input type="link" {...register("link")} placeholder="Resume Link" /> <br />
                                <h5 className='mt-3'>Your Number</h5>
                                <input type="number" {...register("number")} placeholder="Phone Number" /> <br />
                                <input className='bg-warning text-light' type="submit" />

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ApplyJobForm;