import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import '../styles/LoginForm.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8089/api/auth/signup', {
                username,
                email,
                password,
            });
            alert(response.data); // Show success message
            navigate('/LoginForm'); // Redirect to login after successful signup
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-4">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white shadow-lg" style={{ "border-radius": "1.5rem", "border-color": "grey" }}>
                            <div className="card-body p-5 pb-0 pt-1 text-center">
                                <div className="mb-md-5 mt-md-4">
                                    <h2 className="fw-bold text-uppercase my-1">Sign Up</h2>
                                    <p className="text-white-50 mb-3">Please enter your Sign Up Details!</p>

                                    <form onSubmit={handleSignUp}>
                                        <div className="form-outline mb-2">
                                            <input 
                                                type="text" 
                                                placeholder="Name" 
                                                className="form-control form-control-lg email bg-dark text-light"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-outline mb-2">
                                            <input 
                                                type="email" 
                                                placeholder="Enter Your Email" 
                                                className="form-control form-control-lg email bg-dark text-light"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-outline mb-2">
                                            <input 
                                                type="password" 
                                                placeholder="Set Your Password" 
                                                className="form-control form-control-lg email bg-dark text-light"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button className="btn btn-outline-primary btn-lg px-5" type="submit">Sign Up</button>
                                    </form>

                                    <div>
                                        <p className="mb-2">Already have an account? <NavLink to="/LoginForm" className="text-primary fw-bold">Login</NavLink></p>
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

export default SignUp;
