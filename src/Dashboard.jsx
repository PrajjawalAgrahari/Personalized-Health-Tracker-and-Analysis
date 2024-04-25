import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
// import { LineChart } from "recharts";
import LinChart from "./components/LineChart";
import LinChart1 from "./components/LineChart_1";
import "./index.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [inputWeight, setInputWeight] = useState("");

  let linkki = "/exf1";

  console.log(linkki)

  const bmi = (inputWeight / (1.73 * 1.73))
  console.log(bmi);
  if(bmi >= 25)
  {
    linkki = "/exf1"
  }
  else if(bmi >= 18.5 && bmi < 25)
  {
    linkki = "/exf2"
  }
  else
  {
    linkki = "/exf3"
  }


  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleInputDChange = (event) => {
    setInputDate(event.target.value);
  };
  const handleInputPChange = (event) => {
    setInputWeight(event.target.value);
  };
  const handleInputGDChange = (event) => {
    setInputMonth(event.target.value);
  };

  const [trackSteps, setTrackSteps] = useState([
    {
      date: "2024-04-12",
      steps: 5000,
    },
    {
      date: "2024-04-13",
      steps: 7500,
    },
  ]);

  const [trackWeight, setTrackWeight] = useState([
    {
      month: "2024-04",
      weight: 50,
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      const newStep = {
        date: inputDate,
        steps: parseInt(inputText.trim()),
      };
      setTrackSteps([...trackSteps, newStep]);
    }
  };

  // console.log(inputMonth);
  const handleSubmit2 = (event) => {
    event.preventDefault();
    if (inputWeight.trim() !== "") {
      const newStep = {
        month: inputMonth,
        weight: parseInt(inputWeight.trim()),
      };
      setTrackWeight([...trackWeight, newStep]);
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar linkk={linkki} />
        <div className="bg-purple-300 secPart">
          <div className="flex justify-center items-center m-10 mx-40 h-10 bg-gray-200 text-purple">
            Number of Exercises Completed : 10 / 20
          </div>
          <div className="flex justify-center align-items btns1">
            <form className="flex gap-10" onSubmit={handleSubmit}>
              <input
                className="h-8 w-40"
                type="text"
                placeholder="Enter steps"
                value={inputText}
                onChange={handleInputChange}
              />
              <input
                className="h-8 w-40"
                type="text"
                placeholder="Enter date"
                value={inputDate}
                onChange={handleInputDChange}
              />
              <button type="submit">Add Steps</button>
            </form>
          </div>
          <LinChart props={trackSteps} />
          <div className="flex justify-center align-items btns1 my-20">
            <form className="flex gap-10" onSubmit={handleSubmit2}>
              <input
                className="h-8 w-40"
                type="text"
                placeholder="Enter weight"
                value={inputWeight}
                onChange={handleInputPChange}
              />
              <input
                className="h-8 w-40"
                type="text"
                placeholder="Enter month"
                value={inputMonth}
                onChange={handleInputGDChange}
              />
              <button type="submit">Add Weight</button>
            </form>
          </div>
          <LinChart1 props={trackWeight} />
        </div>
      </div>
    </>
  );
}

export default App;
