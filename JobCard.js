import React from 'react';

function JobCard({ job }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.companyName}</p>
      <p>{job.location}</p>
      <p>{isExpanded ? job.description : job.description.substring(0, 100)}...</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <p>Experience Required: {job.experienceRequired}</p>
      <a href={job.applyLink}>Apply</a>
    </div>
  );
}

export default JobCard;