import { useState } from "react";
import "./ScheduleEmployee.css";
import ScheduleEmployeeShift from "./ScheduleEmployeeShift/ScheduleEmployeeShift";
import CreateNewShiftPage from "./CreateNewShiftPage/CreateNewShiftPage";

const ScheduleEmployee = (props) => {
  const [createNewShiftPageOpen, setCreateNewShiftPageOpen] = useState(false);
  const [createNewShiftDateAndEmployee, setCreateNewShiftDateAndEmployee] =
    useState({});

  const createNewShift = (employee, date) => {
    setCreateNewShiftPageOpen(true);
    setCreateNewShiftDateAndEmployee({ employee: employee, date: date });
  };

  const goBackFromCreateNewShift = () => {
    setCreateNewShiftPageOpen(false);
  };

  return (
    <div className="ScheduleEmployee">
      <div className="ScheduleEmployeeLeftSide">
        <div className="EmployeeProfilePictureContainer">
          <div className="EmployeeProfilePicture">
            {props.employeeProps.name.firstName.charAt(0) +
              props.employeeProps.name.surname.charAt(0)}
          </div>
        </div>
        <div className="SchedulePageNameAndPosition">
          <div className="ScheduleEmployeeName">
            {props.employeeProps.name.firstName +
              " " +
              props.employeeProps.name.surname}
          </div>
          <div className="ScheduleEmployeeID">
            {"ID: " + props.employeeProps.id}
          </div>
          <div className="ScheduleEmployeePosition">
            {props.employeeProps.employeeType}
          </div>
        </div>
      </div>
      <div className="SchedulePageEmployeeMiddleSide">
        <div className="UnderneathChangeWeekButton"></div>
        <div className="SchedulePageEmployeeMiddleSideContent">
          <ScheduleEmployeeShift
            createNewShift={createNewShift}
            onClickShift={props.onClickShift}
            employee={props.employeeProps}
            displayedDate={props.displayedDatesArray[0]}
          ></ScheduleEmployeeShift>
          <ScheduleEmployeeShift
            createNewShift={createNewShift}
            onClickShift={props.onClickShift}
            employee={props.employeeProps}
            displayedDate={props.displayedDatesArray[1]}
          ></ScheduleEmployeeShift>
          <ScheduleEmployeeShift
            createNewShift={createNewShift}
            onClickShift={props.onClickShift}
            employee={props.employeeProps}
            displayedDate={props.displayedDatesArray[2]}
          ></ScheduleEmployeeShift>
          <ScheduleEmployeeShift
            createNewShift={createNewShift}
            onClickShift={props.onClickShift}
            employee={props.employeeProps}
            displayedDate={props.displayedDatesArray[3]}
          ></ScheduleEmployeeShift>
          <ScheduleEmployeeShift
            createNewShift={createNewShift}
            onClickShift={props.onClickShift}
            employee={props.employeeProps}
            displayedDate={props.displayedDatesArray[4]}
          ></ScheduleEmployeeShift>
          <ScheduleEmployeeShift
            createNewShift={createNewShift}
            onClickShift={props.onClickShift}
            employee={props.employeeProps}
            displayedDate={props.displayedDatesArray[5]}
          ></ScheduleEmployeeShift>
          <ScheduleEmployeeShift
            createNewShift={createNewShift}
            onClickShift={props.onClickShift}
            employee={props.employeeProps}
            displayedDate={props.displayedDatesArray[6]}
          ></ScheduleEmployeeShift>
        </div>
        <div className="UnderneathChangeWeekButton"></div>
      </div>
      <div className="SchedulePageEmployeeRightSide"></div>
      {createNewShiftPageOpen ? (
        <CreateNewShiftPage
          goBackFromCreateNewShift={goBackFromCreateNewShift}
          employeeAndDate={createNewShiftDateAndEmployee}
        ></CreateNewShiftPage>
      ) : null}
    </div>
  );
};

export default ScheduleEmployee;
