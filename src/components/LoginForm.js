import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css'
import {NavLink} from 'react-router-dom'

const LoginForm = () => {
    return (
         <>
        <section className="vh-100 gradient-custom">
            <div className="container py-4">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white shadow-lg" style={{ "border-radius": "1.5rem", "border-color": "grey" }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold text-uppercase my-3">Login</h2>
                                    <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                    <div data-mdb-input-init className="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" placeholder="Email" className="form-control form-control-lg email bg-dark text-light" />

                                    </div>

                                    <div data-mdb-input-init className="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" placeholder="Password" className="form-control form-control-lg email bg-dark text-light" />

                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-lg px-5" type="submit">Login</button>

                                    <div className="d-flex justify-content-center text-center mt-0 pt-0">
                                        {/*<a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>*/}
                                    </div>

                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <NavLink to = "/SignUp" className="text-primary fw-bold" >Sign Up</NavLink>
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
export default LoginForm;
