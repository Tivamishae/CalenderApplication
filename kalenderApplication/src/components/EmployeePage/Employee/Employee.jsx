import "./Employee.css";

const Employee = (props) => {
  return (
    <div className="Employee">
      <div className="EmployeeInformationProfile">
        <button
          onClick={() =>
            props.changeEmployeeProfileDisplayedTrue(props.employeeProps)
          }
          className="EmployeePageEmployeeIcon"
        >
          {props.employeeProps.name.firstName[0] +
            props.employeeProps.name.surname[0]}
        </button>
      </div>
      <div className="EmployeeInformation">{props.employeeProps.id}</div>
      <div className="EmployeeInformation">{props.employeeProps.date}</div>
      <div className="EmployeeInformation">
        {props.employeeProps.name.firstName +
          " " +
          props.employeeProps.name.surname}
      </div>
      <div className="EmployeeInformation">
        {props.employeeProps.employeeType}
      </div>
      <div className="EmployeeInformation">
        <div className="EmployeeGroupContainer">
          {props.employeeProps.shiftGroups.map((shiftGroup, index) => {
            return (
              <div key={index}>
                <div className="EmployeeGroupSeperator"></div>
                <div>{shiftGroup}</div>
                <div className="EmployeeGroupSeperator"></div>
                <div className="EmployeeGroupLine"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="EmployeeInformation Empty">Empty</div>
    </div>
  );
};

export default Employee;
