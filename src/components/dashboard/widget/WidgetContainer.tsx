import React from "react";
import Widget from "./Widget";
import "./WidgetContainer.css"
export default function WidgetContainer() {
  return (
    <div className="widget-container">
      <Widget Title="Air pressure" Info="Pressure" Unit="PA" />
      <Widget Title="Humidity" Info="Humidity" Unit="(%)"/>
      <Widget Title="Temperature" Info="Temp" Unit="C*"/>
      <Widget Title="Information" Info=" " Unit=" "/>
    </div>
  );
}
