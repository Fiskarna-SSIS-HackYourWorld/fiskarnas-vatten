import React, { useState } from "react";
import "./Widget.css";
import { Line } from "react-chartjs-2";

export default function Widget() {
  return (
    <div className="container">
      <h2>Air Pressure:</h2>
      <div className="main-content">
        <div style={{width:"70px"}}>
          <div>Pressure</div>
          <div>PA</div>
        </div>
        <div>
          för i helvete
        </div>
      </div>

    </div>
  );
}
