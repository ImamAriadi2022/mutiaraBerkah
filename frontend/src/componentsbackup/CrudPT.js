import React, { useState, useEffect } from "react";
import axios from "axios";

function CrudPT() {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState("");

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/companies");
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  const handleAddCompany = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/companies", {
        name: newCompany,
      });
      setCompanies([...companies, response.data]);
      setNewCompany("");
    } catch (error) {
      console.error("Error adding company:", error);
    }
  };

  const handleDeleteCompany = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/companies/${id}`);
      setCompanies(companies.filter((company) => company.id !== id));
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Companies</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new company"
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddCompany}>
          Add
        </button>
      </div>
      <ul className="list-group mt-3">
        {companies.map((company) => (
          <li key={company.id} className="list-group-item d-flex justify-content-between">
            {company.name}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteCompany(company.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudPT;
