import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        const url = `https://nameless-beyond-69188.herokuapp.com/myApplied?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user?.email]);

    console.log(jobs);

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            fetch(`https://nameless-beyond-69188.herokuapp.com/appliedJobs/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        // alert('Succesfully Deleted');
                        Swal.fire(
                            'Great!',
                            'Successfully Removed This Job!'
                        )
                        const remaining = jobs.filter(job => job._id !== id);
                        setJobs(remaining);
                    }
                });
        }
        // console.log(id);
    };

    return (
        <>

            <div className='container'>
                <div className=' row'>
                    <h3><span className='text-warning fw-bold'>{jobs.name}Applied</span>Jobs: {jobs.length}</h3>
                    {
                        jobs.map(job => <div key={job._id} className='col-12 col-lg-6 col-md-6'>
                            <div className='border rounded row p-2 m-1' style={{ backgroundColor: '#dad8d8' }}>
                                <div className=' col-12 col-lg-3 col-md-3' style={{ borderRadius: '100%' }}>
                                    <img width="70%" height="80px" src={job.img} alt="" />
                                </div>

                                <div className=' col-12 col-lg-5 col-md-5'>
                                    <h6 className='fw-bold'>{job.title}</h6>
                                    <small> <span className='fw-bold'>Status:</span> {job.status}</small> <br />
                                </div>

                                <div props={job} className='mt-2 col-12 col-lg-3 col-md-3'>

                                    <button type="button"
                                        style={{ backgroundColor: '#e8be2f' }}
                                        className="btn fw-bold w-100"
                                        onClick={() => handleDelete(job._id)}
                                    >Remove</button>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>

        </>

    );
};

export default AppliedJobs;