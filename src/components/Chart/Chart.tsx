"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

import styles from "./Chart.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = {
  responsive: true,
  plugins: {},
};

const labels = ["1", "2", "3", "4", "5"];

export const data = {
  labels,
  datasets: [
    {
      label: "Ventas 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1400 })),
      backgroundColor: "#367DFD",
    },
    {
      label: "Ventas 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1400 })),
      backgroundColor: "#1A3D7D",
    },
  ],
};

export default function Chart() {
  return (
    <div className={styles.container}>
      <Bar options={options} data={data} />
    </div>
  );
}
