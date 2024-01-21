import { useState, useEffect } from "react";
import "./MessagesPage.css";
import MessagesPageEmployee from "./MessagesPageEmployee/MessagesPageEmployee";
import MessagesPageMessage from "./MessagesPageMessage/MessagesPageMessage";

const MessagesPage = (props) => {
  const [currentChats, setCurrentChats] = useState(
    props.messagesPageJson.currentChats
  );
  const [currentEmployees, setCurrentEmployees] = useState(
    props.messagesPageJson.currentEmployees
  );
  const [displayedMessagers, setDisplayedMessagers] = useState(
    props.messagesPageJson.currentEmployees
  );
  const [searchValue, setSearchValue] = useState("");
  const [currentRecieverAndChatDisplayed, setCurrentRecieverDisplayed] =
    useState({
      id: "",
      name: { firstName: "", surname: "" },
      employeeType: "",
      messages: [],
    });
  const [userInformation, setUserInformation] = useState({
    name: { firstName: "Hugo", surname: "Duran" },
    id: "08621",
  });

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const changeCurrentRecieverAndChatDisplayed = (newRecieverID) => {
    for (let i = 0; i < currentChats.length; i++) {
      if (currentChats[i].id === newRecieverID) {
        setCurrentRecieverDisplayed(currentChats[i]);
      }
    }
  };

  useEffect(() => {
    let allMessagersIDsAndNames = [];
    let newShownMessagers = [];

    for (let i = 0; i < props.messagesPageJson.currentEmployees.length; i++) {
      allMessagersIDsAndNames.push({
        id: props.messagesPageJson.currentEmployees[i].id,
        name:
          props.messagesPageJson.currentEmployees[i].name.firstName +
          " " +
          props.messagesPageJson.currentEmployees[i].name.surname,
      });
    }

    for (let i = 0; i < allMessagersIDsAndNames.length; i++) {
      if (
        allMessagersIDsAndNames[i].name.includes(searchValue) ||
        allMessagersIDsAndNames[i].id.includes(searchValue) ||
        searchValue === ""
      ) {
        newShownMessagers.push(props.messagesPageJson.currentEmployees[i]);
      }
    }

    setDisplayedMessagers(newShownMessagers);
  }, [searchValue]);

  return (
    <div className="MessagesPage">
      <div className="BehindTopPart"></div>
      <div className="MessagesPageBody">
        <div className="MessagesPageBodyLeft">
          <div className="MessagesPageBodyLeftTop">
            <input
              value={searchValue}
              onChange={handleSearchValueChange}
              placeholder="Search"
            ></input>
          </div>
          <div className="MessagesPageBodyLeftMain">
            {displayedMessagers.map((employee, index) => {
              return (
                <div key={index}>
                  <MessagesPageEmployee
                    handleOnClick={changeCurrentRecieverAndChatDisplayed}
                    employee={employee}
                  ></MessagesPageEmployee>
                </div>
              );
            })}
          </div>
        </div>
        <div className="MessagesPageBodyChat">
          <div className="MessagesPageBodyChatTop">
            <div className="MessagesPageBodyChatTopName">
              {currentRecieverAndChatDisplayed.name.firstName +
                " " +
                currentRecieverAndChatDisplayed.name.surname}
            </div>
            <div className="MessagesPageBodyChatTopEmployeeType">
              {currentRecieverAndChatDisplayed.employeeType}
            </div>
          </div>
          <div className="MessagesPageBodyChatMiddle">
            {currentRecieverAndChatDisplayed.messages.map((message, index) => {
              return (
                <div key={index}>
                  <MessagesPageMessage
                    yourUserInformation={userInformation}
                    otherUserInformation={currentRecieverAndChatDisplayed.name}
                    message={message}
                  ></MessagesPageMessage>
                </div>
              );
            })}
          </div>
          <div className="MessagesPageBodyChatBottom">
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
