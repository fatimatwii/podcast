import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const RecruitmentForm = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  /* ---------------- PERSONAL ---------------- */

  const [personal, setPersonal] = useState({
    fullName: "",
    birthPlace: "",
    birthDate: "",
    motherName: "",
    spouseName: "",
    registrationPlaceNumber: "",
    childrenCount: "",
    spouseJob: "",
    maritalStatus: "",
    email: "",
    phone: "",
    extraPhone: "",
    address: "",
    gender: "",
    expectedSalary: "",
    computerSkills: "",
    aboutYou: "",
    date: new Date().toLocaleDateString(),
  });

  const handlePersonalChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  /* ---------------- EDUCATION ---------------- */

  const [education, setEducation] = useState([
    { degree: "", institution: "", year: "" },
  ]);

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

  /* ---------------- EXPERIENCE ---------------- */

  const [experience, setExperience] = useState([
    { company: "", role: "", years: "" },
  ]);

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

  /* ---------------- JOBS ---------------- */

  const [jobs, setJobs] = useState([]);
  const [otherJob, setOtherJob] = useState("");

  const jobOptions = [
    "Nurse | تمريض",
    "Teacher | تعليم",
    "Administrator | إداري",
    "Accountant | محاسب",
    "Engineer | هندسة",
    "IT Specialist | أخصائي تكنولوجيا معلومات",
    "Receptionist | موظف استقبال",
  ];

  const handleJobChange = (job) => {
    if (jobs.includes(job)) {
      setJobs(jobs.filter((j) => j !== job));
    } else {
      setJobs([...jobs, job]);
    }
  };

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = (e) => {
    e.preventDefault();

    const educationText = education
      .map(
        (e, i) =>
          `Education ${i + 1}
Degree: ${e.degree}
Institution: ${e.institution}
Year: ${e.year}`
      )
      .join("\n\n");

    const experienceText = experience
      .map(
        (e, i) =>
          `Experience ${i + 1}
Company: ${e.company}
Role: ${e.role}
Years: ${e.years}`
      )
      .join("\n\n");

    const selectedJobs =
      jobs.join(", ") + (otherJob ? `, Other: ${otherJob}` : "");

    emailjs
      .send(
        "service_jni6q6n",
        "template_8rrpad8",
        {
          ...personal,
          education: educationText,
          experience: experienceText,
          selectedJobs,
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
    <div className="min-h-screen flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white p-6 md:p-10 rounded-xl shadow-lg space-y-8 text-black"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Job Application Form | استمارة التوظيف
        </h1>

        {/* PERSONAL */}
        <Section title="Personal Information | المعلومات الشخصية">
          <Input label="Full Name | الاسم الثلاثي" name="fullName" onChange={handlePersonalChange} />
          <Input label="Gender | الجنس" name="gender" onChange={handlePersonalChange} />
           <Input label="Place of Birth | محل الولادة" name="birthPlace" onChange={handlePersonalChange} />
          <Input label="Date of Birth | تاريخ الولادة" type="date" name="birthDate" onChange={handlePersonalChange} />
             <Input label="Marital Status | الوضع العائلي" name="maritalStatus" onChange={handlePersonalChange} />
          <Input label="Registration Place and number | محل ورقم القيد" name="registrationPlaceNumber" onChange={handlePersonalChange} />
       
          <Input label="Mother's Name | اسم الأم" name="motherName" onChange={handlePersonalChange} />
          <Input label="Wife/Husband Name | اسم الزوج\الزوجة" name="spouseName" onChange={handlePersonalChange} />
           <Input label="Wife/Husband Job | مهنة الزوج\الزوجة" name="spouseJob" onChange={handlePersonalChange} />
           <Input label="Number of Children | عدد الأولاد" name="childrenCount" onChange={handlePersonalChange} />
       
          <Input label="Email  | البريد الالكتروني" name="email" onChange={handlePersonalChange} />
          <Input label="Phone | الهاتف" name="phone" onChange={handlePersonalChange} />
          <Input label="Additional Phone | هاتف إضافي" name="extraPhone" onChange={handlePersonalChange} />
          <Input label="Address | عنوان السكن الحالي" name="address" onChange={handlePersonalChange} />
        </Section>

        {/* EDUCATION */}
        <Section title="Education | الدراسة">
          {education.map((edu, i) => (
            <Box key={i}>
              <Input label="Degree | الشهادة التي تحملها" value={edu.degree} onChange={(e) => updateEducation(i, "degree", e.target.value)} />
              <Input label="Institution | المؤسسة التي تخرجت منها" value={edu.institution} onChange={(e) => updateEducation(i, "institution", e.target.value)} />
              <Input label="Year | سنة التخرج" value={edu.year} onChange={(e) => updateEducation(i, "year", e.target.value)} />
              {education.length > 1 && <RemoveButton onClick={() => removeEducation(i)} />}
            </Box>
          ))}
          <AddButton onClick={addEducation} label="+ Add Education" />
        </Section>

        {/* EXPERIENCE */}
        <Section title="Experience | الخبرة">
          {experience.map((exp, i) => (
            <Box key={i}>
              <Input label="Company | المؤسسة" value={exp.company} onChange={(e) => updateExperience(i, "company", e.target.value)} />
              <Input label="Role | الوظيفة" value={exp.role} onChange={(e) => updateExperience(i, "role", e.target.value)} />
              <Input label="Years of Experience | عدد سنوات الخبرة " value={exp.years} onChange={(e) => updateExperience(i, "years", e.target.value)} />
              {experience.length > 1 && <RemoveButton onClick={() => removeExperience(i)} />}
            </Box>
          ))}
          <AddButton onClick={addExperience} label="+ Add Experience" />
        </Section>

        {/* JOBS */}
        <Section title="Desired Jobs | الوظائف المطلوبة">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {jobOptions.map((job, i) => (
              <label key={i} className="flex items-center gap-2 justify-center md:justify-start">
                <input type="checkbox" onChange={() => handleJobChange(job)} />
                {job}
              </label>
            ))}
          </div>
          <Input label="Other" value={otherJob} onChange={(e) => setOtherJob(e.target.value)} />
        </Section>

        {/* GENERAL */}
        <Section title="General Information | بيانات عامة">
          <Input label="Computer Skills | الإلمام بالكمبيوتر" name="computerSkills" onChange={handlePersonalChange} />
          <Input label="Expected Salary (USD) | الراتب المتوقع بالدولار " name="expectedSalary" onChange={handlePersonalChange} />
          <TextArea label="Tell us about yourself | عرّف عن نفسك" name="aboutYou" onChange={handlePersonalChange} />
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

/* COMPONENTS */

const Section = ({ title, children }) => (
  <>
    <h2 className="text-lg font-semibold border-b pb-2 text-center md:text-left">
      {title}
    </h2>
    {children}
  </>
);

const Box = ({ children }) => (
  <div className="border p-4 rounded-md space-y-3">{children}</div>
);

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div className="text-center md:text-left">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-md px-3 py-2 text-black"
    />
  </div>
);

const TextArea = ({ label, name, onChange }) => (
  <div className="text-center md:text-left">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <textarea
      name={name}
      rows="4"
      onChange={onChange}
      className="w-full border rounded-md px-3 py-2 text-black"
    />
  </div>
);

const AddButton = ({ onClick, label }) => (
  <button type="button" onClick={onClick} className="bg-blue-900 text-white px-4 py-2 rounded">
    {label}
  </button>
);

const RemoveButton = ({ onClick }) => (
  <button type="button" onClick={onClick} className="text-red-600 text-sm">
    Remove
  </button>
);

export default RecruitmentForm;