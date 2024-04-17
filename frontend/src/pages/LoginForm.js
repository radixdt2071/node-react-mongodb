// components/LoginForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }
        setError(newErrors);
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', formData);
            // Store token in local storage or cookie
            console.log(response.data.token);
            // Redirect to task list page or show success message
            navigate('/tasks');
        } catch (error) {
            console.error(error);
            // Handle error (e.g., display error message)
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-80">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className={"block mb-1 text-sm font-medium " + (error.email ? 'text-red-500' : 'text-gray-700')}>
                            Email address
                        </label>
                        <input type="email" className={"w-full p-2 rounded-md border mb-4 " + (error.email ? 'border-red-500' : 'border-gray-300')} name="email" value={formData.email} onChange={handleChange} />
                        <label htmlFor="password" className={"block mb-1 text-sm font-medium " + (error.password ? 'text-red-500' : 'text-gray-700')}>
                            Password
                        </label>
                        <input type="password" className={"w-full p-2 rounded-md border mb-4 " + (error.password ? 'border-red-500' : 'border-gray-300')} name="password" value={formData.password} onChange={handleChange} />
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Login</button>
                    </form>
                    <p className="text-sm mt-2 font-medium">Not a User? <Link to="/register" className="text-purple-500">Register</Link></p>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
