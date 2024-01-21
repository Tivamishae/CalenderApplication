import "./MessagesPageEmployee.css";

const MessagesPageEmployee = (props) => {
  return (
    <div>
      <button
        onClick={() => props.handleOnClick(props.employee.id)}
        className="MessagesPageEmployee"
      >
        <div className="MessagesPageEmployeeProfileIcon">
          {props.employee.name.firstName.charAt(0) +
            props.employee.name.surname.charAt(0)}
        </div>
        <div className="MessagesPageEmployeeNameAndEmployeeType">
          <div className="MessagesPageEmployeeName">
            {props.employee.name.firstName + " " + props.employee.name.surname}
          </div>
          <div>ID: {props.employee.id}</div>
          <div className="MessagesPageEmployeeEmployeeType">
            {props.employee.employeeType}
          </div>
        </div>
      </button>
    </div>
  );
};

export default MessagesPageEmployee;
