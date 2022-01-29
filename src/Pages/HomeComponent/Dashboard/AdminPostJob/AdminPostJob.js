import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import 'moment/locale/it.js';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';

const AdminPostJob = () => {
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://nameless-beyond-69188.herokuapp.com/jobs", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // alert('Successfully Added');
                    Swal.fire(
                        'Great!',
                        'Successfully Added Your Job!'
                    )
                    reset();
                }
            });
        console.log(data);
    };

    return (
        <div className="my-5">
            <div className="w-100 m-auto my-3">
                <h3 className="text-center ">Please, Submit <span className='text-warning'>New Job</span> </h3>
                <div className="border ">
                    <div className="my-3">


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h6 className='ms-5'>Job Category</h6>
                            <select {...register("category", { required: true })} className="form-select p-2 ms-5 w-75 border border-secondary rounded" aria-label="Default select example">
                                <option selected>Select Category</option>
                                <option value="Customer Service">Customer Service</option>
                                <option value="Designer">Designer</option>
                                <option value="Developer">Developer</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Sales">Sales</option>
                            </select>

                            <h6 className='ms-5 my-3'>Job Type</h6>
                            <select {...register("job_type", { required: true })} className="form-select p-2 ms-5 mt-2 w-75 border border-secondary rounded" aria-label="Default select example">
                                <option selected>Job Type</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                            </select>


                            <h6 className='ms-5 my-3'>Job Title</h6>
                            <input {...register("title", { required: true })} placeholder="Job Title" className="p-2 my-2 ms-5 w-75 border border-secondary rounded" />
                            <br />
                            <h6 className='ms-5 my-3'>Job Requirement</h6>

                            <textarea {...register("requirement", { required: true })} placeholder="Job Requirements" className="p-2 ms-5 w-75 border border-secondary rounded" />
                            <h6 className='ms-5 my-3'> Company Name</h6>
                            <input {...register("company", { required: true })} placeholder="Company Name" className="p-2 ms-5 w-75 border border-secondary rounded" />
                            <br />
                            <h6 className='ms-5 my-3'>Job Country</h6>
                            <input {...register("country", { required: true })} placeholder="Country" className="p-2 ms-5 mt-2 w-75 border border-secondary rounded" />
                            <br />
                            <h6 className='ms-5 my-3'>Job Publised</h6>
                            <input {...register("published", { required: true })} type="date" placeholder="Published" className="p-2 ms-5 mt-2 w-75 border border-secondary rounded" />
                            <br />
                            <h6 className='ms-5 my-3'>Job Deadline</h6>
                            <input {...register("deadline", { required: true })} type="date" placeholder="Deadline" className="p-2 ms-5 mt-2 w-75 border border-secondary rounded" />
                            <br />

                            <h6 className='ms-5 my-3'>Comany Image</h6>
                            <input {...register("img", { required: true })} placeholder="Logo Link" className="p-2 my-2 ms-5 w-75 border border-secondary rounded"
                            />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Submit Job" className="btn btn-warning fw-bold w-25 ms-5" />
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminPostJob;