import React from "react";

const DailyTasks = (props) => {
  //test schema?
  const plantList = [
    {
      name: "Lenora",
      status: "Watering time",
      amount: "150mL",
    },
  ];

  const newPlant = plantList.map((plant, index) => {
    return (
      <div key={index}>
        <h1>{plant.name}</h1>
        <p>{plant.status}</p>
        <p>{plant.amount}</p>
      </div>
    );
  });

  const Card = {
    padding: "2px 16px",
    boxShadow: "1px 1px 7px 0px rgba(0,0,0,0.4)",
    width: "90%",
    backgroundColor: "#F8F8F8",
    borderRadius: "15px",
  };

  const Container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <h1>Today's tasks</h1>
      <h2>Sun, May 23rd</h2>
      <div style={Container}>
        <div style={Card}>{newPlant}</div>
      </div>
    </>
  );
};

export default DailyTasks;

// notes for next meeting-
// in wireframe it looks like individual tasks have properties themselves - like plant name,
// watering time, and amount of water
