import React, { useState } from "react";
import Infoboard from "./Inforboard";
import Widget from "./Widget";
import "./WidgetContainer.css";
export default function WidgetContainer() {
  const [automaticWatering, setAutomaticWatering] = useState<boolean>(true);

  function toggle(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    ev.preventDefault();
    automaticWatering
      ? setAutomaticWatering(false)
      : setAutomaticWatering(true);
  }
  return (
    <div className="widget-container">
      <h1 style={{ marginBottom: "20px" }}>Dashboard: System 1</h1>
      <div className="widget-grid">
        <Widget Title="Air pressure" Info="Pressure" Unit="PA" />
        <Widget Title="Humidity" Info="Humidity" Unit="(%)" />
        <Widget Title="Temperature" Info="Temp" Unit="C*" />
        <Infoboard />
        {automaticWatering ? (
          <button onClick={(ev) => toggle(ev)}>Automatic Watering: ON</button>
        ) : (
          <button onClick={(ev) => toggle(ev)}>Automatic Watering: OFF</button>
        )}
      </div>
    </div>
  );
}
