import React, { useState } from "react";
import "./Portfolio.css";

const ACCESS_CODES = [
  "2824",
  "2323",
  "1414",
  "0099",
  "5777",
  "0201",
  "2010",
  "2626",
  "1090",
  "3435",
];

const Portfolio = () => {
  const [code, setCode] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ACCESS_CODES.includes(code.trim())) {
      setAuthorized(true);
      setError("");
    } else {
      setError("Invalid access code");
    }
  };

  // 🔒 LOCK SCREEN
  if (!authorized) {
    return (
      <div className="portfolio-lock black">
        <form onSubmit={handleSubmit} className="lock-box">
          <h2>🔒 Private Portfolio</h2>
          <p>Please enter your access code</p>

          <input
            type="password"
            placeholder="Enter code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          {error && <span className="error">{error}</span>}

          <button type="submit">Access</button>
        </form>
      </div>
    );
  }

  // ✅ AUTHORIZED → LOAD HTML
  return (
    <div className="portfolio-page black">
      <iframe
        src="/portfolio.html"
        title="Private Portfolio"
        className="portfolio-iframe"
        frameBorder="0"
      />
    </div>
  );
};

export default Portfolio;
