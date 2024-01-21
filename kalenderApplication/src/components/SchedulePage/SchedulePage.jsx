import "./SchedulePage.css";
import { useEffect, useState } from "react";
import { format, getDay, subDays } from "date-fns";
import TopSeperator from "../TopSeperator/TopSeperator";
import ScheduleEmployee from "./ScheduleEmployee/ScheduleEmployee";
import DisplayedShiftPage from "./DisplayedShift/DisplayedShiftPage";

const SchedulePage = (props) => {
  /* States */
  const [currentDate] = useState({
    date: {
      day: format(new Date(), "dd"),
      month: format(new Date(), "MM"),
      year: format(new Date(), "yyyy"),
      wholeDate: new Date(),
    },
    weekday: getDay(new Date()),
  });
  const [displayedDate, setDisplayedDate] = useState(currentDate);
  const [displayedDatesArray, setDisplayedDatesArray] = useState([
    "2024-01-01",
    "2024-01-02",
    "2024-01-03",
    "2024-01-04",
    "2024-01-05",
    "2024-01-06",
    "2024-01-07",
  ]);
  const [displayedDatesArrayChanger, setDisplayedDatesArrayChanger] =
    useState(0);

  const [changeDatesCounter, setChangeDatesCounter] = useState(0);
  const [displayShiftInformation, setDisplayShiftInformation] = useState(false);
  const [displayedShiftContent, setDisplayedShiftContent] = useState({});
  const [displayedEmployees, setDisplayedEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState(props.searchValueSchedulePage);

  /* Functions for calculating and displaying dates */
  const calculateShownDay = (ownNumber) => {
    const calculatedDate = displayedDatesArray[ownNumber];

    const shownDate = parseInt(calculatedDate[8] + calculatedDate[9]);

    return shownDate;
  };

  function mapValue(input, mappingArray) {
    const index = input % mappingArray.length;
    return mappingArray[index];
  }

  const createShownDatesArray = () => {
    const monday = [6, 0, 1, 2, 3, 4, 5];
    const tuesday = [5, -1, 0, 1, 2, 3, 4];
    const wednesday = [4, -2, -1, 0, 1, 2, 3];
    const thursday = [3, -3, -2, -1, 0, 1, 2];
    const friday = [2, -4, -3, -2, -1, 0, 1];
    const saturday = [1, -5, -4, -3, -2, -1, 0];
    const sunday = [0, -6, -5, -4, -3, -2, -1];

    const displayedDatesArray = [
      format(
        subDays(
          currentDate.date.wholeDate,
          displayedDatesArrayChanger + mapValue(currentDate.weekday, monday)
        ),
        "yyyy-MM-dd"
      ),
      format(
        subDays(
          currentDate.date.wholeDate,
          displayedDatesArrayChanger + mapValue(currentDate.weekday, tuesday)
        ),
        "yyyy-MM-dd"
      ),
      format(
        subDays(
          currentDate.date.wholeDate,
          displayedDatesArrayChanger + mapValue(currentDate.weekday, wednesday)
        ),
        "yyyy-MM-dd"
      ),
      format(
        subDays(
          currentDate.date.wholeDate,
          displayedDatesArrayChanger + mapValue(currentDate.weekday, thursday)
        ),
        "yyyy-MM-dd"
      ),
      format(
        subDays(
          currentDate.date.wholeDate,
          displayedDatesArrayChanger + mapValue(currentDate.weekday, friday)
        ),
        "yyyy-MM-dd"
      ),
      format(
        subDays(
          currentDate.date.wholeDate,
          displayedDatesArrayChanger + mapValue(currentDate.weekday, saturday)
        ),
        "yyyy-MM-dd"
      ),
      format(
        subDays(
          currentDate.date.wholeDate,
          displayedDatesArrayChanger + mapValue(currentDate.weekday, sunday)
        ),
        "yyyy-MM-dd"
      ),
    ];

    return displayedDatesArray;
  };

  useEffect(() => {
    setDisplayedDatesArray(createShownDatesArray());
  }, [displayedDatesArrayChanger]);

  const calculateShownMonth = (ownNumber) => {
    let calculatedDay = displayedDatesArray[ownNumber];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const calculatedMonth = parseInt(calculatedDay[6] + calculatedDay[7]);

    return months[calculatedMonth - 1];
  };

  /* Functions for changing week */
  const showPastOrNextWeek = (directionInt) => {
    if (directionInt > 0) {
      setChangeDatesCounter(changeDatesCounter + 1);
    } else {
      setChangeDatesCounter(changeDatesCounter - 1);
    }
    const sevenDaysChangedDate = subDays(
      displayedDate.date.wholeDate,
      directionInt
    );

    setDisplayedDatesArrayChanger(displayedDatesArrayChanger + directionInt);

    const monthOnlySevenDaysChangedDate = format(sevenDaysChangedDate, "MM");
    const daysOnlySevenDaysChangedDate = format(sevenDaysChangedDate, "dd");
    const yearOnlySevenDaysChangedDate = format(sevenDaysChangedDate, "yyyy");

    setDisplayedDate({
      date: {
        day: daysOnlySevenDaysChangedDate,
        month: monthOnlySevenDaysChangedDate,
        year: yearOnlySevenDaysChangedDate,
        wholeDate: sevenDaysChangedDate,
      },
      weekday: getDay(new Date()),
    });
  };

  /* Function for checking if current day is displayed */
  const checkIfCurrentDayIsDisplayed = () => {
    if (changeDatesCounter === 0) {
      return true;
    }
    return false;
  };

  const onClickShift = (shiftInformation) => {
    setDisplayShiftInformation(true);
    console.log(shiftInformation);
    setDisplayedShiftContent(shiftInformation);
  };

  const returnFromDisplayedShift = () => {
    setDisplayShiftInformation(false);
  };

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    let allEmployeeIDsAndNames = [];
    let newShownEmployees = [];

    for (let i = 0; i < props.schedulePageJson.employees.length; i++) {
      allEmployeeIDsAndNames.push({
        id: props.schedulePageJson.employees[i].id,
        name:
          props.schedulePageJson.employees[i].name.firstName +
          " " +
          props.schedulePageJson.employees[i].name.surname,
      });
    }

    for (let i = 0; i < allEmployeeIDsAndNames.length; i++) {
      if (
        allEmployeeIDsAndNames[i].name.includes(searchValue) ||
        allEmployeeIDsAndNames[i].id.includes(searchValue) ||
        searchValue === ""
      ) {
        newShownEmployees.push(props.schedulePageJson.employees[i]);
      }
    }

    setDisplayedEmployees(newShownEmployees);
  }, [searchValue]);

  return (
    <div className="SchedulePage">
      <div className="BehindTopPart"></div>
      <div className="SchedulePageTitle">
        <div>Schedule</div>
      </div>
      <TopSeperator></TopSeperator>
      <div className="SchedulePageBody">
        <div className="SchedulePageBodyTop">
          <div className="SchedulePageBodyTopLeft">
            <input
              onChange={handleSearchValueChange}
              value={searchValue}
              placeholder="Search"
            ></input>
          </div>
          <div className="SchedulePageBodyTopMiddle">
            <button
              onClick={() => showPastOrNextWeek(7)}
              className="SchedulePageChangeWeekLeft"
            ></button>
            <div
              className={
                displayedDate.weekday === 1 && checkIfCurrentDayIsDisplayed()
                  ? "SchedulePageDayContainerToday"
                  : "SchedulePageDayContainerNormal"
              }
            >
              <div className="SchedulePageDay">Monday</div>
              <div className="SchedulePageDate">
                {calculateShownMonth(0) + " " + calculateShownDay(0)}
              </div>
            </div>
            <div
              className={
                displayedDate.weekday === 2 && checkIfCurrentDayIsDisplayed()
                  ? "SchedulePageDayContainerToday"
                  : "SchedulePageDayContainerNormal"
              }
            >
              <div className="SchedulePageDay">Tuesday</div>
              <div className="SchedulePageDate">
                {calculateShownMonth(1) + " " + calculateShownDay(1)}
              </div>
            </div>
            <div
              className={
                displayedDate.weekday === 3 && checkIfCurrentDayIsDisplayed()
                  ? "SchedulePageDayContainerToday"
                  : "SchedulePageDayContainerNormal"
              }
            >
              <div className="SchedulePageDay">Wednesday</div>
              <div className="SchedulePageDate">
                {calculateShownMonth(2) + " " + calculateShownDay(2)}
              </div>
            </div>
            <div
              className={
                displayedDate.weekday === 4 && checkIfCurrentDayIsDisplayed()
                  ? "SchedulePageDayContainerToday"
                  : "SchedulePageDayContainerNormal"
              }
            >
              <div className="SchedulePageDay">Thursday</div>
              <div className="SchedulePageDate">
                {calculateShownMonth(3) + " " + calculateShownDay(3)}
              </div>
            </div>
            <div
              className={
                displayedDate.weekday === 5 && checkIfCurrentDayIsDisplayed()
                  ? "SchedulePageDayContainerToday"
                  : "SchedulePageDayContainerNormal"
              }
            >
              <div className="SchedulePageDay">Friday</div>
              <div className="SchedulePageDate">
                {calculateShownMonth(4) + " " + calculateShownDay(4)}
              </div>
            </div>
            <div
              className={
                displayedDate.weekday === 6 && checkIfCurrentDayIsDisplayed()
                  ? "SchedulePageDayContainerToday"
                  : "SchedulePageDayContainerNormal"
              }
            >
              <div className="SchedulePageDay">Saturday</div>
              <div className="SchedulePageDate">
                {calculateShownMonth(5) + " " + calculateShownDay(5)}
              </div>
            </div>
            <div
              className={
                displayedDate.weekday === 0 && checkIfCurrentDayIsDisplayed()
                  ? "SchedulePageDayContainerToday"
                  : "SchedulePageDayContainerNormal"
              }
            >
              <div className="SchedulePageDay">Sunday</div>
              <div className="SchedulePageDate">
                {calculateShownMonth(6) + " " + calculateShownDay(6)}
              </div>
            </div>
            <button
              onClick={() => showPastOrNextWeek(-7)}
              className="SchedulePageChangeWeekRight"
            ></button>
          </div>
          <div className="SchedulePageBodyTopRight">
            <div>{displayedDate.date.year}</div>
          </div>
        </div>
        <div className="SchedulePageBodyMain">
          {displayedEmployees.map((employee, index) => {
            return (
              <div key={index}>
                <ScheduleEmployee
                  returnFromDisplayedShift={returnFromDisplayedShift}
                  onClickShift={onClickShift}
                  displayedDatesArray={displayedDatesArray}
                  employeeProps={employee}
                ></ScheduleEmployee>
              </div>
            );
          })}
        </div>
        {displayShiftInformation ? (
          <DisplayedShiftPage
            displayedShiftContent={displayedShiftContent}
            returnFromDisplayedShift={returnFromDisplayedShift}
          ></DisplayedShiftPage>
        ) : null}
      </div>
    </div>
  );
};

export default SchedulePage;
