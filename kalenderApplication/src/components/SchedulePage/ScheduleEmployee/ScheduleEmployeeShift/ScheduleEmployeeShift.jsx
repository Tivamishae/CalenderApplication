import { useState, useEffect } from "react";
import "./ScheduleEmployeeShift.css";

const ScheduleEmployeeShift = (props) => {
  const [shiftOfToday, setShiftOfToday] = useState({
    dayContainsShift: false,
    time: "",
    place: "",
  });
  const [allShiftInformation, setAllShiftInformation] = useState({});

  const checkIfDayContainsShift = () => {
    for (let i = 0; i < props.employee.shifts.length; i++) {
      if (props.employee.shifts[i].date === props.displayedDate) {
        setAllShiftInformation({
          userInformation: { name: props.employee.name, id: props.employee.id },
          shift: props.employee.shifts[i],
        });
        return {
          dayContainsShift: true,
          time: props.employee.shifts[i].time,
          place: props.employee.shifts[i].place,
        };
      }
    }
    return { dayContainsShift: false, time: "", place: "" };
  };

  useEffect(() => {
    setShiftOfToday(checkIfDayContainsShift());
  }, [props]);

  return (
    <div
      onClick={
        shiftOfToday.dayContainsShift
          ? () => props.onClickShift(allShiftInformation)
          : () => props.createNewShift(props.employee, props.displayedDate)
      }
      className="ScheduleEmployeeShift"
    >
      <div
        className={
          shiftOfToday.dayContainsShift
            ? "ScheduleShiftActive"
            : "ScheduleShiftInactive"
        }
      >
        {shiftOfToday.dayContainsShift ? (
          <div>
            <div className="ScheduleShiftTime">{shiftOfToday.time}</div>
            <div className="ScheduleShiftPlace">{shiftOfToday.place}</div>
          </div>
        ) : (
          <div>Add shift</div>
        )}
      </div>
    </div>
  );
};

export default ScheduleEmployeeShift;
