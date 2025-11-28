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
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background fixed image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Center content (moved to bottom) */}
      <div className="relative z-10 flex flex-col items-center justify-end text-center h-full px-6 pb-32">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
          Dr. Daoud Harb <br />  </h1>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">الدكتور داوُد حرب</h3>
        
            
        <p className="text-2xl md:text-2xl mt-6 text-gray-200 leading-relaxed arabic-text ">
         تابع معنا  بودكاست المدير التربوي <br /> على المنصات التالية
        </p>
      </div>

      {/* Bottom social buttons */}
      <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-6 z-20">
        <a
          href="https://www.youtube.com/@PrincipalDaoudPodcast"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-xl flex items-center gap-2"
        >
          <span>🔴</span> YouTube
        </a>

        <a
          href="https://open.spotify.com/artist/286nWQb8H1QubEJFo1AinY?si=2zsB6Cb1RLagG2HJ9Bthuw"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition shadow-xl flex items-center gap-2"
        >
          <span>🎵</span> Spotify
        </a>

        <a
          href="https://soundcloud.com/principal-daoud-podcast"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-xl flex items-center gap-2"
        >
          <span>☁️</span> SoundCloud
        </a>
      </div>
    </section>
  );
};

export default Topsection;
