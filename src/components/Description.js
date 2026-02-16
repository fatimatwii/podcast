import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import principleDaud from "../assets/images/ai-portrait.png";
import Training from "../assets/images/IMG-20260205-WA0005.jpg";

function Description() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-12"
    >
      {/* ================= MAIN SECTION ================= */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

  {/* RIGHT (Arabic Text) → FIRST on mobile, THIRD on desktop */}
  <motion.div
    className="w-full md:w-1/3 text-right order-1 md:order-3"
    dir="rtl"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
    transition={{ duration: 1.5 }}
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 text-transparent bg-clip-text">
      المدير الدكتور داوُد حرب
    </h2>

    <p className="text-sm md:text-base leading-relaxed mb-4 text-justify font-bold">
      هو أكاديمي وخبير تربوي ومحاضر في الجامعة اللبنانية الدولي LIU
      وجامعة القديس يوسف في بيروت USJ، يتمتع بخبرة طويلة في التعليم
      الثانوي والجامعي. يحمل دكتوراه في التربية وزمالة من جامعة
      هارفرد، ومتخصص في إدارة الموارد البشرية في الجامعة اللبنانية الأميركية.
    </p>

    <p className="text-sm md:text-base leading-relaxed text-justify font-bold">
      يقود إدارة ثانوية أجيال – الدوير منذ 2019، ويعمل على تطويرها
      وفق مبادئ التعليم الحديث ومهارات القرن الحادي والعشرين.
      وهو مؤسّس ومقدّم بودكاست المدير التربوي لنشر الوعي التربوي.
    </p>
  </motion.div>

  {/* CENTER IMAGE → SECOND on all screens */}
  <motion.div
    className="w-full md:w-1/3 flex justify-center order-2"
    initial={{ scale: 0.9 }}
    animate={{ scale: isVisible ? 1 : 0.9 }}
    transition={{ duration: 1.5 }}
  >
    <img
      src={principleDaud}
      alt="Principal Daoud"
      className="w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 object-cover rounded-xl shadow-xl"
    />
  </motion.div>

  {/* LEFT (Consultation) → THIRD on mobile, FIRST on desktop */}
  <motion.div
    className="w-full md:w-1/3 text-center md:text-left order-3 md:order-1"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
    transition={{ duration: 1.5 }}
  >
    <h3 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 text-transparent bg-clip-text">
      Educational Consultation
    </h3>

    <p
      className="text-sm md:text-lg mb-6 leading-relaxed text-justify"
      dir="rtl"
    >
      احجز{" "}
      <span className="bg-blue-400 px-1 rounded">
        استشارة تربوية مجانية
      </span>{" "}
      مع المدير التربوي الدكتور داوُد حرب للحصول على دعم أكاديمي
      واستشارات متخصّصة في المجال التعليمي.
    </p>

    <p className="text-sm md:text-lg mb-8 leading-relaxed text-justify">
      Schedule an{" "}
      <span className="bg-blue-400 px-1 rounded">
        educational free consultation
      </span>{" "}
      with Principal Dr. Daoud Harb for professional guidance and
      institutional leadership.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

</div>


      {/* ================= TRAINING CARD ================= */}
      <motion.div
        className="max-w-5xl mx-auto mt-16 bg-[#1e1e1e] rounded-xl p-4 sm:p-4"
        dir="rtl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 1.2 }}
      >
        {/* TITLE — TOP ON ALL SCREENS */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-white to-blue-400 text-transparent bg-clip-text">
          Educational Training
        </h2>


        {/* CONTENT */}
        <div className="flex flex-col md:flex-row gap-6 items-center">

          {/* IMAGE */}
          <img
            src={Training}
            alt="الدورات التدريبية"
            className="w-full sm:w-80 h-80 object-cover rounded-lg"
          />

          {/* TEXT */}
          <div className="text-right flex-1">
            <p className="text-sm md:text-base leading-8 md:leading-9 text-justify font-semibold">

              يقدّم الدكتور داود حرب دورات تدريبية وتأهيلية للأفراد والمؤسسات،
              سواء في الشؤون الأكاديمية أو الإدارية. للاطّلاع على الوحدات
              التدريبية المتاحة، يمكنكم زيارة الصفحة الخاصة.
            </p>

            <div className="flex justify-center md:justify-start mt-6">
              <a
                href="/portfolio"
                className="bg-white text-blue-900 font-bold 
               text-sm md:text-base 
               px-4 md:px-6 
               py-2 md:py-3 
               rounded-md 
               hover:bg-blue-900 hover:text-white 
               transition"
              >
                ملف الدورات التدريبية - Training portfolio
              </a>
            </div>

          </div>
        </div>
      </motion.div>

    </section>
  );
}

export default Description;
