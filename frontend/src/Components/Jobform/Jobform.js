import React, { useState } from 'react';
import axios from 'axios';
import './Jobform.css'        
import { Editor } from 'primereact/editor';
import Sidebar from '../Sidebar/Sidebar';

        
        


const initialState = {
    jobTitle: '',
    location: '',
    employmentType: '',
    workAuthorization: '',
    
};

const JobForm = () => {
   

    const [description, setDescription] = useState('');
  
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/postJob/create/postjob',
            {...formData, description:description});
            console.log('Data submitted successfully:', response.data);

            // Reset the form fields to their initial values
            setFormData(initialState);
            setDescription('');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <>
        <div className='formMain'>
        
            <Sidebar/>
       
            <form onSubmit={handleSubmit} className="job-form">
                <div className='heading'>
                    <h2>Post Only IT Jobs in United States</h2>
                </div>
                <div className='grid'>
                    <div>
                        <label className='form-label'>Job Title</label>
                        <input
                            placeholder='Full Stack Developer'
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className="form-input"
                            required />
                    </div>
                    <div>
                        <label className='form-label'>Location</label>
                        <input
                            placeholder='Folsom, CA'
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="form-input"
                            required />
                    </div>
                    <div>
                        <label className='form-label'>Employment Type</label>
                        <input
                            placeholder='Remote'
                            type="text"
                            name="employmentType"
                            value={formData.employmentType}
                            onChange={handleChange}
                            className="form-input"
                            required />
                    </div>
                    <div>
                        <label className='form-label'>Work Authorization</label>
                        <input
                            placeholder='H1B'
                            type="text"
                            name="workAuthorization"
                            value={formData.workAuthorization}
                            onChange={handleChange}
                            className="form-input"
                            required />
                    </div>
                </div>              
                <div className="card">
                    <Editor 
                    value={description} 
                    onTextChange={(e) =>
                     setDescription(e.htmlValue)} 
                     style={{ height: '150px' }}
                      />
               </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
            </div> 
        </>
    );
};

export default JobForm;
