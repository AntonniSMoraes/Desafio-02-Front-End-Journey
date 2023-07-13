import React, { useState, useEffect } from "react";
import "./timerComponent.css";

function TimerComponent(props) {
  const { auctionEndsIn, firstText, textButton } = props;
  const [timeRemaining, setTimeRemaining] = useState(auctionEndsIn);

  useEffect(() => {
    // Converte o valor de auctionEndsIn para segundos
    const [hours, minutes, seconds] = auctionEndsIn.split(" : ");
    let totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

    const interval = setInterval(() => {
      // Calcula o tempo restante em horas, minutos e segundos
      const hoursRemaining = Math.floor(totalSeconds / 3600);
      const minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
      const secondsRemaining = totalSeconds % 60;

      // Atualiza o estado com o tempo restante formatado
      setTimeRemaining(`${hoursRemaining} : ${minutesRemaining} : ${secondsRemaining}`);

      // Decrementa o tempo restante em um segundo
      totalSeconds--;

      // Verifica se o tempo restante chegou a zero
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
        <h1>{timeRemaining}</h1>
        <button>{textButton}</button>
      </div>   
    </div>
  );
}

export default TimerComponent;
