import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './Components/MyNavbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import RegistrationForm from './Pages/JobSeeker/RegistrationForm';
import SigninForm from './Pages/JobSeeker/SigninForm';
import BenchRegisterForm from './Pages/BenchSales/BenchRegisterForm';
import BenchLoginForm from './Pages/BenchSales/BenchLoginForm';
import EmployerRegisterForm from './Pages/Employer/EmployerRegisterForm';
import EmployerLoginForm from './Pages/Employer/EmployerLoginForm';
import FindJobsPage from './Pages/FindJobs/FindJobsPage';
import EmailMerge from './Pages/EmailMerge/EmailMerge';





const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/job-seekers" element={<RegistrationForm />} />
        <Route path="/job-seekers/signin" element={<SigninForm />} />
        <Route path="/benchsales/register" element={<BenchRegisterForm />} />
        <Route path="/benchsales/login" element={<BenchLoginForm />} />
        <Route path="/employer/register" element={<EmployerRegisterForm />} />
        <Route path="/employer/login" element={<EmployerLoginForm />} />
        <Route path="/find-jobs" element={<FindJobsPage/>} />
        <Route path="/emailmerge" element={<EmailMerge/>} />

        
     </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
