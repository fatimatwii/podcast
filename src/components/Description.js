import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import principleDaud from '../assets/images/ai-portrait.png';
import image1 from '../assets/images/ai-portrait (2).png';
import { FaYoutube } from "react-icons/fa";
const specialVideoLinks = [
  "https://youtu.be/TdiQ1mOdbws?si=UC0ORDJCtX3c6MWp",
  "https://youtu.be/6NQauIARWt0?si=C88alcymHdUseB0e",
  "https://youtu.be/XwVWtHvJbaY?si=nUBJLHaO2rydlXiT",
  "https://youtu.be/sj2hDoo68PU?si=i66mUM-Bg2-b7OTE",
  "https://youtu.be/Z1bLPbskK4c?si=22Xqm6S6cFDwWGmc"
];

function Description() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videos, setVideos] = useState([]);

  // Fetch video info automatically using YouTube oEmbed
  useEffect(() => {
    async function fetchVideoData() {
      const fetchedVideos = await Promise.all(
        specialVideoLinks.map(async (link) => {
          const oEmbedUrl = `https://www.youtube.com/oembed?url=${link}&format=json`;
          try {
            const res = await fetch(oEmbedUrl);
            const data = await res.json();
            return {
              title: data.title,
              thumbnail: data.thumbnail_url,
              youtubeUrl: link
            };
          } catch (error) {
            console.error("Error fetching video info:", error);
            return {
              title: "Video",
              thumbnail: "",
              youtubeUrl: link
            };
          }
        })
      );
      setVideos(fetchedVideos);
    }

    fetchVideoData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="items-center justify-center min-h-screen bg-black text-white ">
      {/* Description Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-4 md:px-12 py-18">
        <motion.div
          className="md:w-3/4 text-right md:pr-8 p-4 rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 3 }}
        >
          <h2 className="arabic-text text-xl md:text-2xl font-bold whitespace-pre-line bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-white">
            البودكاست التربوي الأوّل من نوعه في لبنان والعالم العربي
            <br />
            بودكاست المدير التربوي مع الدكتور داود حرب
          </h2>
          <h2 className="text-xl md:text-2xl font-bold whitespace-pre-line bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-white">
            Principal Daoud Podcast (PDP)
          </h2>
          <br />
          <p className="arabic-text mt-4 text-lg font-extrabold text-white leading-tight drop-shadow-2xl arabic-text">
            نريده أن يكون منصّةً مميّزة عن غيرها في بثّ الوعي التربوي والثقافة التعلّمية لدى أجيالنا في لبنان والعالم العربي، وأن يكون منارةً للمعلمين والمتعلمين، ومصدراً موثوقاً للأهل يستقون منه ما هو مفيد لمستقبل أولادهم وحاضرهم
          </p>
          <p className="mt-4 text-base md:text-lg text-left hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white text-justify">
            Introducing the first educational podcast of its kind in Lebanon and the Arab world: Principal Daoud Podcast (PDP) with Principal Dr. Daoud Harb.
          </p>
          <p className="text-base md:text-lg text-left hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white text-justify">
            Our goal is to establish a unique platform that promotes educational awareness and a culture of learning among the younger generations in Lebanon and the Arab world.
          </p>
          <p className="text-base md:text-lg text-left hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white text-justify">
            We aspire for it to be a guiding light for teachers and students and a trusted resource for parents, offering valuable insights that support their children's present and future.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex flex-col items-center md:items-center md:pl-8 mt-8 md:mt-10 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 3 }}
        >
          <img
            src={principleDaud}
            alt="Principal Daoud"
            className="w-66 h-82 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* Special Videos Section */}
      <section className="w-full mt-16 bg-white text-black py-16 ">
        <h3 className="text-3xl font-bold text-center mb-8 text-blue-900 py-2 rounded">
          Special Episodes
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4 md:px-12">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="bg-blue-900 rounded-lg shadow-md overflow-hidden flex flex-col items-center"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-28 object-cover"
              />
              <div className="p-2 flex flex-col items-center">
                <h4 className="text-sm font-bold text-center text-white mb-2">{video.title}</h4>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-3xl hover:text-red-700 transition"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-blue-900 text-white py-16 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={image1}
              alt="Educational Consultation"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2 flex flex-col justify-center ">

            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Book Your <span className="underline decoration-white">Educational Consultation</span>
            </h3>

            {/* Arabic Text */}
            <p className="text-lg md:text-xl mb-4 arabic-text leading-relaxed text-right " dir="rtl">
              احجز جلسة استشارة تربوية مع المدير التربوي الدكتور داوُد حرب،
              للحصول على توجيه مهني، دعم أكاديمي،
              واستشارات متخصّصة في المجال التعليمي.
            </p>

            {/* English Text */}
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Schedule your personalized educational consultation with
              Principal Dr. Daoud Harb to receive professional academic guidance,
              tailored insights, and expert support.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              <a
                href="mailto:d.david.harb@gmail.com"
                className="bg-white text-blue-900 font-bold px-6 py-3 rounded-md text-center hover:bg-gray-100 transition w-full sm:w-auto"
              >
                Email
              </a>

              <a
                href="https://wa.me/96170837052"
                className="bg-green-500 text-white font-bold px-6 py-3 rounded-md text-center hover:bg-green-600 transition w-full sm:w-auto"
              >
                WhatsApp
              </a>
            </div>

          </div>

        </div>
      </section>




    </section>
  );
}

export default Description;
