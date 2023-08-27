import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './task.css';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('https://taskify-server.up.railway.app');
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTasks();
    }, []);

    const handleToggleDone = async (id, done) => {
        try {
            await axios.post(`https://taskify-server.up.railway.app/edit/${id}`, { done: !done });
            const updatedTasks = tasks.map((task) => {
                if (task._id === id) {
                    return { ...task, done: !done };
                }
                return task;
            });
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error toggling done status:', error);
        }
    };

    const handleDeleteTask = async (id) => {
                await axios.delete(`https://taskify-server.up.railway.app/delete/${id}`);
                window.location.reload()
            }

    return (
        <div className="home-container">
            <h2 className="page-title">Task List</h2>
            <div className="card-grid">
                {tasks.map((task) => (
                    <div key={task._id} className="task-card-border">
                        <div className={`task-card ${task.done ? 'done' : ''}`}>
                            <div className="card-header">
                                <span className="importance">{Array(task.importance).fill('⭐').join('')}</span>
                                <span className="author">{task.author}</span>
                            </div>
                            <h3 className="card-title">{task.title}</h3>
                            <p className="card-description">{task.description}</p>
                            <div className="btn-box">
                                {
                                task.done ? 
                                <button className="btn-undone" onClick={() => handleToggleDone(task._id, task.done)}> Undone </button> 
                                : 
                                <button className="btn-done" onClick={() => handleToggleDone(task._id, task.done)}> Done </button>
                                }
                                <Link to={`/editTask/${task._id}`} className="btn-edit">
                                    Edit
                                </Link>
                                <button className="btn-delete" onClick={() => handleDeleteTask(task._id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;