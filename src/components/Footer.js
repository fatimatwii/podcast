import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaSpotify,
  FaSoundcloud,
} from "react-icons/fa";
import podcastLogo from "../assets/images/PDP Logo (Official) PNG.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="logo-section">
          <img src={podcastLogo} alt="Podcast Logo" className="podcast-logo" />
        </div>

        <div className="links-section">
        <p className="email-text">Contact me via email:</p>
          <p className="email-text">D.daoud.harb@gmail.com</p>
          <div className="social-icons">
            <a href="https://facebook.com/profile.php?id=61564266524870" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/principaldaoudpodcast/?igsh=dzhlcjR3dng5bzRx" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@PrincipalDaoudPodcast" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@principal.daoud.p?_t=8pOUnVOKzWS&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href="https://linkedin.com/in/principal-daoud" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="spotify-section space-y-3 flex flex-col items-center md:items-start">
        
          <a
            href="https://open.spotify.com/artist/286nWQb8H1QubEJFo1AinY?si=2zsB6Cb1RLagG2HJ9Bthuw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-600 hover:text-green-800 transition duration-300"
          >
            <FaSpotify className="text-2xl md:text-3xl" />
            <span className="ml-2 font-semibold">Listen on Spotify</span>
          </a>

       
          <a
            href="https://soundcloud.com/principal-daoud-podcast"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#ff5500] hover:text-[#e64a00] transition duration-300"
          >
            <FaSoundcloud className="text-2xl md:text-3xl" />
            <span className="ml-2 font-semibold">Listen on SoundCloud</span>
          </a>
        </div>
      </div>

      <div className="backsection">
        <p>&copy; {new Date().getFullYear()} Principal Daoud Podcast. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
