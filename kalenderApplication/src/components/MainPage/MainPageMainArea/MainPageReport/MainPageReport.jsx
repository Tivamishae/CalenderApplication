import "./MainPageReport.css";

const MainPageReport = (props) => {
  return (
    <div>
      <div className="MainPageReport">
        <div className="MainPageReportContainer">
          <div className="MainPageReportText">
            {props.reportProps.shortText}
          </div>
          <div className="MainPageReportText">{props.reportProps.date}</div>
          <div className="MainPageReportText">
            By:{" "}
            {props.reportProps.sender.firstName +
              " " +
              props.reportProps.sender.surname}
          </div>
        </div>
      </div>
      <div className="MainPageReportSeperationLine"></div>
    </div>
  );
};

export default MainPageReport;
