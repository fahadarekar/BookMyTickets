import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import '../styles/LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8089/auth/signin', {
                username: email, // Ensure this matches your JwtRequest structure
                password,
            });
            console.log("res in line 18", response)
            // Store JWT token in cookies or localStorage
            document.cookie = `token=${response.data.jwtToken}; path=/`;
            navigate('/'); // Redirect to home after successful login
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid username or password');
        }
    };

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-4">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white shadow-lg" style={{ "border-radius": "1.5rem", "border-color": "grey" }}>
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold text-uppercase my-3">Login</h2>
                                    <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                    <form onSubmit={handleLogin}>
                                        <div className="form-outline form-white mb-4">
                                            <input 
                                                type="email" 
                                                placeholder="Email" 
                                                className="form-control form-control-lg email bg-dark text-light"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input 
                                                type="password" 
                                                placeholder="Password" 
                                                className="form-control form-control-lg email bg-dark text-light"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button className="btn btn-outline-primary btn-lg px-5" type="submit">Login</button>
                                    </form>

                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                    <div>
                                        <p className="mb-0">Don't have an account? <NavLink to="/SignUp" className="text-primary fw-bold">Sign Up</NavLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
