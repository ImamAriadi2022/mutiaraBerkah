import React from "react";
import CrudAboutUs from "../componentsbackup/CrudAboutUs";
import CrudPortfolio from "../componentsbackup/CrudPortfolio";

function Admin() {
  return (
    <div className="container mt-4">
      <h1>Admin Dashboard</h1>
      <div className="mt-4">
        <h3>Portfolio Video Management</h3>
        <CrudPortfolio />
      </div>
      <div className="mt-4">
        <h3>About Us Management</h3>
        <CrudAboutUs />
      </div>
    </div>
  );
}

export default Admin;
