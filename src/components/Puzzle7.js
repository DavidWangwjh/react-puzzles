/* 
Create a React component that animates text with a fade-in and scroll effect.
*/

import React, { useState, useEffect } from 'react';

const Puzzle7 = () => {

  const [opacity, setOpacity] = useState(0);
  const [y, setY] = useState(20);
  const [stopAnimation, setStopAnimation] = useState(false);

  const handleAnimation = () => {
    setOpacity(prev => prev + 0.025);
    setY(prev => prev - 1);
  }

  const restartAnimation = () => {
    setOpacity(0);
    setY(20);
    setStopAnimation(false);
  }


  useEffect(() => {
    let intervalId;
    if (!stopAnimation) {
      intervalId = setInterval(handleAnimation, 100);
    }
    if (intervalId) {
      return () => clearInterval(intervalId);
    }
  }, [stopAnimation])

  useEffect(() => {
    if (opacity >= 1 && y < -20) {
      setStopAnimation(true);
    }
  }, [opacity, y])


  return (
    <div style={{ display: 'flex', gap: '5rem', alignItems: 'center'}}>
      <p style={{ 
        opacity: opacity, 
        transform: `translateY(${y}px)`,
        transition: 'opacity 0.1s, transform 0.1s',
      }}>
        I'm fading in and scrolling!
      </p>
      <button onClick={restartAnimation}>Restart</button>
    </div>
  );
};

export default Puzzle7;
