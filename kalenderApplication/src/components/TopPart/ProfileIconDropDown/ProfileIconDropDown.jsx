import "./ProfileIconDropDown.css";

const ProfileIconDropDown = (props) => {
  return (
    <div className="ProfileIconDropDown">
      <button onClick={() => props.openProfilePage()}>Profile</button>
      <button onClick={() => props.openMessagesPage()}>Messages</button>
      <button>Settings</button>
      <button>Help</button>
      <button onClick={() => props.logOut()} className="DropDownLogOut">
        Log out
      </button>
    </div>
  );
};

export default ProfileIconDropDown;
