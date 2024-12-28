import React, { useState, useEffect } from "react";
import axios from "axios";

function CrudAboutUs() {
  const [aboutData, setAboutData] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/about");
      setAboutData(response.data.content || "");
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  const handleSave = async () => {
    try {
      if (editing) {
        await axios.put("http://localhost:5000/api/about", { content: aboutData });
      } else {
        await axios.post("http://localhost:5000/api/about", { content: aboutData });
      }
      setEditing(true);
      alert("About Us updated successfully!");
    } catch (error) {
      console.error("Error saving about data:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage About Us</h2>
      <textarea
        className="form-control"
        rows="5"
        value={aboutData}
        onChange={(e) => setAboutData(e.target.value)}
      ></textarea>
      <button className="btn btn-primary mt-2" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default CrudAboutUs;
