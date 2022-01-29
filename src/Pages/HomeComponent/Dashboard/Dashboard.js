import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import AdminAllJobs from './AdminAllJobs/AdminAllJobs';
import AdminHeader from './AdminHeader/AdminHeader';
import AdminPostJob from './AdminPostJob/AdminPostJob';
import AppliedJobs from './AppliedJobs/AppliedJobs';
// import MakeAdmin from './MakeAdmin/MakeAdmin';

const Dashboard = () => {
    const { user, logOut, isLoading } = useAuth();

    const [singleUser, setSingleUser] = useState([]);
    // console.log(user.email)

    useEffect(() => {
        const url = `https://nameless-beyond-69188.herokuapp.com/users/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleUser(data))
    }, [user.email]);

    // console.log(singleUser.user_type);
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
        <>
            <AdminHeader />

            <div className="d-flex align-items-start">

                <div style={{ height: '100vh', backgroundColor: '#e8be2f' }} className="text-light border-0 rounded-3 w-25 p-5 nav flex-column nav-pills col-md-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                    <button type="button"
                        className="nav-link text-light bg-dark fw-bold w-75 active" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true"
                    >Dashboard</button>



                    {
                        singleUser.user_type === 'CEO' ? <>
                            <button className="nav-link bg-dark text-light  fw-bold w-75 my-3" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-jobs" type="button" role="tab" aria-controls="v-pills-jobs" aria-selected="true">Manage Jobs</button>

                            <button className="nav-link bg-dark text-light fw-bold w-75" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-postJob" type="button" role="tab" aria-controls="v-pills-postJob" aria-selected="true">Post A Job</button>

                        </>
                            :
                            <button className="nav-link bg-dark text-light mt-3 fw-bold w-75" id="v-pills-appliedJobs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-appliedJobs" type="button" role="tab" aria-controls="v-pills-appliedJobs" aria-selected="true">Applied Jobs </button>

                    }


                    <button type="button" onClick={logOut}
                        className="text-light my-3 btn bg-dark fw-bold w-75"
                    >LogOut</button>

                </div>


                <div style={{ height: '100vh' }} className="tab-content w-75 p-2 col-md-8" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashbaord-tab">
                        <h3 className='text-center my-5'>Welocme to {user?.displayName} Dashboard</h3>
                    </div>

                    <div className="tab-pane fade show " id="v-pills-jobs" role="tabpanel" aria-labelledby="v-pills-jobs-tab">
                        <AdminAllJobs />
                    </div>

                    <div className="tab-pane fade show" id="v-pills-postJob" role="tabpanel" aria-labelledby="v-pills-postJob-tab">
                        <AdminPostJob></AdminPostJob>
                    </div>

                    <div className="tab-pane fade show" id="v-pills-appliedJobs" role="tabpanel" aria-labelledby="v-pills-appliedJobs-tab">
                        <AppliedJobs></AppliedJobs>
                    </div>


                </div>
            </div>

        </>
    );
};

export default Dashboard;