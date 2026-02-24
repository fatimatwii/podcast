import React from "react";
import subscribeImage from "../assets/images/Recruitment-Image.jpg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const RecruitingSection = () => {
  return (
    <section className="w-full py-10 md:py-16 px-4 md:px-8 bg-white">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-0">

        {/* Image */}
        <div className="w-full md:w-1/3">
          <img
            src={subscribeImage}
            alt="Recruitment"
            className="
              w-full 
              h-64 md:h-full 
              object-cover 
              rounded-lg md:rounded-none
            "
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 p-2 md:p-8 flex flex-col justify-center">

          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 text-center md:text-left">
            Daoud Harb Recruitment Agency
          </h2>

          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center md:text-left">
            Your Gateway to New Career Opportunities
          </h3>

          <p
            className="text-gray-700 text-right mb-6 text-sm md:text-base leading-relaxed"
            dir="rtl"
          >
            اذا كنت ترغب بالحصول على وظيفة، سواء كنت طالب جامعي او صاحب اختصاص،
            يمكن لك تعبئة استمارة سريعة وسيقوم فريق التوظيف بالتواصل معكم لإجراء
            مقابلة وتأمين الوظيفة المناسبة.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link to="/recruitment-form">
              <Button className="
                bg-blue-900 
                hover:bg-blue-800 
                text-white 
                px-6 py-3 
                w-full md:w-fit
                text-center
              ">
                Apply for a Job | تعبئة استمارة طلب توظيف
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RecruitingSection;