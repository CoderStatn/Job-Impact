import React, { useState } from 'react';
import { Form, Button, Nav, Spinner, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminHeader from '../../HomeComponent/Dashboard/AdminHeader/AdminHeader';
import Footer from '../../HomeComponent/Footer/Footer';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const { user, authError, registerUser, isLoading } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

        console.log(newLoginData);
    }

    const handleRegister = (e) => {
        if (loginData.password !== loginData.password1) {
            alert('Please enter your right password');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, loginData.user_type, navigate);
        e.preventDefault();
    }

    return (
        <>
            <AdminHeader />
            <div>
                <h3 className="d-flex justify-content-center mt-5">Please Sign Up Here</h3>
                {!isLoading && <Form onSubmit={handleRegister} className=" w-50 container container-fluid my-4">

                    <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
                        <Form.Label>User Name </Form.Label>
                        <Form.Control onBlur={handleOnBlur} name="name" type="text" placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleOnBlur} name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleOnBlur} name="password" type="password" placeholder="Enter Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleOnBlur} name="password1" type="password" placeholder="Confirm Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
                        <Form.Label>Candidate or CEO ?</Form.Label>
                        <select onBlur={handleOnBlur} className="form-select p-2 w-100 border border-secondary rounded" name='user_type' aria-label="Default select example" required>
                            <option selected>Select Options</option>
                            <option value="Candidate">Candidate</option>
                            <option value="CEO">CEO</option>
                        </select>
                    </Form.Group>


                    <Button className="w-25 p-2 fw-bold" variant="primary" type="submit">
                        Sign Up
                    </Button>
                    {/* Go to Sign Up Page*/}
                    <Nav.Link as={Link} to="/login" className="fw-bold m-3">Already Signed Up? Please Log In</Nav.Link>
                </Form>}

                {isLoading && <div className="spinner-grow text-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}

                {user?.email && <Alert variant="success">
                    User signed up successfully!
                </Alert>}
                {
                    authError && <Alert variant="danger">
                        {authError.message || authError}
                    </Alert>
                }
            </div>

            <Footer />
        </>
    );
};

export default Register;