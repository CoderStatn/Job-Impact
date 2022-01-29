import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterCompany.css';
const RegisterCompany = () => {
    return (
        <div style={{ marginTop: '70px' }}>
            <div className='register-banner d-flex justify-content-center align-items-center text-center text-light '>
                <div className=''>
                    <h1 ><i style={{ fontSize: '70px' }} className="fas fa-desktop text-light"></i></h1>
                    <h1>I’M AN EMPLOYER</h1>
                    <p>Signed in companies are able to post new <br /> job offers, searching for candidate...</p>
                    <Link to="/registerCompany">
                        <button style={{ backgroundColor: '#e8be2f' }} className='btn text-light fw-bold'>Register Company</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterCompany;