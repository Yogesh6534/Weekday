import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import ProfileForm from './ProfileForm';
import JobApplicationForm from './JobApplicationForm';
import JobApplicationConfirmation from './JobApplicationConfirmation';
import JobCard from './JobCard';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <div className="container">
            <a className="navbar-brand" href="/">
              Candidate Application Platform
            </a>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/job-application" element={<JobApplicationForm />} />
          <Route path="/job-application-confirmation" element={<JobApplicationConfirmation />} />
          <Route path="/job-openings/:id" element={<JobCard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;