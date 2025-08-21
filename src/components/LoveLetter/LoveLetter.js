import React, { useState, useRef } from 'react';
import './LoveLetter.css';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        My Cute lobster🖤,<br />
        This Christmas, you light up my world like the twinkling little stars on a winter's night. All I want is to see your smile and be happy. 
        You are my greatest gift, my warmest hug on the coldest days, and my forever home. I love you endlessly—today, tomorrow, and always.
      </div>
      <audio ref={audioRef} src="path-to-your-audio-file.mp3" />
    </div>
  );
};

export default LoveLetter;
