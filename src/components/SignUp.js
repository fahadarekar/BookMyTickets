import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import '../styles/LoginForm.css'
import Navbar from './Navbar'

const SignUp = () => {
    return (
        <>
        
        <section className="vh-100 gradient-custom">
            <div className="container py-4">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white shadow-lg" style={{ "border-radius": "1.5rem", "border-color": "grey" }}>
                            <div className="card-body p-5 pb-0 pt-1 text-center">

                                <div className="mb-md-5 mt-md-4">

                                    <h2 className="fw-bold text-uppercase my-1">SignUp</h2>
                                    <p className="text-white-50 mb-3">Please enter your SignUp Details!</p>

                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <input type="email" id="typeFNameX" placeholder="Enter Your First Name" className="form-control form-control-lg email bg-dark text-light" />

                                    </div>

                                    <div data-mdb-input-init className="form-outline form-white mb-2">
                                        <input type="text" id="typeLNamedX" placeholder="Enter Your Last Name" className="form-control form-control-lg email bg-dark text-light" />
                                    </div>
                                    <div data-mdb-input-init className="form-outline form-white mb-2">

                                        <input type="text" id="typeLNamedX" placeholder="Enter Your Mobile Number" className="form-control form-control-lg email bg-dark text-light" />
                                    </div>
                                    <div data-mdb-input-init className="form-outline form-white mb-2">
                                        <input type="email" id="typeLNamedX" placeholder="Enter Your Email" className="form-control form-control-lg email bg-dark text-light" />
                                    </div>
                                    <div data-mdb-input-init className="form-outline form-white mb-2">
                                        <input type="password" id="typeLNamedX" placeholder="Set Your Password" className="form-control form-control-lg email bg-dark text-light" />
                                    </div>
                                    <div data-mdb-input-init className="form-outline form-white mb-2">
                                        <input type="password" id="typeLNamedX" placeholder="Confirm Your Password" className="form-control form-control-lg email bg-dark text-light" />
                                    </div>

                                    <p className="small mb-3"><a className="text-white-50" href="#!">Need Help?</a></p>

                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-lg px-5" type="submit">SignUp</button>



                                </div>

                                <div>
                                    <p className="mb-2">Already have an account? <NavLink to = "/LoginForm" className="text-primary fw-bold" >Login</NavLink>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );

};
export default SignUp;
