import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import Dot from "public/dot.svg";

import stl from "./LineChart.module.scss";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", ""],
    datasets: [
      {
        data: [40, 80, 30, 52, 45, 65, 55, 75, 63, 70],
        backgroundColor: "#ff0000",
        fill: true,
        borderColor: "#f2946d",
        pointBackgroundColor: "#ff9060",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: [0, 7, 7, 7, 7, 7, 7, 7, 7, 0],
        tension: 0.4,
        showLine: true,
      },
    ],
  };

  const options = {
    hover: {
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          callback: (value: any) => value + "%",
        },
      },
    },
  };

  return (
    <div className={stl.lineChart}>
      <div className={stl.row}>
        <div className={stl.left}>
          <Dot /> Electricity Consumed
        </div>
        <div className={stl.right}>73% Spending</div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
