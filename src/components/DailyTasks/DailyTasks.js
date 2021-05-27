
import React, { useState } from "react";
//store import
import store, { getPlants } from "../../store";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameDay,
  isSameMonth,
} from "date-fns";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import toDate from "date-fns/toDate";

const DailyTasks = (props) => {
  //test schema?
  // const plantList = [
  //   {
  //     name: "Lenora",
  //     status: "Watering time",
  //     amount: "150mL",
  //   },
  // ];

  const newPlant = store.getState().map((plant, index) => {
    return (
      <div key={index}>
        <h1>{plant.type}</h1>
        <p>Time to water</p>
        <p>{plant.water}</p>
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

  const [currentDate, setCurrentDate] = useState(new Date());
  const date = () => {
    const dateFormat = "MMMM d yyyy";
    return <h2>{format(currentDate, dateFormat)}</h2>;
  };

  return (
    <>
      <h1>Today's tasks</h1>
      <div>{date()}</div>
      <div style={Container}>
        <div style={Card}>{newPlant}</div>
      </div>
    </>
  );
};
export default DailyTasks;
