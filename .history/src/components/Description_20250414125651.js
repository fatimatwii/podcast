import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import principleDaud from '../assets/images/IMG-20250307-WA0016.jpg';

function Description() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
          } else {
            setIsVideoVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="items-center justify-center min-h-screen bg-black text-white px-4 md:px-12 py-18"
    >
      <section className="flex flex-col md:flex-row items-center justify-center">
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
            <br /></h2>
            <h2 className=" text-xl md:text-2xl font-bold whitespace-pre-line bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-white">
            Principal Daoud Podcast (PDP)</h2>
            <br />
          
          <p className="arabic-text mt-4 text-base md:text-lg text-right bg-clip-text text-transparent  bg-gradient-to-l from-blue-500 to-white ">
            نريده أن يكون منصّةً مميّزة عن غيرها في بثّ الوعي التربوي والثقافة التعلّمية لدى أجيالنا في لبنان والعالم العربي، وأن يكون منارةً للمعلمين والمتعلمين، ومصدراً موثوقاً للأهل يستقون منه ما هو مفيد لمستقبل أولادهم وحاضرهم
          </p>
          <p className="mt-4 text-base md:text-lg text-left t hidden md:block bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 to-white text-justify">
            Introducing the first educational podcast of its kind in Lebanon and the Arab world: Principal Daoud Podcast (PDP) with Principal Dr. Daoud Harb.
          </p>
          <p className="text-base md:text-lg text-left  hidden md:block bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 to-white text-justify">
            Our goal is to establish a unique platform that promotes educational awareness and a culture of learning among the younger generations in Lebanon and the Arab world.
          </p>
          <p className="text-base md:text-lg text-left  hidden md:block bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 to-white text-justify">
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

      <div ref={videoRef} className="flex justify-center items-center min-h-[50vh] sm:min-h-screen">
        <div className="relative w-full" style={{ maxWidth: '800px', height: 'auto' }}>
          <iframe
            src="https://www.youtube.com/embed/gtaBI_XZRlE?autoplay=1"
            title="Principal Daoud Podcast"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg w-full h-64 md:h-96"
          />
        </div>
      </div>




    </section>

  );
}

export default Description;