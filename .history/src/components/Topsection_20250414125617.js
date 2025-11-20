import React, { useState, useEffect } from "react";
import podcastImage1 from "../assets/images/IMG_20250129_092957_6051.jpg";
import podcastImage2 from "../assets/images/IMG-20250129-WA0004.jpg";
import podcastImage4 from "../assets/images/IMG-20250307-WA0018.jpg";
import podcastImage3 from "../assets/images/IMG-20250304-WA0016.jpg";
import "./Topsection.css";

const Topsection = () => {
  const originalImages = [podcastImage1, podcastImage2, podcastImage3, podcastImage4];
  const images = [...originalImages, originalImages[0]]; 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          setIsTransitioning(false);
          setCurrentIndex(0);
          return 0;
        } else {
          setIsTransitioning(true);
          return prevIndex + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (currentIndex === 0 && !isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(1);
      }, 50); 
    }
  }, [currentIndex, isTransitioning]);

  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
      
        <div className="slideshow-container md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <div
            className="slideshow-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? "transform 1s ease-in-out" : "none",
            }}
          >
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Slide ${index + 1}`} className="slideshow-image" />
            ))}
          </div>
        </div>

      
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-8 right">
          <h1 className="text-4xl font-bold mb-4 text-center">
            PRINCIPAL <br /> DAOUD PODCAST
          </h1>
          <p className="text-lg text-center arabic-text">
             بودكاست المدير التربوي<br />
             الدكتور داود حرب<br />
            محتوى تربوي وعلمي <br />
            يهمّ الأهل والمعلمين والطلاب<br />
          </p>
          <br /><br />
          <a href="https://www.youtube.com/@PrincipalDaoudPodcast" target="_blank" rel="noopener noreferrer">
            <button className="btnSub">Subscribe to Channel</button>
          </a>
          <br />
        </div>
      </div>
    </section>
  );
};

export default Topsection;
