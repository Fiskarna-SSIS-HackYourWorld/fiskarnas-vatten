import React, { useState, useEffect } from "react";
import Widget from "./Widget";
import "./WidgetContainer.css";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function WidgetContainer() {
  const query = useQuery();
  const [index, setIndex] = useState(query.get("index"));

  useEffect(() => {
    setIndex(query.get("index"));
  }, [query]);

  return (
    <div className="widget-container">
      <h1 style={{ marginBottom: "20px" }}>Dashboard: System {index}</h1>
      <div className="widget-grid">
        <Widget Title="Air pressure" Info="Pressure" Unit="PA" />
        <Widget Title="Humidity" Info="Humidity" Unit="(%)" />
        <Widget Title="Temperature" Info="Temp" Unit="C*" />
        <Widget Title="Information" Info=" " Unit=" " />
      </div>
    </div>
  );
}
