import "./ReportsPageReport.css";

const ReportsPageReport = (props) => {
  return (
    <div className="ReportsPageReport">
      <div>{props.reportProps.id}</div>
      <div>{props.reportProps.reportType}</div>
      <div>
        <div>
          {props.reportProps.sender.firstName +
            " " +
            props.reportProps.sender.surname}
        </div>
        <br></br>
        <div>ID: {props.reportProps.sender.id}</div>
      </div>
      <div>{props.reportProps.date}</div>
      <div className="ReportsPageReportDescription">
        {props.reportProps.description}
      </div>
      <div className="ReportsPageReportText">{props.reportProps.text}</div>
    </div>
  );
};

export default ReportsPageReport;
