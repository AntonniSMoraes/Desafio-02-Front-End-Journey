import React, { useState, useEffect } from "react";
import "./timerComponent.css";

function TimerComponent(props) {
  const { auctionEndsIn, firstText, textButton } = props;
  const [timeRemaining, setTimeRemaining] = useState(auctionEndsIn);
  const [hoursRemaining, setHoursRemaining] = useState(0);
  const [minutesRemaining, setMinutesRemaining] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  useEffect(() => {
    const [hours, minutes, seconds] = auctionEndsIn.split(" : ");
    let totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

    const interval = setInterval(() => {
      const hoursRemaining = Math.floor(totalSeconds / 3600);
      const minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
      const secondsRemaining = totalSeconds % 60;

      setHoursRemaining(hoursRemaining);
      setMinutesRemaining(minutesRemaining);
      setSecondsRemaining(secondsRemaining);

      totalSeconds--;

      if (totalSeconds < 0) {
        clearInterval(interval);
        setTimeRemaining("Auction Ended");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [auctionEndsIn]);

  return (
    <div className="fundo">
      <div className="timer">
        <p>{firstText}</p>
        <div className="counters">
          <div>
            <h1>{hoursRemaining} :</h1>
            <span>Hours</span>
          </div>
          <div>
            <h1>{minutesRemaining} :</h1>
            <span>Minutes</span>
          </div>
          <div>
            <h1>{secondsRemaining}</h1>
            <span>Seconds</span>
          </div>
        </div>
        <button>{textButton}</button>
      </div>
    </div>
  );
}

export default TimerComponent;
