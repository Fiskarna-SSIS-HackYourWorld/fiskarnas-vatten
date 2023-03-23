import React, { useState, useRef, useEffect } from "react";
import "./Widget.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { LineGraph } from "./Line";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function Widget({}: {
  Title: string;
  Info: string;
  Unit: string;
}) {
  return (
    <div className="container">
      <h2>Air Pressure:</h2>
      <div className="main-content">
        <div>
          <div>Pressure</div>
          <div>PA</div>
          <LineGraph />
        </div>
      </div>
    </div>
  );
}
