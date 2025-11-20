import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlay, FaShare, FaListUl } from "react-icons/fa";
import "./Episodes.css";

const API_KEY = "AIzaSyDxes6N139K-uodH4_d7lazdhj-Yv3c5hE";
const CHANNEL_ID = "UCup1QO_uDov-sfQdjaBHmZQ";
const PLAYLIST_ID = "PLopc-tIyly6aIyXcqDL0VuHqSCpyQ3Xzq";
const Episodes = () => {
  const [playlists, setPlaylists] = useState([]);
  const [videos, setVideos] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const fetchPlaylists = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&key=${API_KEY}`
      );
      const playlistsData = response.data.items;

      const playlistsWithVideos = await Promise.all(
        playlistsData
          .filter((playlist) => playlist.snippet.title.includes("Principal Daoud Podcast"))
          .map(async (playlist) => {
            const videos = await fetchVideos(playlist.id);
            return {
              id: playlist.id,
              title: playlist.snippet.title,
              url: `https://www.youtube.com/playlist?list=${playlist.id}`,
              thumbnail: playlist.snippet.thumbnails.medium.url,
              videos,
            };
          })
      );

      setPlaylists(playlistsWithVideos);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  const fetchVideos = async (playlistId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}`
      );

      return response.data.items
        .filter((item) => item.snippet.title.startsWith("Principal Daoud Podcast"))
        .map((item) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          publishedAt: item.snippet.publishedAt,
          thumbnail: item.snippet.thumbnails.medium.url,
        }))
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    } catch (error) {
      console.error("Error fetching videos:", error);
      return [];
    }
  };
  const fetchMobileVideos = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`
      );
      const mobileVideos = response.data.items.map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));
      setVideos(mobileVideos);
    } catch (error) {
      console.error("Error fetching videos for mobile:", error);
    }
  };
  useEffect(() => {
    if (isMobile) {
      fetchMobileVideos();
    } else {
      fetchPlaylists();
    }
  }, []);

  const sharePlaylist = async (url) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this playlist!',
          text: 'Watch this amazing playlist on Principal Daoud Podcast.',
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

  const isMobile = window.innerWidth <= 768;

  return (
    <section className="episodes-section">
      <h2 className="section-title">Watch the Latest Episodes</h2>
      {/* For Mobile Devices */}
      {isMobile ? (
        <div className="videos-container">
          {videos.map((video, index) => (
            <div key={index} className="mobile-card">
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={video.thumbnail}
                  alt="Video Thumbnail"
                  className="video-thumbnail"
                />
                <h3  className="arabic-text">{video.title}</h3>
              </a>
              <button onClick={() => sharePlaylist(video.url)} className="icon">
                <FaShare size={24} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        // For Desktop/Laptop Devices
      <div className="playlists-container">

        {playlists.map((playlist, index) => (
          <div
            key={index}
            className="playlist-card"
            onMouseEnter={() =>
              isMobile
                ? window.open(playlist.url, "_blank")
                : setSelectedPlaylist(playlist.id)
            }
          >


            <h3 className="arabic-text">{playlist.title}</h3>
            <div className="playlist-actions">
              <a
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaPlay size={24} />
              </a>
              <button onClick={() => sharePlaylist(playlist.url)} className="icon">
                <FaShare size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
      {selectedPlaylist && !isMobile && (
        <div className="all-videos-container">
          {(
            playlists.find((playlist) => playlist.id === selectedPlaylist) || {
              videos: [],
              url: "#",
            }
          ).videos.slice(0, 4).map((video, index) => (
            <div key={index} className="video-card">
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={video.thumbnail}
                  alt="Video Thumbnail"
                  className="video-thumbnail"
                />
              </a>
            </div>
          ))}
          <div className="playlist-button-container">
            <a
              href={
                (playlists.find((playlist) => playlist.id === selectedPlaylist) || { url: "#" }).url
              }
              target="_blank"
              rel="noopener noreferrer"
              className="view-playlist-button"
            >
              <FaListUl size={20} style={{ marginRight: "8px" }} />
              View Full Playlist
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Episodes;
