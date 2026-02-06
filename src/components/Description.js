import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import principleDaud from "../assets/images/ai-portrait.png";
import { Link } from "react-router-dom";

function Description() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-6 bg-black text-white flex flex-col md:flex-row items-center justify-center gap-12"
    >
      {/* RIGHT SECTION (Description) - Appears FIRST on mobile */}
      <motion.div
        className="md:w-1/3 order-1 md:order-3 text-right "
        dir="rtl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 inline-block text-transparent bg-clip-text">
          المدير الدكتور داوُد حرب
        </h2>

        <p className="text-md leading-relaxed mb-4 text-justify font-bold">
          هو أكاديمي وخبير تربوي ومحاضر في الجامعة اللبنانية الدولي LIU و جامعة القديس يوسف في بيروت USJ، يتمتع بخبرة طويلة في
          التعليم الثانوي والجامعي. يحمل دكتوراه في التربية وزمالة من جامعة
          هارفرد، ومتخصص في إدارة الموارد البشرية في الجامعة اللبنانية الأميركية.
        </p>

        <p className="text-md leading-relaxed text-justify font-bold">
          يقود إدارة ثانوية أجيال – الدوير منذ 2019، ويعمل على تطويرها وفق
          مبادئ التعليم الحديث ومهارات القرن الحادي والعشرين. وهو مؤسّس ومقدّم
          بودكاست المدير التربوي لنشر الوعي التربوي في لبنان والعالم العربي.
        </p>
        <div className="mt-6 text-right">
  <Link
    to="/portfolio"
    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-md transition"
  >
 Portfolio
  </Link>
</div>

      </motion.div>

      {/* CENTER IMAGE */}
      <motion.div
        className="md:w-1/3 order-2 flex justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 2 }}
      >
        <img
          src={principleDaud}
          alt="Principal Daoud"
          className="w-653 h-[15rem] md:w-88 md:h-[22rem] object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* LEFT SECTION (Educational Consultation) - Appears LAST on mobile */}
      <motion.div
        className="md:w-1/3 order-3 md:order-1 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
        transition={{ duration: 2 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 inline-block text-transparent bg-clip-text">
          Educational Consultation
        </h3>

  <p
  className="text-lg md:text-xl mb-8 leading-relaxed text-right text-justify"
  dir="rtl"
>
  احجز{" "}
  <span className="bg-blue-400 px-1 rounded">
    اسـتشارة تـربوية مجانية
  </span>
  {" "}مع المدير التربوي الدكتور داوُد حرب، للحصول على توجيه مهني ودعم أكاديمي
  واستشارات متخصّصة في المجال التعليمي بالإضافة إلى إدارة المدارس والمؤسسات
  التربوية.
</p>

<p className="text-lg md:text-xl mb-8 leading-relaxed text-justify">
  Schedule an{" "}
  <span className="bg-blue-400 px-1 rounded">
    educational free consultation
  </span>
  {" "}with Principal Dr. Daoud Harb for professional guidance, academic support,
  and specialized educational mentorship, including school and institutional
  leadership.
</p>


        {/* Buttons Centered */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
          <a
            href="mailto:d.david.harb@gmail.com"
            className="bg-white text-blue-900 font-bold px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Email
          </a>

          <a
            href="https://wa.me/96170837052"
            className="bg-green-500 text-white font-bold px-6 py-3 rounded-md hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Description;
