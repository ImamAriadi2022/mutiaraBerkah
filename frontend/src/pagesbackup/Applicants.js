import React, { useState, useEffect } from "react";
import axios from "axios";

function Applicants() {
  const [applicants, setApplicants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
    setSearchQuery(e.target.value);
  };

  const filteredApplicants = applicants.filter((applicant) =>
    `${applicant.name} ${applicant.position} ${applicant.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Applicants List</h2>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, position, or email"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <table className="table table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplicants.length > 0 ? (
            filteredApplicants.map((applicant) => (
              <tr key={applicant.id}>
                <td>{applicant.name}</td>
                <td>{applicant.email}</td>
                <td>{applicant.position}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No applicants found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Applicants;
