import React, { useState } from 'react';
import { updateTask } from '../services/taskService';

const TaskList = ({ tasks, refreshTasks }) => {
    const [editingTask, setEditingTask] = useState(null);

    const handleEditClick = (task) => {
        setEditingTask(task);
    };

    const handleUpdateTask = async (e) => {
        e.preventDefault();
        const { title, description, due_date, status } = editingTask;

        try {
            await updateTask(editingTask._id, { title, description, due_date, status });
            setEditingTask(null);
            refreshTasks(); // Refresh tasks list after update
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditingTask({ ...editingTask, [name]: value });
    };

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        <div>
                            <strong>{task.title}</strong> - {task.status}
                        </div>
                        <button onClick={() => handleEditClick(task)}>Update</button>
                    </li>
                ))}
            </ul>

            {editingTask && (
                <form onSubmit={handleUpdateTask}>
                    <h3>Edit Task</h3>
                    <input
                        type="text"
                        name="title"
                        value={editingTask.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                    />
                    <textarea
                        name="description"
                        value={editingTask.description}
                        onChange={handleInputChange}
                        placeholder="Description"
                    />
                    <input
                        type="date"
                        name="due_date"
                        value={editingTask.due_date.split('T')[0]} // Format date for input
                        onChange={handleInputChange}
                    />
                    <select
                        name="status"
                        value={editingTask.status}
                        onChange={handleInputChange}
                    >
                        <option value="pending">Pending</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button type="submit">Save</button>
                    <button onClick={() => setEditingTask(null)}>Cancel</button>
                </form>
            )}
        </div>
    );
};

export default TaskList;
