import "./ProfilePage.css";

const ProfilePage = (props) => {
  return (
    <div className="ProfilePage">
      <div className="ProfilePageBehindTopPart"></div>
      <div className="ProfilePageBody">
        <div className="ProfilePageProfileTopContainer">
          <div className="ProfilePageProfilePictureBackground">
            <div className="ProfilePageProfilePictureInitials">HD</div>
          </div>
          <div className="ProfilePageName">
            {props.profilePageJson.name.firstName +
              " " +
              props.profilePageJson.name.surname}
          </div>
          <div className="ProfilePageID">
            {"ID:" + " " + props.profilePageJson.id}
          </div>
        </div>
        <div className="ProfilePageOtherInformationContainer">
          <div className="ProfilePageOtherInformationContainerLeft">
            <div className="ProfilePageOtherInformation">Position:</div>
            <div className="ProfilePageOtherInformation">Time Worked:</div>
            <div className="ProfilePageOtherInformation">
              Date of employment:
            </div>
            <div className="ProfilePageOtherInformation">Shift groups:</div>
          </div>
          <div className="ProfilePageOtherInformationContainerRight">
            <div className="ProfilePageOtherInformation">
              {props.profilePageJson.position}
            </div>
            <div className="ProfilePageOtherInformation">
              {props.profilePageJson.timeWorked.hours +
                "h" +
                " " +
                props.profilePageJson.timeWorked.minutes +
                "min"}
            </div>
            <div className="ProfilePageOtherInformation">
              {props.profilePageJson.dateOfEmployment}
            </div>
            <div className="ProfilePageShiftGroups">
              {props.profilePageJson.shiftGroups.map((shiftGroup, index) => {
                return (
                  <div key={index}>
                    <div>{shiftGroup}</div>
                    <div className="ProfilePageGroupSpace"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
