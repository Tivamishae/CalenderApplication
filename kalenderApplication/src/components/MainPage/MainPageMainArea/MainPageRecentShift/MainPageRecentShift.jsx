import "./MainPageRecentShift.css";

const MainPageRecentShift = (props) => {
  return (
    <div>
      <div className="MainPageShift">
        <div className="MainPageRecentShiftInformationContainer">
          <div className="MainPageRecentShiftText">{props.shiftProps.date}</div>
          <div className="MainPageRecentShiftText">
            {props.shiftProps.start} - {props.shiftProps.end}
          </div>
          <div className="MainPageRecentShiftText">
            {props.shiftProps.place}
          </div>
        </div>
      </div>
      <div className="MainPageRecentShiftSeperationLine"></div>
    </div>
  );
};

export default MainPageRecentShift;
