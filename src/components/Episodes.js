import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShare, FaYoutube } from "react-icons/fa";
import "./Episodes.css";

const API_KEY = "AIzaSyDxes6N139K-uodH4_d7lazdhj-Yv3c5hE";
const PLAYLIST_ID = "PLopc-tIyly6aIyXcqDL0VuHqSCpyQ3Xzq";

const Episodes = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`
      );
      const allVideos = response.data.items.map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
      }));
      setVideos(allVideos);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const shareVideo = async (url) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this video!",
          text: "Watch this episode from Principal Daoud Podcast.",
          url,
        });
      } catch (error) {
        console.error("Sharing failed:", error);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  const watchVideo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="episodes-section">
      <h1 className="section-title">Principal Daoud Podcast</h1>

      <div className="videos-container">
        {videos.map((video, index) => (
          <div key={index} className="mobile-card">

            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt="Video Thumbnail"
                className="video-thumbnail"
              />
              <h3 className="arabic-text">{video.title}</h3>
            </a>

            <div className="button-row">

              <button onClick={() => watchVideo(video.url)} className="icon">
                <FaYoutube size={24} />
              </button>

              <button onClick={() => shareVideo(video.url)} className="icon">
                <FaShare size={24} />
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Episodes;
