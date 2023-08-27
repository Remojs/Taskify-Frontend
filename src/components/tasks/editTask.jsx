import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './task.css';

const EditTask = () => {
    const { id } = useParams();
    const initialFormData = {
        author: '',
        title: '',
        description: '',
        importance: '',
    };
    
    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`https://taskify-server.up.railway.app/edit/${id}`, formData);
            console.log('Task edited:', response.data);
        } catch (error) {
            console.error('Error editing task:', error);
        }
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="task-container">
            <h2 className='form-title'> Edit Task </h2>
            <div className='border-one'>
                <form className="task-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Author:</label>
                        <input className='input-form' type="text" name="author" value={formData.author} onChange={handleInputChange} required/>
                    </div>

                    <div className="form-group">
                        <label>Title:</label>
                        <input className='input-form' type="text" name="title" value={formData.title} onChange={handleInputChange} required />
                    </div>

                    <div className="form-group">
                        <label>Description:</label>
                        <textarea className='input-form' name="description" value={formData.description} onChange={handleInputChange} required></textarea>
                    </div>

                    <div className="form-group">
                        <label>Importance:</label>
                        <select className='input-form' name="importance" value={formData.importance} onChange={handleInputChange} required >
                            <option value="">Select Importance</option>
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>
                    </div>
                    <button type="submit" className="edit-button">Save Edit</button>
                </form>
            </div>
        </div>
    );
};

export default EditTask;