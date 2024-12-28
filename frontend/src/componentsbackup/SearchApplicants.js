import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchApplicants() {
  const [applicants, setApplicants] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/applicants");
      setApplicants(response.data);
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  const handleSearch = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const filteredApplicants = applicants.filter((applicant) =>
    applicant.name.toLowerCase().includes(query)
  );

  return (
    <div className="container mt-4">
      <h2>Search Applicants</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Search by name"
        value={query}
        onChange={handleSearch}
      />
      <ul className="list-group mt-3">
        {filteredApplicants.map((applicant) => (
          <li key={applicant.id} className="list-group-item">
            {applicant.name} - {applicant.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchApplicants;
