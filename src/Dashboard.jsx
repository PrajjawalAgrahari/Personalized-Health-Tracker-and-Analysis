import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
// import { LineChart } from "recharts";
import LinChart from "./components/LineChart";
import LinChart1 from "./components/LineChart_1";

function App() {
  const trackSteps = [
    {
      date: "2024-04-12",
      steps: 5000,
    },
    {
      date: "2024-04-13",
      steps: 7500,
    },
    {
      date: "2024-04-14",
      steps: 6000,
    },
    {
      date: "2024-04-15",
      steps: 8000,
    },
    {
      date: "2024-04-16",
      steps: 10000,
    },
    {
      date: "2024-04-17",
      steps: 12000,
    },
    {
      date: "2024-04-18",
      steps: 9000,
    },
  ];

  const weight = [
    {
      date: "2024-04",
      weight: 50,
    },
    {
      date: "2024-05",
      weight: 75,
    },
    {
      date: "2024-06",
      weight: 60,
    },
    {
      date: "2024-07",
      weight: 80,
    },
    {
      date: "2024-08",
      weight: 100,
    },
    {
      date: "2024-09",
      weight: 120,
    },
    {
      date: "2024-10",
      weight: 90,
    },
  ];

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="bg-purple-300 secPart">
          {/* <div className="lin"> */}
          <div className="flex justify-center items-center m-10 mx-40 h-10 bg-gray-200 text-purple">
            Number of Exercises Completed : 10 / 20
          </div>
          <LinChart props={trackSteps} />
          <LinChart1 props={weight} />
          {/* <LinChart /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
