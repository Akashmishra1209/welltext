// src/admin/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email,password)
        if (login(email, password)) {
            navigate('/admin/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className='text-center'>Admin Login</h1>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                {error && <p className="text-danger mt-3">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
