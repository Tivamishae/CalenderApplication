import "./MainPageMainArea.css";
import MainPageShift from "./MainPageShift/MainPageShift";
import MainPageReport from "./MainPageReport/MainPageReport";
import RecentShift from "./MainPageRecentShift/MainPageRecentShift";
import { useEffect, useState } from "react";
import { format, isBefore, parse } from "date-fns";

const MainPageMainArea = (props) => {
  const [currentDate] = useState(format(new Date(), "yyyy-MM-dd"));

  const [displayedUpcomingShifts, setDisplayedUpcomingShifts] = useState([]);
  const [displayedRecentShifts, setDisplayedRecentShifts] = useState([]);

  useEffect(() => {
    for (let i = 0; i < props.mainPageMainAreaJson.shifts.length; i++) {
      if (
        isBefore(
          parse(currentDate, "yyyy-MM-dd", new Date()),
          parse(
            props.mainPageMainAreaJson.shifts[i].date,
            "yyyy-MM-dd",
            new Date()
          )
        )
      ) {
        setDisplayedUpcomingShifts((prevShifts) => [
          props.mainPageMainAreaJson.shifts[i],
          ...prevShifts,
        ]);
      } else {
        setDisplayedRecentShifts((prevShifts) => [
          ...prevShifts,
          props.mainPageMainAreaJson.shifts[i],
        ]);
      }
    }
  }, [currentDate]);

  return (
    <div className="MainPageMainArea">
      <div className="MainPageMainAreaLeftContainer">
        <div className="UpcomingShifts">
          <div className="UpcomingShiftsTop">
            <div>Upcoming shifts</div>
            <button
              onClick={() => props.openSchedulePage("")}
              className="MainPageScheduleButton"
            >
              Schedule
            </button>
          </div>
          <div className="UpcomingShiftsBody">
            {displayedUpcomingShifts.map((shift, index) => {
              return (
                <div key={index}>
                  <MainPageShift shiftProps={shift}></MainPageShift>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="MainPageMainAreaRightContainer">
        <div className="Reports">
          <div className="ReportsTop">
            <div>Recent reports</div>
          </div>
          <div className="ReportsBody">
            {props.mainPageMainAreaJson.reports.map((report, index) => {
              return (
                <div key={index}>
                  <MainPageReport reportProps={report}></MainPageReport>
                </div>
              );
            })}
          </div>
        </div>
        <div className="RecentShifts">
          <div className="RecentShiftsTop">
            <div>Recent shifts</div>
          </div>
          <div className="RecentShiftsBody">
            {displayedRecentShifts.map((shift, index) => {
              return (
                <div key={index}>
                  <RecentShift shiftProps={shift}></RecentShift>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageMainArea;
