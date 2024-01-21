import "./ReportsPage.css";
import TopSeperator from "../TopSeperator/TopSeperator";
import ReportsPageReport from "./ReportsPageReport/ReportsPageReport";
import { useState, useEffect } from "react";

const ReportPage = (props) => {
  const [chosenReportType, setChosenReportType] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [displayedReports, setDisplayedReports] = useState(
    props.reportsPageJson.reports
  );

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const changeChosenReportType = (event) => {
    const newReportType = event.target.value;
    setChosenReportType(newReportType);
  };

  useEffect(() => {
    let newDisplayedReportsList = [];
    for (let i = 0; i < props.reportsPageJson.reports.length; i++) {
      if (
        props.reportsPageJson.reports[i].reportType === chosenReportType ||
        chosenReportType === "All"
      ) {
        newDisplayedReportsList.push(props.reportsPageJson.reports[i]);
      }
    }
    setDisplayedReports(newDisplayedReportsList);
  }, [chosenReportType]);

  useEffect(() => {
    let allEmployeeSearchKeys = [];
    let newShownReports = [];

    for (let i = 0; i < props.reportsPageJson.reports.length; i++) {
      allEmployeeSearchKeys.push({
        senderID: props.reportsPageJson.reports[i].sender.id,
        senderName:
          props.reportsPageJson.reports[i].sender.firstName +
          " " +
          props.reportsPageJson.reports[i].sender.surname,
        reportID: props.reportsPageJson.reports[i].id,
      });
    }

    for (let i = 0; i < allEmployeeSearchKeys.length; i++) {
      if (
        allEmployeeSearchKeys[i].senderName.includes(searchValue) ||
        allEmployeeSearchKeys[i].senderID.includes(searchValue) ||
        allEmployeeSearchKeys[i].reportID.includes(searchValue) ||
        searchValue === ""
      ) {
        newShownReports.push(props.reportsPageJson.reports[i]);
      }
    }

    setDisplayedReports(newShownReports);
  }, [searchValue]);

  return (
    <div className="ReportsPage">
      <div className="BehindTopPart"></div>
      <div className="ReportsPageTitleArea">
        <div>Reports</div>
      </div>
      <TopSeperator></TopSeperator>
      <div className="ReportsPageBody">
        <div className="ReportsPageFilterContainer">
          <div className="ReportsPageSpreadSheetFilters">
            <select onChange={changeChosenReportType}>
              <option value="" disabled selected hidden>
                Type
              </option>
              <option value="All">All types</option>
              <option value="Hygiene Faults">Hygiene faults</option>
              <option value="Customer Problem">Customer problem</option>
              <option value="Broken Equipment">Broken equipment</option>
              <option value="New Equipment">New equipment</option>
              <option value="Other">Other</option>
            </select>
            <input
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchValueChange}
            ></input>
          </div>
        </div>
        <div className="ReportsPageSpreadSheetTop">
          <div>ID</div>
          <div>Type</div>
          <div>Sender</div>
          <div>Date</div>
          <div>Description</div>
          <div className="ReportText">Text</div>
        </div>
        <div className="ReportsPageSpreadSheetBody">
          {displayedReports.map((report, index) => {
            return (
              <div key={index}>
                <ReportsPageReport reportProps={report}></ReportsPageReport>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
