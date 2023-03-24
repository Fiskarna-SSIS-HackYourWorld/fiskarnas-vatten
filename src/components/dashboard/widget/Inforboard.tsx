import React, { useState, useRef, useEffect } from "react";
import "./Widget.css";

export default function Infoboard() {
  const [ping, setPing] = useState<number>(-1);
  const [activeLocation, setActiveLocation] = useState<number>(-1);
  const locations = [
    "Green Corner",
    "Snake",
    "Arkaden",
    "Monopoly",
    "Plocke pinn",
    "Donkey Kong",
    "Datorklubben",
    "Pac-man"
  ];
  useEffect(() => {
    setPing(randomIntegerNum(3, 20));
    setActiveLocation(randomIntegerNum(1, locations.length - 1));
  });
  function randomIntegerNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className="container">
      <h2>Info Board</h2>
      <div className="main-content">
        <div>
          <div>Last ping: {ping}ms</div>
          {activeLocation != -1 && (
            <div>Location: {locations[activeLocation]}</div>
          )}
        </div>
      </div>
    </div>
  );
}
