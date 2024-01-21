import { useEffect, useState } from "react";
import "./DisplayedShiftPage.css";

const DisplayedShiftPage = (props) => {
  const [shiftDate, setShiftDate] = useState({});

  useEffect(() => {
    setShiftDate({
      year: props.displayedShiftContent.shift.date.slice(0, 4),
      month: props.displayedShiftContent.shift.date.slice(5, 7),
      day: props.displayedShiftContent.shift.date.slice(8, 10),
    });
  }, []);
  return (
    <div className="DisplayedShiftPage">
      <div className="DisplayedShiftBackgroundOpacity"></div>
      <div className="DisplayedShiftMainArea">
        <button
          className="DisplayedShiftBackButton"
          onClick={props.returnFromDisplayedShift}
        >
          Back
        </button>

        <div className="DisplayedShiftTitle">
          {props.displayedShiftContent.userInformation.name.firstName +
            " " +
            props.displayedShiftContent.userInformation.name.surname}
        </div>
        <div className="DisplayedShiftContentContainerUpper">
          <div className="DisplayedShiftContent">
            <div>Date:</div>
            <input
              value={
                shiftDate.year + "-" + shiftDate.month + "-" + shiftDate.day
              }
            ></input>
          </div>
          <div className="DisplayedShiftContent">
            <div>Time:</div>
            <input value={props.displayedShiftContent.shift.time}></input>
          </div>
          <div className="DisplayedShiftContent">
            <div>Place:</div>
            <input value={props.displayedShiftContent.shift.place}></input>
          </div>
        </div>
        <div className="DisplayedShiftContentContainerLower"></div>
      </div>
    </div>
  );
};

export default DisplayedShiftPage;
