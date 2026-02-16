import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Topsection from "./components/Topsection";
import Description from "./components/Description";
import Episodes from "./components/Episodes";
import VideoGallery from "./components/VideoGallery";
import EmailSubscribe from "./components/EmailSubscribe";
import Footer from "./components/Footer";
import RecruitingSection from "./components/RecruitingSection";
import Portfolio from "./pages/Portfolio";
import RecruitmentForm from "./pages/RecruitmentForm";
const Home = () => (
  <>
    <Header />
    <div>
      <section id="home"><Topsection /></section>
      <section id="description"><Description /></section>
       <section id="RecruitingSection"><RecruitingSection /></section>
      <section id="podcast"><Episodes /></section>
      <section id="video"><VideoGallery /></section>
      <section id="email"><EmailSubscribe /></section>
    </div>
    <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/recruitment-form" element={<RecruitmentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
