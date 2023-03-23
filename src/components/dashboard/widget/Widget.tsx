import React, { useState, useRef, useEffect } from "react";
import "./Widget.css";
import { Line } from "react-chartjs-2";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: string[];
    fill: boolean;
    borderColor: string;
    tension: number;
  }[];
}

export default function Widget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: "Air Pressure",
        data: [],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const c = canvas.getContext("2d")!;

    canvas.width = 300;
    canvas.height = 200;

    let pressure = 1000;

    function update() {
      draw();

      pressure = pressure + Math.random() - 0.5;

      setChartData((prevChartData) => {
        const newLabels = [...prevChartData.labels, new Date().toLocaleTimeString()];
        const newData = [...prevChartData.datasets[0].data, pressure.toFixed(2)];
        return { labels: newLabels, datasets: [{ ...prevChartData.datasets[0], data: newData }] };
      });

      requestAnimationFrame(update);
    }

    function draw() {
      c.fillStyle = "black";
      c.fillRect(0, 0, canvas.width, canvas.height);
    }

    update();
  }, []);

  return (
    <div className="container">
      <h2>Air Pressure:</h2>
      <div className="main-content">
        <div style={{ width: "70px" }}>
          <div>Pressure</div>
          <div>PA</div>
        </div>
        <canvas ref={canvasRef}></canvas>
        <Line data={chartData} />
      </div>
    </div>
  );
}