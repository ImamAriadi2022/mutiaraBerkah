import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./componentsbackup/Navbar";
import Admin from "./pagesbackup/Admin";
import Applicants from "./pagesbackup/Applicants";
import Articles from "./pagesbackup/Articles";
import Home from "./pagesbackup/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
