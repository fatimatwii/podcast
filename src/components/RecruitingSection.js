import React from "react";
import subscribeImage from "../assets/images/Recruitment-Image.jpg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const RecruitingSection = () => {
  return (
    <section className="w-full py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Image */}
        <div className="md:w-1/3">
          <img
            src={subscribeImage}
            alt="Recruitment"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
           Daoud Harb Recruitment Agency -  Your Gateway to New Career Opportunities
          </h2>

          <p className="text-gray-700 text-right mb-8" dir="rtl">
         اذا كنت ترغب بالحصول على وظيفة، سواء كنت طالب جامعي او صاحب اختصاص، يمكن لك تعبئة استمارة سريعة وسيقوم فريق التوظيف بالتواصل معكم لإجراء مقابلة وتأمين الوظيفة المناسبة.
          </p>

          {/* Button */}
          <Link to="/recruitment-form">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 w-fit">
              Apply for a Job | تعبئة استمارة طلب توظيف
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecruitingSection;
