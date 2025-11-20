import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import subscribeImage from "../assets/images/IMG-20250129-WA0003.jpg";
import emailjs from "emailjs-com"; 

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
    <div className="relative w-full max-w-md mx-auto p-4">
      {/* Background Image */}
      <img
        src={subscribeImage}
        alt="Subscribe"
        className="w-full h-auto rounded-lg shadow-lg"
      />

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 black bg-opacity-100 text-white p-4 sm:p-6 rounded-b-lg">
        <h2 className="text-2xl font-semibold mb-3 text-center">
          Subscribe to the Mailing List
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-3">
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
  );
};

export default EmailSubscribe;
