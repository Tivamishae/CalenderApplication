import { useState, useEffect, useRef } from "react";
import "./RemoveShift.css";
import { format, isBefore, parse } from "date-fns";

const RemoveShift = (props) => {
  const isInitialRender = useRef(true);

  const [currentDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [displayedShifts, setDisplayedShifts] = useState([]);
  const [pressedShifts, setPressedShifts] = useState([]);
  const [givenEmployee, setGivenEmployee] = useState(props.displayedEmployee);

  useEffect(() => {
    for (let i = 0; i < givenEmployee.shifts.length; i++) {
      if (
        isBefore(
          parse(currentDate, "yyyy-MM-dd", new Date()),
          parse(givenEmployee.shifts[i].date, "yyyy-MM-dd", new Date())
        )
      ) {
        setDisplayedShifts((prevShifts) => [
          givenEmployee.shifts[i],
          ...prevShifts,
        ]);
      }
    }
  }, [givenEmployee]);

  const checkIfShiftIsPressed = (id) => {
    for (let i = 0; i < pressedShifts.length; i++) {
      if (pressedShifts[i].shiftID === id) {
        return true;
      }
    }
    return false;
  };

  const onClickShift = (shift) => {
    if (pressedShifts.includes(shift)) {
      const updatedState = pressedShifts.filter(
        (shiftToRemove) => shiftToRemove.shiftID !== shift.shiftID
      );
      setPressedShifts(updatedState);
    } else {
      setPressedShifts((prevShifts) => [shift, ...prevShifts]);
    }
  };

  const onClickRemoveShifts = () => {
    let updatedShiftsList = givenEmployee.shifts;
    for (let i = 0; i < pressedShifts.length; i++) {
      updatedShiftsList = updatedShiftsList.filter(
        (shift) => shift.shiftID !== pressedShifts[i].shiftID
      );
    }

    setGivenEmployee((prevState) => ({
      ...prevState,
      shifts: updatedShiftsList,
    }));

    let updatedDisplayedShiftsList = displayedShifts;
    for (let i = 0; i < pressedShifts.length; i++) {
      updatedDisplayedShiftsList = updatedDisplayedShiftsList.filter(
        (shift) => shift.shiftID !== pressedShifts[i].shiftID
      );
    }
    setDisplayedShifts(updatedDisplayedShiftsList);
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    props.removeShifts(givenEmployee);
  }, [givenEmployee]);

  return (
    <div className="RemoveShift">
      <div className="RemoveShiftTitle">Remove shift</div>
      <div className="RemoveShiftContentBox">
        {displayedShifts.map((shift, index) => (
          <button
            onClick={() => onClickShift(shift)}
            className={
              checkIfShiftIsPressed(shift.shiftID)
                ? "RemoveShiftUpcomingShiftPressed"
                : "RemoveShiftUpcomingShift"
            }
            key={index}
          >
            <div className="RemoveShiftUpcomingShiftPlaceDateTimeContainer">
              <div className="RemoveShiftUpcomingShiftPlace">
                {"Place: " + shift.place}
              </div>
              <div className="RemoveShiftUpcomingShiftDateAndTime">
                {"Date: " + shift.date}
              </div>
              <div className="RemoveShiftUpcomingShiftDateAndTime">
                {"Time: " + shift.time}
              </div>
            </div>
            <div>
              <div className="RemoveShiftUpcomingShiftAdditionalInformationTitle">
                Additional information
              </div>
              <div className="RemoveShiftUpcomingShiftAdditionalInformation">
                {shift.additionalInformation}
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="RemoveShiftButtonContainer">
        <button
          onClick={() => onClickRemoveShifts()}
          className="RemoveShiftButton"
        >
          Remove shift
        </button>
      </div>
    </div>
  );
};

export default RemoveShift;
