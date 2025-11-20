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
