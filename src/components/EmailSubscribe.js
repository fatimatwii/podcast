import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import subscribeImage from "../assets/images/5997022123866049370.jpg";
import emailjs from "emailjs-com";

const SPECIAL_EPISODES = [
  {
    id: "2u58h9mzVkU",
    title: "Special Episode 1",
  },
  {
    id: "FDY0cNSKwaA",
    title: "Special Episode 4",
  },
  {
    id: "88ETMlTNccY",
    title: "Special Episode 2",
  },
  {
    id: "3kv3r8g9Yr4",
    title: "Special Episode 3",
  },
  {
    id: "MHd-5_UoYu0",
    title: "Special Episode 4",
  },
  {
    id: "68G6h4ZU7jQ",
    title: "Special Episode 4",
  },

];

const EmailSubscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    emailjs
      .send(
        "service_go0662h",
        "template_yu3t1kg",
        { email: email },
        "stkAL0E8Ja7I3EDyf"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Subscription successful!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("There was an error subscribing. Please try again.");
        }
      );

    setEmail("");
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 gap-8">
      {/* Left: Subscription Form */}
      <div className="relative w-full h-[400px] lg:h-auto lg:w-1/3">

        <img
          src={subscribeImage}
          alt="Subscribe"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4 sm:p-6 rounded-b-lg">
          <h2 className="text-2xl font-semibold mb-3 text-center lg:text-left">
            Subscribe to the Mailing List
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md text-black"
            />
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full sm:w-auto"
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Right: Special Episodes */}
      <div className="lg:w-3/4 flex flex-col">
        <h3 className="text-xl font-semibold mb-4 text-center ">
          Special Episodes
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:pl-6">
          {SPECIAL_EPISODES.map((ep) => (
            <a
              key={ep.id}
              href={`https://www.youtube.com/watch?v=${ep.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition duration-200"
            >
              <div className="relative w-full aspect-video bg-white">
                <img
                  src={`https://img.youtube.com/vi/${ep.id}/hqdefault.jpg`}
                  alt={ep.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
