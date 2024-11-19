import React, { useEffect, useState } from 'react';
import { fetchTasks } from './services/taskService';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = async () => {
        const { data } = await fetchTasks();
        setTasks(data);
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div>
            <TaskForm refreshTasks={refreshTasks} />
            <TaskList tasks={tasks} refreshTasks={refreshTasks} />
        </div>
    );
};

export default App;
