const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const fetchJobs = async (limit, offset) => {
  const raw = JSON.stringify({
    limit,
    offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export default fetchJobs;