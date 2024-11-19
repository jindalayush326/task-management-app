import React, { useState } from 'react';
import { createTask } from '../services/taskService';

const TaskForm = ({ refreshTasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTask({ title, description, due_date: dueDate });
        refreshTasks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <input type="date" onChange={(e) => setDueDate(e.target.value)} />
            <button type="submit">Create Task</button>
        </form>
    );
};

export default TaskForm;
