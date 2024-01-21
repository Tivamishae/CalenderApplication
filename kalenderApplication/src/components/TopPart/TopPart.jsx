import ProfileIconDropDown from "./ProfileIconDropDown/ProfileIconDropDown";
import "./TopPart.css";

const TopPart = (props) => {
  return (
    <div className="TopPart">
      <div className="TopPartLeftContainer">
        <div className="TopPartLogo"></div>
        <button
          onClick={() => props.openMainPage()}
          className="TopPartBasicButton"
        >
          Home
        </button>
        <button
          onClick={() => props.openSchedulePage("")}
          className="TopPartBasicButton"
        >
          Schedule
        </button>
        <button
          onClick={() => props.openEmployeePage()}
          className="TopPartBasicButton"
        >
          Employees
        </button>
        <button
          onClick={() => props.openReportPage()}
          className="TopPartBasicButton"
        >
          Reports
        </button>
        <button
          onClick={() => props.openManagementPage()}
          className="TopPartBasicButton"
        >
          Management
        </button>
      </div>
      <div className="TopPartRightContainer">
        <div
          onClick={() => props.changeRenderDropDown()}
          className="TopPartBasicButton"
        >
          <div className="TopPartProfilePictureContainer">
            <div className="TopPartProfilePicture">
              {props.topPartJson.name.firstName.charAt(0) +
                props.topPartJson.name.surname.charAt(0)}
            </div>
          </div>
        </div>
        {props.renderDropDown ? (
          <ProfileIconDropDown
            openProfilePage={props.openProfilePage}
            openMessagesPage={props.openMessagesPage}
            logOut={props.logOut}
          ></ProfileIconDropDown>
        ) : null}
      </div>
    </div>
  );
};

export default TopPart;
