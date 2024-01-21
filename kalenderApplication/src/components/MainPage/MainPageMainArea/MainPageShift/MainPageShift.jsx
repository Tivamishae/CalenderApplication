import "./MainPageShift.css";

const MainPageShift = (props) => {
  return (
    <div>
      <div className="MainPageShift">
        <div className="MainPageShiftInformationContainer">
          <div className="MainPageShiftText">{props.shiftProps.date}</div>
          <div className="MainPageShiftText">
            {props.shiftProps.start} - {props.shiftProps.end}
          </div>
          <div className="MainPageShiftText">{props.shiftProps.place}</div>
        </div>
      </div>
      <div className="MainPageShiftSeperationLine"></div>
    </div>
  );
};

export default MainPageShift;
