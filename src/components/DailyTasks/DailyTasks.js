
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

import "./dailytasks.scss"

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
      <div>
        <div className="container">
          <div className="cardPlant">
            <div className="holdImg">
              <div className="plantPic">
                <img className="plantCard" src={plant.img} />
              </div>
            </div>
            <div className="holdText">
              <div className="holdTxtAgain" key={index}>
                <h3 className="cardTitle">{plant.type}</h3>
                <p className="cardText">Time to water</p>
                <p className="cardText">{plant.water}</p>
              </div>
            </div>
            <div className="holdWater">
              <div className="holdDrop">
                <img
                  className="droplet"
                  src="https://res.cloudinary.com/dnfumu7j3/image/upload/v1621993925/drop_e1ois0.svg"
                  alt="water droplet"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });



  const [currentDate, setCurrentDate] = useState(new Date());
  const date = () => {
    const dateFormat = "MMMM d yyyy";
    return <h2>{format(currentDate, dateFormat)}</h2>;
  };

  return (
    <div>
      <h1>Today's tasks</h1>
      <div>{date()}</div>

      {newPlant}

    </div>
      
    
  );
};
      
export default DailyTasks;
