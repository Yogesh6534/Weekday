import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import JobCard from '../JobCard';
import JobCard from './JobCard';
import fetchJobs from './jobService';

const Main = () => {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJobs(10, offset);
      setJobs(data.jobs);
    };

    fetchData();
  }, [offset]);

  return (
    <div className="job-openings-container">
      <div className="row">
        {jobs.map((job) => (
          <div key={job.id} className="col-md-4 mb-4">
            <Link to={`/job-openings/${job.id}`}>
              <JobCard job={job} />
            </Link>
          </div>
        ))}
      </div>
      <button onClick={() => setOffset(offset + 10)} className="btn btn-primary btn-block mb-5">Load More</button>
    </div>
  );
};

export default Main;