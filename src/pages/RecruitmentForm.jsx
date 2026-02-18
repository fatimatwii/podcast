import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const RecruitmentForm = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [personal, setPersonal] = useState({
    fullName: "",
    birthPlace: "",
    maritalStatus: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    date: new Date().toLocaleDateString(),
  });

  const [education, setEducation] = useState([
    { degree: "", institution: "", year: "" },
  ]);

  const [experience, setExperience] = useState([
    { company: "", role: "", years: "" },
  ]);

  /* ---------------- HANDLERS ---------------- */

  const handlePersonalChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const updateEducation = (i, field, value) => {
    const updated = [...education];
    updated[i][field] = value;
    setEducation(updated);
  };

  const addEducation = () => {
    setEducation([...education, { degree: "", institution: "", year: "" }]);
  };

  const removeEducation = (i) => {
    setEducation(education.filter((_, index) => index !== i));
  };

  const updateExperience = (i, field, value) => {
    const updated = [...experience];
    updated[i][field] = value;
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience([...experience, { company: "", role: "", years: "" }]);
  };

  const removeExperience = (i) => {
    setExperience(experience.filter((_, index) => index !== i));
  };

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = (e) => {
    e.preventDefault();

    const educationText = education
      .map(
        (e, i) =>
          `Education ${i + 1}:
Degree: ${e.degree}
institution: ${e.institution}
year: ${e.year}`
      )
      .join("\n\n");

    const experienceText = experience
      .map(
        (e, i) =>
          `Experience ${i + 1}:
Company: ${e.company}
Role: ${e.role}
Years of Experience: ${e.years}`
      )
      .join("\n\n");

    emailjs
      .send(
        "service_jni6q6n",
        "template_8rrpad8",
        {
          ...personal,
          education: educationText,
          experience: experienceText,
        },
        "Hn5Ej3gPgrnwuKHau"
      )
      .then(() => {
        alert("Application sent successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Error sending application");
      });
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen  flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl p-8 rounded-xl shadow-lg space-y-6 text-black bg-white mt-4 mb-4"
      >
        <h1 className="text-2xl font-bold text-center">
          Job Application Form | استمارة التوظيف
        </h1>

        {/* PERSONAL */}
        <Section title="Personal Information | المعلومات الشخصية">
          <Input label="Full Name | الاسم الكامل" className="text-black" name="fullName" onChange={handlePersonalChange} />
          <Input label="Gender | الجنس" name="gender" className="text-black" onChange={handlePersonalChange} />
          <Input label="Email | البريد الإلكتروني" className="text-black" name="email" onChange={handlePersonalChange} />
          <Input label="Phone | الهاتف" name="phone" className="text-black" onChange={handlePersonalChange} />

          <Input label="Place of Birth | محل الولادة" className="text-black" name="birthPlace" onChange={handlePersonalChange} />
          <Input label="Marital Status | الوضع العائلي" className="text-black" name="maritalStatus" onChange={handlePersonalChange} />
          <Input label="Address | عنوان السكن" className="text-black" name="address" onChange={handlePersonalChange} />
        </Section>

        {/* EDUCATION */}
        <Section title="Education | الدراسة">
          {education.map((edu, i) => (
            <Box key={i}>
              <Input label="Degree | الشهادة" className="text-black" value={edu.degree} onChange={(e) => updateEducation(i, "degree", e.target.value)} />
              <Input label="Institution | المؤسسة" className="text-black" value={edu.institution} onChange={(e) => updateEducation(i, "institution", e.target.value)} />
              <Input label="Year | السنة" className="text-black" value={edu.year} onChange={(e) => updateEducation(i, "year", e.target.value)} />

              {education.length > 1 && (
                <RemoveButton onClick={() => removeEducation(i)} />
              )}
            </Box>
          ))}

          <AddButton onClick={addEducation} label="+ Add Education" />
        </Section>

        {/* EXPERIENCE */}
        <Section title="Experience | الخبرة">
          {experience.map((exp, i) => (
            <Box key={i}>
              <Input label="Company | مكان العمل" className="text-black" value={exp.company} onChange={(e) => updateExperience(i, "company", e.target.value)} />
              <Input label="Role | الوظيفة" className="text-black" value={exp.role} onChange={(e) => updateExperience(i, "role", e.target.value)} />
              <Input label="Years | عدد السنوات " className="text-black" value={exp.years} onChange={(e) => updateExperience(i, "years", e.target.value)} />

              {experience.length > 1 && (
                <RemoveButton onClick={() => removeExperience(i)} />
              )}
            </Box>
          ))}

          <AddButton onClick={addExperience} label="+ Add Experience" />
        </Section>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition"
        >
          Submit Application | إرسال الطلب
        </button>
      </form>
    </div>
  );
};

/* ---------------- COMPONENTS ---------------- */

const Section = ({ title, children }) => (
  <>
    <h2 className="font-semibold text-lg border-b pb-2">{title}</h2>
    {children}
  </>
);

const Box = ({ children }) => (
  <div className="border p-4 rounded-md space-y-3">{children}</div>
);

const Input = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const AddButton = ({ onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-blue-900 text-white px-4 py-2 rounded"
  >
    {label}
  </button>
);

const RemoveButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-red-600 text-sm"
  >
    Remove
  </button>
);

export default RecruitmentForm;
