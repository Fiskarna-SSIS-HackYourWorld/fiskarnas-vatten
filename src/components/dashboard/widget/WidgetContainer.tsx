import React, { useState } from "react";
import Infoboard from "./Inforboard";
import React, { useState, useEffect } from "react";
import Widget from "./Widget";
import "./WidgetContainer.css";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function WidgetContainer() {

  const [automaticWatering, setAutomaticWatering] = useState<boolean>(true);
  const query = useQuery();
  const [index, setIndex] = useState(query.get("index"));

  useEffect(() => {
    setIndex(query.get("index"));
  }, [query]);

  function toggle(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    ev.preventDefault();
    automaticWatering
      ? setAutomaticWatering(false)
      : setAutomaticWatering(true);
  }

  return (
    <div className="widget-container">
      <h1 style={{ marginBottom: "20px" }}>Dashboard: System {index}</h1>
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
