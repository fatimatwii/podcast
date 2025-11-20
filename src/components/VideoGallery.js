import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Episodes.css";
import { FaShareAlt, FaPlay } from "react-icons/fa";

const API_KEY = "AIzaSyDxes6N139K-uodH4_d7lazdhj-Yv3c5hE"; 
const PLAYLIST_ID = "PLopc-tIyly6YwY9fZCnRB2_qR4bMMsKqQ";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`
      );

      const videoList = response.data.items.map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
      }));

      setVideos(videoList);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const shareVideo = async (id) => {
    const url = `https://www.youtube.com/watch?v=${id}`;
    if (navigator.share) {
      await navigator.share({
        title: "Check out this video!",
        text: "Watch this amazing Principal Daoud Podcast video.",
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Video link copied to clipboard!");
    }
  };

  const watchVideo = (id) => {
    window.open(`https://www.youtube.com/watch?v=${id}`, "_blank");
  };

  return (
    <div className="p-6">
      <h2 className="title text-xl font-bold mb-6 text-center section-title">مع داوُد</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
           
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-56 object-cover video-image"
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
              />
            </a>

           
            <div className="p-4 flex justify-center items-center">
              <button
                onClick={() => watchVideo(video.id)}
                className="text-blue-600 hover:text-blue-800 text-2xl mx-4"
              >
                <FaPlay />
              </button>
              <button
                onClick={() => shareVideo(video.id)}
                className="text-green-600 hover:text-green-800 text-2xl mx-4"
              >
                <FaShareAlt />
              </button>
            </div>

            <h3 className="video-title text-center font-semibold mt-2 px-2 ">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
