import { useState } from "react";
import "./EditEmployee.css";

const EditEmployee = (props) => {
  const [firstNameOfEmployee, setFirstNameOfEmployee] = useState(
    props.displayedEmployee.name.firstName
  );

  const [surnameOfEmployee, setSurnameOfEmployee] = useState(
    props.displayedEmployee.name.surname
  );
  const [chosenEmployeeType, setChosenEmployeeType] = useState(
    props.displayedEmployee.employeeType
  );
  const [possibleEmployeeTypes] = useState(
    props.employeeGroupsAndTypes.employeeTypes
  );

  const [chosenEmployeeGroups, setChosenEmployeeGroups] = useState(
    props.displayedEmployee.shiftGroups
  );

  const [possibleEmployeeGroups] = useState(
    props.employeeGroupsAndTypes.employeeGroups
  );

  const handleChangeFirstName = (event) => {
    setFirstNameOfEmployee(event.target.value);
  };

  const handleChangeSurname = (event) => {
    setSurnameOfEmployee(event.target.value);
  };

  const changeChosenEmployeeType = (event) => {
    setChosenEmployeeType(event.target.value);
  };

  const isButtonHighlighted = (group) => {
    if (chosenEmployeeGroups.includes(group)) {
      return true;
    } else {
      return false;
    }
  };

  const addGroupToEmployee = (group) => {
    if (chosenEmployeeGroups.includes(group)) {
      setChosenEmployeeGroups(
        chosenEmployeeGroups.filter(
          (containedGroup) => containedGroup !== group
        )
      );
    } else {
      setChosenEmployeeGroups([group, ...chosenEmployeeGroups]);
    }
  };

  return (
    <div className="EditEmployee">
      <div className="EditEmployeeBackButtonContainer">
        <button
          onClick={() => props.closeEditEmployee()}
          className="EditEmployeeBackButton"
        >
          Back
        </button>
      </div>
      <div className="EditEmployeeMainArea">
        <div className="EditEmployeeEditArea">
          <div className="EditEmployeeEditAreaContent">
            <div>
              <div className="EditEmployeeProfileIcon">
                {props.displayedEmployee.name.firstName[0] +
                  props.displayedEmployee.name.surname[0]}
              </div>
              <div className="EditEmployeeID">
                ID: {props.displayedEmployee.id}
              </div>
            </div>
            <div className="EditEmployeeChangeableBox">
              <div className="EditEmployeeChangeableTraitContainer">
                <div style={{ width: "200px" }}>First name:</div>
                <input
                  onChange={handleChangeFirstName}
                  value={firstNameOfEmployee}
                  className="EditEmployeeNameInput"
                ></input>
              </div>
              <div className="EditEmployeeChangeableTraitContainer">
                <div style={{ width: "200px" }}>Surname:</div>
                <input
                  onChange={handleChangeSurname}
                  value={surnameOfEmployee}
                  className="EditEmployeeNameInput"
                ></input>
              </div>
              <div className="EditEmployeeChangeableTraitContainer">
                <div style={{ width: "204px" }}>Employee type:</div>
                <select
                  value={chosenEmployeeType}
                  onChange={changeChosenEmployeeType}
                  className="EditEmployeeTypeSelect"
                >
                  {possibleEmployeeTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="EditEmployeeChangeableTraitContainerGroups">
                <div style={{ width: "200px" }}>Employee groups:</div>
                <div className="EditEmployeeSelectGroups">
                  {possibleEmployeeGroups.map((group, index) => (
                    <button
                      onClick={() => addGroupToEmployee(group)}
                      className={
                        isButtonHighlighted(group)
                          ? "EditEmployeeGroupButtonSelected"
                          : "EditEmployeeGroupButton"
                      }
                      key={index}
                    >
                      {group}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="EditEmployeeButtonsArea">
          <button
            onClick={() => props.closeEditEmployee()}
            className="EditEmployeeButton"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              props.updateEmployee({
                id: props.displayedEmployee.id,
                firstName: firstNameOfEmployee,
                surname: surnameOfEmployee,
                employeeType: chosenEmployeeType,
                employeeGroups: chosenEmployeeGroups,
              })
            }
            className="EditEmployeeButton"
          >
            Update changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
