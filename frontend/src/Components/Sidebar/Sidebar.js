import React from 'react';
import './Sidebar.css';
// import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="/myJobs">My Jobs</a></li>
                <li><a href="/postJobs">Post Jobs</a></li>
                <li><a href="/pendingJobs">Pending Jobs</a></li>
                <li><a href="/subscriptions">Subscriptions</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
