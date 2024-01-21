import { useState, useEffect } from "react";
import { format, getDaysInMonth } from "date-fns";
import "./CreateNewShiftPage.css";

const CreateNewShiftPage = (props) => {
  const [timeOfNewShift, setTimeOfNewShift] = useState("");
  const [prevTimeOfNewShiftLength, setPrevTimeOfNewShiftLength] = useState(
    timeOfNewShift.length
  );

  const [possibleMonths] = useState([
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ]);

  const [possibleYears] = useState([
    props.employeeAndDate.date.substring(0, 4) - -5,
    props.employeeAndDate.date.substring(0, 4) - -4,
    props.employeeAndDate.date.substring(0, 4) - -3,
    props.employeeAndDate.date.substring(0, 4) - -2,
    props.employeeAndDate.date.substring(0, 4) - -1,
    props.employeeAndDate.date.substring(0, 4),
    props.employeeAndDate.date.substring(0, 4) - 1,
    props.employeeAndDate.date.substring(0, 4) - 2,
    props.employeeAndDate.date.substring(0, 4) - 3,
    props.employeeAndDate.date.substring(0, 4) - 4,
    props.employeeAndDate.date.substring(0, 4) - 5,
  ]);
  const [selectedMonth, setSelectedMonth] = useState(
    props.employeeAndDate.date.substring(5, 7)
  );

  const [selectedDay, setSelectedDay] = useState(
    props.employeeAndDate.date.substring(8, 10)
  );

  const [selectedYear, setSelectedYear] = useState(
    props.employeeAndDate.date.substring(0, 4)
  );

  const generateDaysArray = (year, month) => {
    const daysInMonth = getDaysInMonth(new Date(year, month - 1));
    const daysArray = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const formattedDay = format(new Date(year, month - 1, day), "dd");
      daysArray.push(formattedDay);
    }

    return daysArray;
  };

  const [possibleDays] = useState(
    generateDaysArray(
      props.employeeAndDate.date.substring(0, 4),
      props.employeeAndDate.date.substring(5, 7)
    )
  );

  const onChangeTime = (event) => {
    if (event.target.value.length < 12) {
      if (event.target.value[0] < 3 || event.target.value === "") {
        if (event.target.value[0] === "2" && event.target.value[1] > 3) {
          return;
        } else {
          if (
            event.target.value[3] < 6 ||
            event.target.value[3] === undefined
          ) {
            if (
              event.target.value[6] < 3 ||
              event.target.value[6] === undefined
            ) {
              if (event.target.value[6] === "2" && event.target.value[7] > 3) {
                return;
              } else {
                if (
                  event.target.value[9] < 6 ||
                  event.target.value[9] === undefined
                ) {
                  const sanitizedValue = event.target.value.replace(
                    /[^0-9:-]/g,
                    ""
                  );
                  setTimeOfNewShift(sanitizedValue);
                  setPrevTimeOfNewShiftLength(timeOfNewShift.length);
                }
              }
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    if (timeOfNewShift.length > prevTimeOfNewShiftLength) {
      if (timeOfNewShift.length === 2 || timeOfNewShift.length === 8) {
        setTimeOfNewShift(timeOfNewShift + ":");
      } else if (timeOfNewShift.length === 5) {
        setTimeOfNewShift(timeOfNewShift + "-");
      }
    } else if (
      timeOfNewShift.length < prevTimeOfNewShiftLength &&
      (timeOfNewShift.length === 2 ||
        timeOfNewShift.length === 5 ||
        timeOfNewShift.length === 8)
    ) {
      setTimeOfNewShift(timeOfNewShift.slice(0, -1));
    }
  }, [timeOfNewShift, prevTimeOfNewShiftLength]);

  const handleSelectChangeMonth = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSelectChangeDay = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleSelectChangeYear = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="CreateNewShiftPage">
      <div className="CreateNewShiftPageBackgroundOpacity"></div>
      <div className="CreateNewShiftPageMainArea">
        <div className="CreateNewShiftBackButtonContainer">
          <div
            onClick={() => props.goBackFromCreateNewShift()}
            className="CreateNewShiftBackButton"
          >
            Back
          </div>
        </div>
        <div className="CreateNewShiftMainAreaUpper">
          <div>
            <div className="CreateNewShiftEmployeeIcon">
              {props.employeeAndDate.employee.name.firstName[0] +
                props.employeeAndDate.employee.name.surname[0]}
            </div>
          </div>
          <div>
            <div className="CreateNewShiftEmployeeName">
              {props.employeeAndDate.employee.name.firstName +
                " " +
                props.employeeAndDate.employee.name.surname}
            </div>
            <div className="CreateNewShiftEmployeeType">
              {props.employeeAndDate.employee.employeeType}
            </div>
            <div className="CreateNewShiftEmployeeID">
              {"ID: " + props.employeeAndDate.employee.id}
            </div>
          </div>
        </div>
        <div className="CreateNewShiftMainAreaLower">
          <div className="CreateNewShiftTitle">Create new shift</div>
          <div className="CreateNewShiftContentBox">
            <div className="CreateNewShiftInputBox">
              <div>
                <div style={{ width: "60px" }}>Date:</div>
                <div style={{ width: "10px" }}></div>
                <select
                  value={selectedYear}
                  onChange={handleSelectChangeYear}
                  className="CreateNewShiftSelectYear"
                >
                  {possibleYears.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedMonth}
                  onChange={handleSelectChangeMonth}
                  className="CreateNewShiftSelect"
                >
                  {possibleMonths.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedDay}
                  onChange={handleSelectChangeDay}
                  className="CreateNewShiftSelect"
                >
                  {possibleDays.map((day, index) => (
                    <option key={index} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <div style={{ width: "60px" }}>Time:</div>
                <div style={{ width: "10px" }}></div>
                <input
                  onChange={onChangeTime}
                  value={timeOfNewShift}
                  placeholder="07:00-15:00"
                ></input>
              </div>
              <div>
                <div style={{ width: "60px" }}>Place:</div>
                <div style={{ width: "10px" }}></div>
                <input placeholder="Duran"></input>
              </div>
            </div>
            <div className="CreateNewShiftTextareaBox">
              <div>Additional information</div>
              <textarea></textarea>
            </div>
          </div>
          <div className="CreateNewShiftCreateButtonContainer">
            <button className="CreateNewShiftCreateButton">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewShiftPage;
