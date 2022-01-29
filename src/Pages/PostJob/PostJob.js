import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import 'moment/locale/it.js';
import DatePicker from "react-multi-date-picker";
import useAuth from '../../hooks/useAuth';
import AdminHeader from '../HomeComponent/Dashboard/AdminHeader/AdminHeader';
import Footer from '../HomeComponent/Footer/Footer';

const style = {
    padding: "20px",
    width: "1010px",
    marginBottom: "8px",
    borderColor: "#6c757d"
}

const PostJob = () => {
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
                    alert('Successfully Added');
                    reset();
                }
            });
        console.log(data);
    };

    return (

        <>
            <AdminHeader />
            <div className="my-5">
                <div className="w-100 m-auto my-3">
                    <h3 className="text-center text-danger">Please, Submit New Job</h3>
                    <div className="border w-75 mx-auto">
                        <div className="my-3">


                            <form onSubmit={handleSubmit(onSubmit)}>

                                <select {...register("category", { required: true })} className="form-select p-2 ms-5 w-75 border border-secondary rounded" aria-label="Default select example">
                                    <option selected>Select Category</option>
                                    <option value="Customer Service">Customer Service</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Sales">Sales</option>
                                </select>


                                <select {...register("job_type", { required: true })} className="form-select p-2 ms-5 mt-2 w-75 border border-secondary rounded" aria-label="Default select example">
                                    <option selected>Job Type</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                </select>



                                <input {...register("title", { required: true })} placeholder="Job Title" className="p-2 my-2 ms-5 w-75 border border-secondary rounded" />
                                <br />

                                <textarea {...register("requirement", { required: true })} placeholder="Job Requirements" className="p-2 ms-5 w-75 border border-secondary rounded" />

                                <input {...register("company", { required: true })} placeholder="Company Name" className="p-2 ms-5 w-75 border border-secondary rounded" />
                                <br />

                                <input {...register("country", { required: true })} placeholder="Country" className="p-2 ms-5 mt-2 w-75 border border-secondary rounded" />
                                <br />

                                <input {...register("published", { required: true })} type="date" placeholder="Published" className="p-2 ms-5 mt-2 w-75 border border-secondary rounded" />
                                <br />

                                <input {...register("deadline", { required: true })} type="date" placeholder="Deadline" className="p-2 ms-5 mt-2 w-75 border border-secondary rounded" />
                                <br />


                                <input {...register("img", { required: true })} placeholder="Logo Link" className="p-2 my-2 ms-5 w-75 border border-secondary rounded"
                                />
                                <br />
                                {errors.exampleRequired && <span>This field is required</span>}

                                <input type="submit" value="Submit Job" className="btn btn-danger fw-bold w-25 ms-5" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
};

export default PostJob;