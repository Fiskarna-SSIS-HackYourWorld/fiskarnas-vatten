import React from "react";
import Widget from "./Widget";
import "./WidgetContainer.css";
export default function WidgetContainer() {
  return (
    <div className="widget-container">
      <h1 style={{marginBottom:"20px"}}>Dashboard: System 1</h1>
      <div className="widget-grid">
        <Widget Title="Air pressure" Info="Pressure" Unit="PA" />
        <Widget Title="Humidity" Info="Humidity" Unit="(%)" />
        <Widget Title="Temperature" Info="Temp" Unit="C*" />
        <Widget Title="Information" Info=" " Unit=" " />
      </div>
    </div>
  );
}
