import React, { useEffect, useState } from "react";
import podcastImage1 from "../assets/images/59970221238660493641.jpg";

const Topsection = () => {
  const images = [podcastImage1];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between">
      {/* Background fixed image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-40 sm:pt-32 md:pt-48">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
          Dr. Daoud Harb
        </h1>
        <h3 className="text-2xl sm:text-3xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight drop-shadow-lg mt-2">
          الدكتور داوُد حرب
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-200 leading-relaxed arabic-text">
          تابع معنا بودكاست المدير التربوي <br /> على المنصات التالية
        </p>
      </div>

      {/* Bottom social buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4 pb-16 sm:pb-14">
        <a
          href="https://www.youtube.com/@PrincipalDaoudPodcast"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <span>🔴</span> YouTube
        </a>

        <a
          href="https://open.spotify.com/artist/286nWQb8H1QubEJFo1AinY?si=2zsB6Cb1RLagG2HJ9Bthuw"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <span>🎵</span> Spotify
        </a>

        <a
          href="https://soundcloud.com/principal-daoud-podcast"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <span>☁️</span> SoundCloud
        </a>
      </div>
    </section>
  );
};

export default Topsection;
