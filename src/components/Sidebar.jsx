import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  // Set the initial state of activeIndex to 0 to make "Dashboard" active by default
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // Handler function to set the active index when an <li> is clicked
  const handleClick = (index) => {
    setActiveIndex(index);
    // // Navigate to a new page if activeIndex is 1
    if (index === 1) {
      if (index === 1) {
        navigate("/exf1"); // Navigate to the desired route
      }
    }
  };

  // Sample list items (customize as needed)
  const listItems = [
    { icon: "src/dashboard.svg", name: "Dashboard" },
    { icon: "src/exercises.svg", name: "Your Exercises" },
    { icon: "src/legs.svg", name: "Track Steps" },
    { icon: "src/face.svg", name: "Face Recognition" },
  ];

  return (
    <div className="bg-white main flex flex-col">
      <div className="mx-auto mt-4">Welcome</div>
      <div className="flex items-center flex-col my-10">
        <img
          className="h-40 img"
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1712995604~exp=1712999204~hmac=efd5066913b3bb670bbdad2ae0b55732c09c4c1a76565fb21bcb9b91a452a260&w=900"
          alt="Your Name"
        />
        <div>Your Name</div>
      </div>
      <div>
        <ul className="flex flex-col cont">
          {listItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              // Apply a conditional background color if the <li> is active
              style={{
                backgroundColor: activeIndex === index ? "lightblue" : "transparent",
                cursor: "pointer", // Optional: Add cursor styling
              }}
            >
              <img src={item.icon} alt={item.name} />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

