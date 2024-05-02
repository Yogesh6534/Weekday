import React, { useState, useEffect } from 'react';

function JobOpenings() {
  const [jobOpenings, setJobOpenings] = useState([]);

  useEffect(() => {
    // Fetch job openings from an API
    fetch('https://api.example.com/job-openings')
      .then((response) => response.json())
      .then((data) => setJobOpenings(data));
  }, []);

  return (
    <div>
      <h3>Job Openings</h3>
      <ul>
        {jobOpenings.map((jobOpening) => (
          <li key={jobOpening.id}>
            <h4>{jobOpening.title}</h4>
            <p>{jobOpening.description}</p>
            <button>Apply</button>
            </li> ))} </ul> </div> ); }
            // export default JobOpenings;
            // ```
            // * Import the `JobOpenings` component into the `Main.js` file and add it to the main content:
            
            // ```jsx
            import JobOpenings from './JobOpenings';
            
            // ...
            
            function Main() {
              return (
                <main className="main">
                  <h2>Welcome to the Candidate Application Platform</h2>
                  <p>Please create your profile to start applying for jobs.</p>
                  <ProfileForm />
                  <JobOpenings />
                </main>
              );
            }


            import JobCard from './JobCard';

// ...

function JobOpenings() {
  const [jobOpenings, setJobOpenings] = useState([]);

  useEffect(() => {
    // Fetch job openings from an API
    fetch('https://api.example.com/job-openings')
      .then((response) => response.json())
      .then((data) => setJobOpenings(data));
  }, []);

  return (
    <div>
      <h3>Job Openings</h3>
      <ul>
        {jobOpenings.map((jobOpening) => (
          <li key={jobOpening.id}>
            <JobCard job={jobOpening} />
          </li>
        ))}
      </ul>
    </div>
  );
}
        

import InfiniteScroll from 'react-infinite-scroll-component';

// ...

function JobOpenings() {
  const [jobOpenings, setJobOpenings] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Fetch job openings from an API
    fetch('https://api.example.com/job-openings')
      .then((response) => response.json())
      .then((data) => {
        setJobOpenings(data);
      });
  }, []);

  const fetchMoreData = () => {
    // Fetch more job openings from an API
    fetch('https://api.example.com/job-openings?page=2')
      .then((response) => response.json())
      .then((data) => {
        setJobOpenings(jobOpenings.concat(data));
        if (data.length === 0) {
          setHasMore(false);
        }
      });
  };

  return (
    <div>
      <h3>Job Openings</h3>
      <InfiniteScroll
        dataLength={jobOpenings.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ul>
          {jobOpenings.map((jobOpening) => (
            <li key={jobOpening.id}>
              <JobCard job={jobOpening} />
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}


import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import fetchJobs from "../services/jobService";

const JobOpenings = () => {
  const [jobs, setJobs] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJobs(limit, offset);
      setJobs(data.jobs);
      setTotalCount(data.totalCount);
    };

    fetchData();
  }, [limit, offset]);

  const handleLoadMore = () => {
    setOffset(offset + limit);
  };

  return (
    <div className="job-openings-container">
      <h2>Job Openings</h2>
      <ul className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>
      {jobs.length < totalCount && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default JobOpenings;