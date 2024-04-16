// components/TaskList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    // useEffect(() => {
    //     const fetchTasks = async () => {
    //         try {
    //             const response = await axios.get('/api/tasks');
    //             setTasks(response.data);
    //         } catch (error) {
    //             console.error(error);
    //             // Handle error (e.g., display error message)
    //         }
    //     };
    //     fetchTasks();
    // }, []);

    return (
        <div>
            <h1>Task List</h1>
            {/* <ul>
                {tasks.map((task) => (
                    <li key={task._id}>{task.title}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default TaskList;
