import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyJobs from './Components/Pages/MyJobs';
import Jobform from './Components/Jobform/Jobform';
import PendingJobs from './Components/Pages/PandingJobs'; 
import Subscriptions from './Components/Pages/Subscriptions';


const App = () => {
  return (
    <>
   {/* <Jobform/> */}
      <Router>
        <Routes>
          <Route path="/myJobs" element={<MyJobs />} />
          <Route path="/postJobs" element={<Jobform />} />
          <Route path="/pendingJobs" element={<PendingJobs />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
