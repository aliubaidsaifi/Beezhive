import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios';
const MyJobs = () => {
  const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        axios.get('show/postJob')
            .then((response) => {
                setJobListings(response.data);
            })
            .catch((error) => {
                console.error('Error fetching job listings:', error);
            });
    }, []);
  return (
    <>
  <div style={{display:'flex'}}>
    <Sidebar/>
    <div>
            <h2>Job Listings</h2>
            <ul>
                {jobListings.map((job) => (
                    <li key={job._id}>
                        <h3>{job.jobTitle}</h3>
                        <p>{job.location}</p>
                        <p>{job.employmentType}</p>
                        <p>{job.workAuthorization}</p>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </>
   
  )
}

export default MyJobs
