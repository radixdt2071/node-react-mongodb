// components/TaskForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ match, history }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (match.params.id) {
            // Fetch task details and populate form for editing
        }
    }, [match.params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const taskData = { title, description };
            if (match.params.id) {
                await axios.put(`/api/tasks/${match.params.id}`, taskData);
            } else {
                await axios.post('/api/tasks', taskData);
            }
            history.push('/tasks');
        } catch (error) {
            console.error(error);
            // Handle error (e.g., display error message)
        }
    };

    return (
        <div>
            <h1>{match.params.id ? 'Edit Task' : 'Create Task'}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">{match.params.id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default TaskForm;
