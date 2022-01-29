import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Footer from '../Footer/Footer';
import BannerNavigation from '../Navigation/BannerNavigation';
import HeaderNavigation from '../Navigation/HeaderNavigation';

const CompanyRegisterForm = () => {
    const { register, handleSubmit } = useForm();

    //post order
    const onSubmit = data => {
        fetch('https://nameless-beyond-69188.herokuapp.com/registerCompany', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Register Successfully!'
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
            <div className='container mt-2'>
                <div className='row '>

                    <div className='col-12 col-lg-12 col-md-12'>
                        <div className='text-center formStyle'>
                            <h1 className="mb-4 text-center fw-bold text-dark"> <span className='text-warning'>Register</span>  Form</h1>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <h5 className='mt-3'>Company Name</h5>
                                <input {...register("company")} placeholder="Company Name" /> <br />
                                <h5 className='mt-3'>Company Manager Name</h5>
                                <input {...register("name")} placeholder="manager Name" /> <br />
                                <h5 className='mt-3'>Company Logo</h5>
                                <input type="url" {...register("logo")} placeholder="Logo" /> <br />
                                <h5 className='mt-3'>Company Email</h5>
                                <input {...register("email")} placeholder="email" /> <br />
                                <h5 className='mt-3'> Address</h5>
                                <input type="text" {...register("address")} placeholder="Address" /> <br />
                                <h5 className='mt-3'>Company Web Site Link</h5>
                                <input type="link" {...register("link")} placeholder=" Web site Link" /> <br />
                                <h5 className='mt-3'> Number</h5>
                                <input type="number" {...register("number")} placeholder="Phone Number" /> <br />
                                <input className='bg-warning mt-3 text-light' type="submit" />

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CompanyRegisterForm;