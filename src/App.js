import React from "react";
import Header from "./components/Header";
import Topsection from "./components/Topsection";
import Description from "./components/Description";
import Episodes from "./components/Episodes";
import VideoGallery from "./components/VideoGallery";
import RecruitingSection from "./components/RecruitingSection";
import EmailSubscribe from "./components/EmailSubscribe";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="min-h-screen text-white bg-black">
      <Header />
      <div className="">
        <section id="home"><Topsection /></section>
        <section id="description"><Description /></section>
        <section id="podcast"><Episodes /></section>
        <section id="video"><VideoGallery /></section>

        <section id="RecruitingSection"><RecruitingSection /></section>

        <section id="email"><EmailSubscribe /></section>
      </div>
      <Footer />
    </div>
  );
};

export default App;








