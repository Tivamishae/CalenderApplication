import "./EmployeePage.css";
import Employee from "./Employee/Employee";
import TopSeperator from "../TopSeperator/TopSeperator";
import { useState, useEffect } from "react";
import OtherEmployeeProfile from "./OtherEmployeeProfile/OtherEmployeeProfile";

const EmployeePage = (props) => {
  const [chosenEmployeeType, setChosenEmployeeType] = useState("All");
  const [possibleEmployeeTypes, setPossibleEmployeeTypes] = useState(
    props.employeePageJson.employeeTypes
  );
  const [chosenEmployeeGroup, setChoseEmployeeGroup] = useState("All");
  const [possibleEmployeeGroups, setPossibleEmployeeGroups] = useState(
    props.employeePageJson.employeeGroups
  );
  const [searchValue, setSearchValue] = useState("");
  const [displayedEmployees, setDisplayedEmployees] = useState(
    props.employeePageJson.employees
  );
  const [otherEmployeeProfileDisplayed, setOtherEmployeeProfileDisplayed] =
    useState(false);
  const [displayedEmployeeContent, setDisplayedEmployeeContent] = useState({});

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const changeChosenEmployeeType = (event) => {
    setChosenEmployeeType(event.target.value);
  };

  const changeChosenEmployeeGroup = (event) => {
    setChoseEmployeeGroup(event.target.value);
  };

  const changeEmployeeProfileDisplayedTrue = (chosenEmployeeContent) => {
    setOtherEmployeeProfileDisplayed(true);
    setDisplayedEmployeeContent(chosenEmployeeContent);
  };

  const changeEmployeeProfileDisplayedFalse = () => {
    setOtherEmployeeProfileDisplayed(false);
  };

  useEffect(() => {
    let newDisplayedEmployeesList = [];
    for (let i = 0; i < props.employeePageJson.employees.length; i++) {
      if (
        props.employeePageJson.employees[i].employeeType ===
          chosenEmployeeType ||
        chosenEmployeeType === "All"
      ) {
        newDisplayedEmployeesList.push(props.employeePageJson.employees[i]);
      }
    }
    setDisplayedEmployees(newDisplayedEmployeesList);
  }, [chosenEmployeeType]);

  useEffect(() => {
    let newDisplayedEmployeesList = [];
    for (let i = 0; i < props.employeePageJson.employees.length; i++) {
      for (
        let y = 0;
        y < props.employeePageJson.employees[i].shiftGroups.length;
        y++
      ) {
        if (
          (props.employeePageJson.employees[i].shiftGroups[y] ===
            chosenEmployeeGroup ||
            chosenEmployeeGroup === "All") &&
          !newDisplayedEmployeesList.includes(
            props.employeePageJson.employees[i]
          )
        ) {
          newDisplayedEmployeesList.push(props.employeePageJson.employees[i]);
        }
      }
    }
    setDisplayedEmployees(newDisplayedEmployeesList);
  }, [chosenEmployeeGroup]);

  useEffect(() => {
    let allEmployeeIDsAndNames = [];
    let newShownEmployees = [];

    for (let i = 0; i < props.employeePageJson.employees.length; i++) {
      allEmployeeIDsAndNames.push({
        id: props.employeePageJson.employees[i].id,
        name:
          props.employeePageJson.employees[i].name.firstName +
          " " +
          props.employeePageJson.employees[i].name.surname,
      });
    }

    for (let i = 0; i < allEmployeeIDsAndNames.length; i++) {
      if (
        allEmployeeIDsAndNames[i].name.includes(searchValue) ||
        allEmployeeIDsAndNames[i].id.includes(searchValue) ||
        searchValue === ""
      ) {
        newShownEmployees.push(props.employeePageJson.employees[i]);
      }
    }

    setDisplayedEmployees(newShownEmployees);
  }, [searchValue]);

  return (
    <div className="EmployeePage">
      <div className="BehindTopPart"></div>
      <div className="EmployeePageTitleArea">
        <div>Employees</div>
      </div>
      <TopSeperator></TopSeperator>
      <div className="EmployeePageMainArea">
        <div className="EmployeeArea">
          <div className="EmployeePageSeperator"></div>
          <div className="EmployeeAreaTop">
            <div className="EmployeeAreaTopFilters">
              <select
                onChange={changeChosenEmployeeGroup}
                className="EmployeePageSelect"
              >
                <option value="" disabled selected hidden>
                  Shift group
                </option>
                <option value="All">All groups</option>
                {possibleEmployeeGroups.map((group, index) => (
                  <option key={index} value={group}>
                    {group}
                  </option>
                ))}
              </select>
              <select
                onChange={changeChosenEmployeeType}
                className="EmployeePageSelect"
              >
                <option value="" disabled selected hidden>
                  Employee type
                </option>
                <option value="All">All types</option>
                {possibleEmployeeTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <input
                placeholder="Search"
                value={searchValue}
                onChange={handleSearchValueChange}
                className="EmployeeSearchBar"
              ></input>
            </div>
          </div>
          <div className="EmployeePageSeperator"></div>
          <div className="EmployeeSpreadSheetTop">
            <div className="EmployeeInformationText">Profile</div>
            <div className="EmployeeInformationText">ID</div>
            <div className="EmployeeInformationText">Date</div>
            <div className="EmployeeInformationText">Name</div>
            <div className="EmployeeInformationText">Employee type</div>
            <div className="EmployeeInformationText">Shift groups</div>
            <div className="Empty">Empty</div>
          </div>
          <div className="EmployeeSpreadSheetBody">
            {displayedEmployees.map((employee, index) => {
              return (
                <div key={index}>
                  <Employee
                    changeEmployeeProfileDisplayedTrue={
                      changeEmployeeProfileDisplayedTrue
                    }
                    employeeProps={employee}
                  ></Employee>
                </div>
              );
            })}
          </div>
          {otherEmployeeProfileDisplayed ? (
            <OtherEmployeeProfile
              removeShifts={props.removeShifts}
              updateEmployee={props.updateEmployee}
              employeeGroupsAndTypes={{
                employeeTypes: props.employeePageJson.employeeTypes,
                employeeGroups: props.employeePageJson.employeeGroups,
              }}
              displayedEmployee={displayedEmployeeContent}
              goBackFromOtherEmployee={changeEmployeeProfileDisplayedFalse}
              handleOpenSchedulePage={props.handleOpenSchedulePage}
            ></OtherEmployeeProfile>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
