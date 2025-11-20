import React, { useState } from "react";
import emailjs from "emailjs-com";
import subscribeImage from "../assets/images/Recruitment-Image.jpg";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const RecruitingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    cvFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "cvFile") {
      setFormData({ ...formData, cvFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.domain || !formData.cvFile) {
      alert("Please fill all fields and upload your CV.");
      return;
    }

    const base64CV = await convertFileToBase64(formData.cvFile);

    emailjs
      .send(
        "service_go0662h", 
        "template_yu3t1kg",
        {
          name: formData.name,
          domain: formData.domain,
          cvFile: base64CV,
          emailTo: "fatimaatwii886@gmail.com",
        },
        "stkAL0E8Ja7I3EDyf"
      )
      .then(
        (response) => {
          alert("Your application has been submitted successfully!");
          setFormData({ name: "", domain: "", cvFile: null });
        },
        (error) => {
          alert("There was an error. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="w-full py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/3  relative z-0">
          <img
            src={subscribeImage}
            alt="Recruitment"
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center relative z-[9999]">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Your Gateway to New Career Opportunities
          </h2>

          <p className="text-gray-700 mb-6 text-justify">
           Submit your CV and join our professional talent network.
We help connect skilled individuals with organizations seeking qualified candidates.
          </p>

          {/* Arabic Text 
          <p className="text-gray-700 text-right mb-6" dir="rtl">
            نحن دائمًا نبحث عن محترفين متميزين. يرجى تعبئة المعلومات أدناه وإرفاق السيرة الذاتية.
            سيقوم فريق التوظيف بالتواصل معكم في حال توفر شواغر مناسبة.
          </p>*/}

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="font-semibold text-gray-800">Full Name</label>
              <Input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-1"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-800">Domain / تخصصك</label>
              <Input
                name="domain"
                type="text"
                value={formData.domain}
                onChange={handleChange}
                placeholder="e.g., Teacher, IT, Administration"
                className="mt-1"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-800">
                Upload CV (PDF or Word)
              </label>
              <Input
                name="cvFile"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg rounded-lg"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RecruitingSection;
