import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import 'moment/locale/it.js';
import DatePicker from "react-multi-date-picker";
import AdminHeader from '../HomeComponent/Dashboard/AdminHeader/AdminHeader';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../HomeComponent/Footer/Footer';
import Swal from 'sweetalert2';

const UpdateJob = () => {
    const [job, setJob] = useState({});
    const { id } = useParams();
    const { user } = useAuth();
    console.log(id);

    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        const url = `https://nameless-beyond-69188.herokuapp.com/jobs/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setJob(data))
    }, []);


    const updateOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const updateJob = { ...job }
        updateJob[field] = value;
        // console.log(newInfo);
        setJob(updateJob);
        e.preventDefault();
    }

    console.log(job);


    const onSubmit = (data) => {
        data.email = user?.email;
        fetch(`https://nameless-beyond-69188.herokuapp.com/jobs/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // alert('Successfully Updated');
                    Swal.fire(
                        'Great!',
                        'Successfully Updated This Job!'
                    )
                    reset();
                }
            });
        // console.log(data);
    };



    return (

        <div>
            <AdminHeader />

            <h3 className='text-center mt-5'>Update the information of {job.title} job</h3>

            <div className="d-flex justify-content-center">

                <form className='w-50' onSubmit={handleSubmit(onSubmit)}>

                    <select {...register("category", { required: true })} name="category" onChange={updateOnChange} value={job.category || ''} className="form-select p-2 ms-5 w-75 border border-secondary rounded" aria-label="Default select example">
                        <option selected>Select Category</option>
                        <option value="Customer Service">Customer Service</option>
                        <option value="Designer">Designer</option>
                        <option value="Developer">Developer</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                    </select>


                    <select {...register("job_type", { required: true })} name='job_type' onChange={updateOnChange} value={job.job_type || ''} className="form-select p-2 ms-5 mt-2 w-75 border border-secondary rounded" aria-label="Default select example">
                        <option selected>Job Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                    </select>



                    <input {...register("title", { required: true })} name='title' onChange={updateOnChange} value={job.title || ''} placeholder="Job Title" className="p-2 my-2 ms-5 w-75 border border-secondary rounded" />
                    <br />



                    <textarea {...register("requirement", { required: true })} name='requirement' onChange={updateOnChange} value={job.requirement || ''} placeholder="Job Requirements" className="p-2 ms-5 w-75 border border-secondary rounded" />
                    {/* <br /> */}
                    <input {...register("company", { required: true })} name='company' onChange={updateOnChange} value={job.company || ''} placeholder="Company Name" className="p-2 ms-5 w-75 border border-secondary rounded" />
                    <br />

                    <input {...register("country", { required: true })} name='country' onChange={updateOnChange} value={job.country || ''} placeholder="Country" className="p-2 ms-5 mt-2 w-75 border border-secondary rounded" />
                    <br />

                    <input {...register("published", { required: true })} name='published' onChange={updateOnChange} type="date" placeholder="Published Date" className="p-2 ms-5 mt-2 w-75 border border-secondary rounded" />
                    <br />

                    <input {...register("deadline", { required: true })} name='deadline' onChange={updateOnChange} type="date" placeholder="Deadline" className="p-2 ms-5 mt-2 w-75 border border-secondary rounded" />
                    <br />

                    <input {...register("img", { required: true })} name='img' onChange={updateOnChange} value={job.img || ''} placeholder="Logo Link" className="p-2 my-2 ms-5 w-75 border border-secondary rounded"
                    />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input style={{ backgroundColor: '#e8be2f' }} type="submit" value="Update" className="btn btn-danger border-0 text-dark fw-bold w-25 ms-5" />
                </form>
            </div>

            <Footer />

        </div>

    );
};

export default UpdateJob;