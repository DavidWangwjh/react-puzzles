/*
Create a React application that displays a countdown timer with an audio cue when the timer reaches zero.
*/
import React, { useState, useEffect } from 'react'

const Puzzle5 = () => {
  const [timer, setTimer] = useState(5);
  const [timerStart, setTimerStart] = useState(false);

  const startTimer = () => {
    setTimer(5);
    setTimerStart(true)
  }

  const updateTimer = () => {
    setTimer(prev => {
      if (prev - 1 === 0) {
        setTimerStart(false);
        const audio = new Audio('/puzzle-assets/puzzle5-audio.mp3');
        audio.play();
        return 0;
      }
      return prev - 1;
    });
  }

  useEffect(() => {
    let intervalId;
    console.log("useEffect starts")
    if (timerStart) {
      intervalId = setInterval(updateTimer, 1000);
      console.log("intervalId: ", intervalId);
    }
    return () => {
      console.log("returning")
      if (intervalId) {
        console.log("clearing intervalId: ", intervalId);
        clearInterval(intervalId);
      }
    };
  }, [timerStart]);
  

  return (
    <div>
      <p>Timer: {timer}</p>
      <button onClick={startTimer}>{timer === 5 && !timerStart? "Start" : "Restart"}</button>
    </div>
  )
}

export default Puzzle5