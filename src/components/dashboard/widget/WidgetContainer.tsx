import React from "react";
import Widget from "./Widget";
import "./WidgetContainer.css"
export default function WidgetContainer() {
  return (
    <div className="widget-container">
      <Widget />
      <Widget />
      <Widget />
      <Widget />
    </div>
  );
}
