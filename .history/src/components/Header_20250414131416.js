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

const Header = () => {
  return (
    <header className="bg-black text-white py-4 font-faCustom">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-12 space-y-4 md:space-y-0">
        {/* Spotify & SoundCloud Section */}
        <div className="text-center md:text-left space-y-3">
          {/* Spotify */}
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <a
              href="https://open.spotify.com/artist/286nWQb8H1QubEJFo1AinY?si=2zsB6Cb1RLagG2HJ9Bthuw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 hover:text-green-800 transition duration-300"
            >
              <FaSpotify className="text-2xl md:text-3xl" />
              <span className="ml-2 font-semibold">Listen on Spotify</span>
            </a>
          </div>

          {/* SoundCloud */}
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <a
              href="https://soundcloud.com/principal-daoud-podcast"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-orange-500 hover:text-orange-600 transition duration-300"
            >
              <FaSoundcloud className="text-2xl md:text-3xl" />
              <span className="ml-2 font-semibold">Listen on SoundCloud</span>
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-4 md:space-x-6">
          <a href="https://facebook.com/profile.php?id=61564266524870" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon text-xl md:text-2xl hover:text-[rgb(0,102,255)] transition duration-300" />
          </a>
          <a href="https://instagram.com/principaldaoudpodcast?igsh=dzhlcjR3dng5bzRx" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon text-xl md:text-2xl hover:text-[rgb(0,102,255)] transition duration-300" />
          </a>
          <a href="https://www.youtube.com/@PrincipalDaoudPodcast" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon text-xl md:text-2xl hover:text-[rgb(0,102,255)] transition duration-300" />
          </a>
          <a href="https://tiktok.com/@principal.daoud.p?_t=8pOUnVOKzWS&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="icon text-xl md:text-2xl hover:text-[rgb(0,102,255)] transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/principal-daoud" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon text-xl md:text-2xl hover:text-[rgb(0,102,255)] transition duration-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
