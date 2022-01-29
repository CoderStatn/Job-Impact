import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const HeaderNavigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">

                <div className="container ">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-3  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <h6 style={{ color: '#e8be2f' }} >Hotine:<span style={{ color: 'black' }}>+88454-359-343</span></h6>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-5 mb-2 mb-lg-0">

                                <div className='d-flex navigation-bar'>
                                    <li className="nav-item active ">
                                        <i class="fab fa-facebook"></i>
                                    </li>
                                    <li className="nav-item active ">
                                        <i class="fab fa-instagram-square"></i>                   </li>
                                    <li className="nav-item active ">
                                    <i class="fab fa-twitter"></i>                                    </li>
                                    <li className="nav-item active ">
                                    <i class="fab fa-google-plus"></i>                                    </li>

                                </div>

                            </ul>
                        </form>
                    </div>
                </div>

            </nav>
            
        </div>
    );
};

export default HeaderNavigation;