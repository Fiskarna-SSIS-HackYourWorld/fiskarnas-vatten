import React, { useState, useRef, useEffect } from "react";
import "./Widget.css";
import { Line } from "react-chartjs-2";

interface ChartData {
  labels: (string | Date)[];
  datasets: {
    label: string;
    data: (string | number)[];
    fill: boolean;
    borderColor: string;
    tension: number;
  }[];
}

export default function Widget({} : {Title: string, Info: string, Unit: string}) {
  const [chartData, setChartData] = useState<ChartData>({
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Air Pressure",
        data: [9800, 98081, 98081, 98090, 98081],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  });

  

  return (
    <div className="container">
      <h2>Air Pressure:</h2>
      <div className="main-content">
        <div style={{ width: "70px" }}>
          <div>Pressure</div>
          <div>PA</div>
        </div>
        <Line data={chartData} />
      </div>
    </div>)
 }