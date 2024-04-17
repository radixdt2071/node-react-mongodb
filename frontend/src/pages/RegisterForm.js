// RegisterForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState({
        username: '',
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
        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }
        setError(newErrors);
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', formData);
            console.log(response.data); // Handle success, e.g., redirect to login page
            navigate('/login');
        } catch (error) {
            console.error(error); // Handle error, e.g., display error message
            if (error.response.status === 500) { // Check for conflict (e.g., duplicate user)
                setError('User with this email or username already exists.');
                // Show alert message
            } else {
                // Handle other errors
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className={"block mb-1 text-sm font-medium " + (error.username ? 'text-red-500' : 'text-gray-700')}>Username</label>
                        <input type="text" className={"w-full p-2 rounded-md border mb-4 " + (error.username ? 'border-red-500' : 'border-gray-300')} name="username" value={formData.username} onChange={handleChange} />
                    </div>
                    <div>
                        <label className={"block mb-1 text-sm font-medium " + (error.email ? 'text-red-500' : 'text-gray-700')}>Email</label>
                        <input type="email" className={"w-full p-2 rounded-md border mb-4 " + (error.email ? 'border-red-500' : 'border-gray-300')} name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label className={"block mb-1 text-sm font-medium " + (error.password ? 'text-red-500' : 'text-gray-700')}>Password</label>
                        <input type="password" className={"w-full p-2 rounded-md border mb-4 " + (error.password ? 'border-red-500' : 'border-gray-300')} name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Register</button>
                </form>

                <p className="text-sm mt-2 font-medium">Already a User? <Link to="/login" className="text-purple-500">Login</Link></p>
            </div>
        </div>


    );
};

export default RegisterForm;
