import React, { useState, useEffect } from "react";
import axios from "axios";

function CrudArticles() {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState("");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/articles");
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleAddArticle = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/articles", {
        title: newArticle,
      });
      setArticles([...articles, response.data]);
      setNewArticle("");
    } catch (error) {
      console.error("Error adding article:", error);
    }
  };

  const handleDeleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/articles/${id}`);
      setArticles(articles.filter((article) => article.id !== id));
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Articles</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new article"
          value={newArticle}
          onChange={(e) => setNewArticle(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddArticle}>
          Add
        </button>
      </div>
      <ul className="list-group mt-3">
        {articles.map((article) => (
          <li key={article.id} className="list-group-item d-flex justify-content-between">
            {article.title}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteArticle(article.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudArticles;
