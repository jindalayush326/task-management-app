import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const fetchTasks = async () => axios.get(API_URL);

export const createTask = async (task) => axios.post(API_URL, task);

export const updateTask = async (id, updates) => axios.put(`${API_URL}/${id}`, updates);

export const deleteTask = async (id) => axios.delete(`${API_URL}/${id}`);

export const completeTask = async (id) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}/complete`);
        return response.data;
    } catch (error) {
        console.error('Failed to complete the task:', error);
        throw error;
    }
};
