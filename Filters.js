import React, { useState } from 'react';

function Filters() {
  const [minExperience, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remoteOnsite, setRemoteOnsite] = useState('');
  const [techStack, setTechStack] = useState('');
  const [role, setRole] = useState('');
  const [minBasePay, setMinBasePay] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle filter submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="minExperience">Min Experience:</label>
      <input
        type="number"
        id="minExperience"
        value={minExperience}
        onChange={(event) => setMinExperience(event.target.value)}
      />
      <br />
      <label htmlFor="companyName">Company Name:</label>
      <input
        type="text"
        id="companyName"
        value={companyName}
        onChange={(event) => setCompanyName(event.target.value)}
      />
      <br />
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <br />
      <label htmlFor="remoteOnsite">Remote/Onsite:</label>
      <select
        id="remoteOnsite"
        value={remoteOnsite}
        onChange={(event) => setRemoteOnsite(event.target.value)}
      >
        <option value="">All</option>
        <option value="remote">Remote</option>
        <option value="onsite">Onsite</option>
      </select>
      <br />
      <label htmlFor="techStack">Tech Stack:</label>
      <input
        type="text"
        id="techStack"
        value={techStack}
        onChange={(event) => setTechStack(event.target.value)}
      />
      <br />
      <label htmlFor="role">Role:</label>
      <input
        type="text"
        id="role"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      />
      <br />
      <label htmlFor="minBasePay">Min Base Pay:</label>
      <input
        type="number"
        id="minBasePay"
        value={minBasePay}
        onChange={(event) => setMinBasePay(event.target.value)}
      />
      <br />
      <button type="submit">Apply Filters</button>
    </form>
  );
}

export default Filters;