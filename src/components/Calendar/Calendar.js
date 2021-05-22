// Article on creating calendar https://medium.com/@w.difulvio523/create-a-custom-hooks-calendar-in-react-e50bbba456e1

import React, { useState } from "react";
import {format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameDay, isSameMonth} from "date-fns";
// import format from "date-fns/format";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import toDate from "date-fns/toDate"
import "./Calendar.css";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const header = () => {
    const dateFormat = "MMMM yyyy";
    return (
       <div className="header row flex-middle">
          <div className="column col-start">
             <div className="icon" onClick={prevMonth}>
                chevron_left
             </div>
          </div>
          <div className="column col-center">
             <span>{format(currentDate, dateFormat)}</span>
          </div>
          <div className="column col-end">
             <div className="icon" onClick={nextMonth}>
                chevron_right
             </div>
          </div>
       </div>
       );
    };
    const days = () => {
    const dateFormat = "E";
    const days = [];
    let startDate = startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
          days.push(
             <div className="column col-center" key={i}>
             {format(addDays(startDate, i), dateFormat)}
             </div>
          );
       }
       return <div className="days row">{days}</div>;
    };
    const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
       for (let i = 0; i < 7; i++) {
       formattedDate = format(day, dateFormat);
       const cloneDay = day;
    days.push(
          <div 
           className={`column cell ${!isSameMonth(day, monthStart)
           ? "disabled" : isSameDay(day, selectedDate) 
           ? "selected" : "" }`} 
           key={day} 
           onClick={() => onDateClick(toDate(cloneDay))}
           > 
           <span className="number">{formattedDate}</span>
           <span className="bg">{formattedDate}</span>
         </div>
         );
       day = addDays(day, 1);
      }
    rows.push(
          <div className="row" key={day}> {days} </div>
        );
       days = [];
     }
     return <div className="body">{rows}</div>;
    }
    const nextMonth = () => {
       setCurrentDate(addMonths(currentDate, 1));
    };
    const prevMonth = () => {
       setCurrentDate(subMonths(currentDate, 1));
    };
    const onDateClick = day => {
    setSelectedDate(day);
    }
    return (
       <div className="calendar">
          <div>{header()}</div>
          <div>{days()}</div>
          <div>{cells()}</div>
       </div>
      );
    };
    export default Calendar;