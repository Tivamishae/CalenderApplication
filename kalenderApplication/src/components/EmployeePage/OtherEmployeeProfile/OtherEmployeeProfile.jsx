import { useState, useEffect } from "react";
import { format, isBefore, parse } from "date-fns";
import "./OtherEmployeeProfile.css";
import EditEmployee from "./EditEmployee/EditEmployee";
import RemoveShift from "./RemoveShift/RemoveShift";

const OtherEmployeeProfile = (props) => {
  const [currentDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [displayedUpcomingShifts, setDisplayedUpcomingShifts] = useState([]);
  const [displayedRecentShifts, setDisplayedRecentShifts] = useState([]);
  const [editEmployeeBool, setEditEmployeeBool] = useState(false);
  const [removeShiftBool, setRemoveShiftBool] = useState(false);

  useEffect(() => {
    for (let i = 0; i < props.displayedEmployee.shifts.length; i++) {
      if (
        isBefore(
          parse(currentDate, "yyyy-MM-dd", new Date()),
          parse(
            props.displayedEmployee.shifts[i].date,
            "yyyy-MM-dd",
            new Date()
          )
        )
      ) {
        setDisplayedUpcomingShifts((prevShifts) => [
          props.displayedEmployee.shifts[i],
          ...prevShifts,
        ]);
      } else {
        setDisplayedRecentShifts((prevShifts) => [
          ...prevShifts,
          props.displayedEmployee.shifts[i],
        ]);
      }
    }
  }, [currentDate]);

  const openEditEmployee = () => {
    setEditEmployeeBool(true);
  };

  const closeEditEmployee = () => {
    setEditEmployeeBool(false);
  };

  const openRemoveShift = () => {
    setRemoveShiftBool(true);
  };

  const displayEmployeeInformation = () => {
    setRemoveShiftBool(false);
  };

  return (
    <div className="OtherEmployeeProfile">
      <div className="OtherEmployeeProfileBackgroundOpacity"></div>
      <div className="OtherEmployeeMainArea">
        <div className="OtherEmployeeUpperPartArea">
          <div className="OtherEmployeeUpperPartContent">
            <div className="OtherEmployeeButtonContainer">
              <button
                onClick={props.goBackFromOtherEmployee}
                className="OtherEmployeeBackButton"
              >
                Back
              </button>
            </div>
            {editEmployeeBool ? (
              <EditEmployee
                updateEmployee={props.updateEmployee}
                employeeGroupsAndTypes={props.employeeGroupsAndTypes}
                displayedEmployee={props.displayedEmployee}
                closeEditEmployee={closeEditEmployee}
              ></EditEmployee>
            ) : null}
            <div className="OtherEmployeeProfileImageArea">
              <div className="OtherEmployeeProfileImage">
                {props.displayedEmployee.name.firstName[0] +
                  props.displayedEmployee.name.surname[0]}
              </div>
              <div className="OtherEmployeeName">
                {props.displayedEmployee.name.firstName +
                  " " +
                  props.displayedEmployee.name.surname}
              </div>
              <div className="OtherEmployeeEmployeeType">
                {props.displayedEmployee.employeeType}
              </div>
              <div className="OtherEmployeeID">
                {"ID: " + props.displayedEmployee.id}
              </div>
            </div>
            <div className="OtherEmployeeGroupsContainer">
              <div>Groups:</div>
              <div className="OtherEmployeeGroups">
                {props.displayedEmployee.shiftGroups.map((group, index) => (
                  <div className="OtherEmployeeLoneGroup" key={index}>
                    {group}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="OtherEmployeeButtonsArea">
            <button
              onClick={() =>
                props.handleOpenSchedulePage(props.displayedEmployee.id)
              }
              className="OtherEmployeeButton"
            >
              Add new shift
            </button>
            <button
              onClick={() => openRemoveShift()}
              className="OtherEmployeeButton"
            >
              Remove shift
            </button>
            <button
              onClick={() => displayEmployeeInformation()}
              className="OtherEmployeeButton"
            >
              Display employee information
            </button>
            <button
              onClick={() => openEditEmployee()}
              className="OtherEmployeeButton"
            >
              Change employee information
            </button>
            <br></br>
            <button className="OtherEmployeeButton">Remove employee</button>
          </div>
        </div>
        {removeShiftBool ? (
          <RemoveShift
            removeShifts={props.removeShifts}
            displayedEmployee={props.displayedEmployee}
          ></RemoveShift>
        ) : (
          <div className="OtherEmployeeContentArea">
            <div className="OtherEmployeeContentAreaLeft">
              <div className="OtherEmployeeScrollTitle">Upcoming shifts</div>
              <div className="OtherEmployeeScroll">
                {displayedUpcomingShifts.map((shift, index) => {
                  return (
                    <div key={index}>
                      <div className="OtherEmployeeScrollShiftsBox">
                        <div>{shift.place}</div>
                        <br></br>
                        <div>{shift.date}</div>
                        <div>{shift.time}</div>
                      </div>
                      <div className="OtherEmployeeScrollSeparation"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="OtherEmployeeContentAreaMiddle">
              <div className="OtherEmployeeScrollTitle">Recent shifts</div>
              <div className="OtherEmployeeScroll">
                {displayedRecentShifts.map((shift, index) => {
                  return (
                    <div key={index}>
                      <div className="OtherEmployeeScrollShiftsBox">
                        <div>{shift.place}</div>
                        <br></br>
                        <div>{shift.date}</div>
                        <div>{shift.time}</div>
                      </div>
                      <div className="OtherEmployeeScrollSeparation"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="OtherEmployeeContentAreaRight">
              <div className="OtherEmployeeScrollTitle">Recent reports</div>
              <div className="OtherEmployeeScroll">
                {props.displayedEmployee.reports.map((report, index) => {
                  return (
                    <div key={index}>
                      <div className="OtherEmployeeScrollReportsBox">
                        <div>{report.shortText}</div>
                        <div>{report.date}</div>
                        <br></br>
                        <div className="OtherEmployeeReportLongText">
                          {report.longText}
                        </div>
                      </div>
                      <div className="OtherEmployeeScrollSeparation"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherEmployeeProfile;
