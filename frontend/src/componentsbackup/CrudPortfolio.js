import React, { useState, useEffect } from "react";
import axios from "axios";

function CrudPortfolio() {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({
    title: "",
    link: "",
  });

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/portfolio");
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleAddVideo = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/portfolio", newVideo);
      setVideos([...videos, response.data]);
      setNewVideo({ title: "", link: "" });
    } catch (error) {
      console.error("Error adding video:", error);
    }
  };

  const handleDeleteVideo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/portfolio/${id}`);
      setVideos(videos.filter((video) => video.id !== id));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Portfolio Videos</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Video Title"
          value={newVideo.title}
          onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Video Link (URL)"
          value={newVideo.link}
          onChange={(e) => setNewVideo({ ...newVideo, link: e.target.value })}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddVideo}>
          Add Video
        </button>
      </div>
      <ul className="list-group mt-3">
        {videos.map((video) => (
          <li key={video.id} className="list-group-item d-flex justify-content-between">
            <div>
              <strong>{video.title}</strong>
              <br />
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                {video.link}
              </a>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteVideo(video.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudPortfolio;
