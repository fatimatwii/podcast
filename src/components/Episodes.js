import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShare, FaYoutube } from "react-icons/fa";
import "./Episodes.css";
import podcast from "../assets/images/6030841143031350591.jpg";

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
        url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
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

      <div className="flex flex-col md:flex-row items-center px-4 py-10">

        <div className="flex justify-center w-full md:w-1/2 animate-fadeInUp">
          <img
            src={podcast}
            alt="Podcast Cover"
            className="w-10/12 md:w-full max-w-sm rounded-2xl shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <p
            className="text-[1.1rem] leading-8 text-right direction-rtl text-justify animate-fadeIn"
            dir="rtl"
          >
           
            البودكاست التربوي الأوّل من نوعه في لبنان والعالم العربي.
            نريده أن يكون منصّةً مميّزة عن غيرها في بثّ الوعي التربوي
            والثقافة التعلّمية لدى أجيالنا في لبنان والعالم العربي،
            وأن يكون منارةً للمعلمين والمتعلمين، ومصدراً موثوقاً للأهل
            يستقون منه ما هو مفيد لمستقبل أولادهم وحاضرهم.
          </p>

          <p className="text-[1.1rem] leading-8 text-left text-justify animate-fadeIn delay-300">
            Introducing the first educational podcast of its kind in Lebanon and the Arab world:
            Principal Daoud Podcast (PDP). Our goal is to establish a unique platform that promotes
            educational awareness and a culture of learning among the younger generations in Lebanon
            and the Arab world. We aspire for it to be a guiding light for teachers and students and
            a trusted resource for parents, offering valuable insights that support their children's
            present and future.
          </p>
        </div>
      </div>
  <h4 className="section-title">Main Episodes</h4>
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
