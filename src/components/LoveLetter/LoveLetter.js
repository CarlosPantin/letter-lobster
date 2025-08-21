import React, { useState, useRef } from "react";
import "./LoveLetter.css";

const LoveJournal = () => {
  const [page, setPage] = useState(0);
  const audioRef = useRef(null);

  const startDate = new Date("2021-08-22");
  const daysTogether = Math.floor(
    (Date.now() - startDate) / (1000 * 60 * 60 * 24)
  );

  const pages = [
    {
      text: `My love, we've shared ${daysTogether} days together 💕
      and every one of them has been a dream come true. I love spending time with you and of course bully you as well. I love when you are smiling, laughing, and when you talk about your silly little things.`,
      figure: "🌅",
    },
    {
      text: "You are my safe place, my laughter on hard days, my warmth on cold nights. You believe in me and you have taught me what true love really means over these past 4 years. You are the best person on this whole world and your good intentions light me up from inside. 🌙",
      figure: "🏠",
    },
    {
      text: " I fall in love with you more every single day in the way you care so deeply, in the way your eyes shine when you’re happy, in the way you make even the smallest moments magical. Everytime I see you I get reminded how lucky I am to have you. ❤️",
      figure: "🌹",
    },
    {
      text: "Happy 4th Anniversary, my lobster 🦞✨ Here’s to a forever life together, facing ups and downs and whatever life throws at us. I am happy to have you by my side, no matter what happens.",
      figure: "💍",
    },
  ];

  return (
    <div className="journal-container">
      <audio ref={audioRef} src="your-romantic-music.mp3" autoPlay loop />

      <div className="floating-hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
              fontSize: `${16 + Math.random() * 24}px`,
            }}
          >
            {Math.random() > 0.5 ? "❤️" : "✨"}
          </span>
        ))}
      </div>

      <div className="header">
        <h2>Our Love Story</h2>
        <p>{daysTogether} days together ✨</p>
      </div>

      <div className="journal">
        <div key={page} className="page fade-slide">
          <div className="figure">{pages[page].figure}</div>
          <div className="text-card">
            <p>
              <span className="dropcap">{pages[page].text.charAt(0)}</span>
              {pages[page].text.slice(1)}
            </p>
          </div>
        </div>

        <div className="nav">
          {page > 0 && (
            <button className="nav-btn left" onClick={() => setPage(page - 1)}>
              ❥
            </button>
          )}
          {page < pages.length - 1 && (
            <button className="nav-btn right" onClick={() => setPage(page + 1)}>
              ❥
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoveJournal;
