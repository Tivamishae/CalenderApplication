import { useState } from "react";
import "./App.css";
import FirstPage from "./components/FirstPage/FirstPage";
import MainPage from "./components/MainPage/MainPage";
import TopPart from "./components/TopPart/TopPart";
import EmployeePage from "./components/EmployeePage/EmployeePage";
import SchedulePage from "./components/SchedulePage/SchedulePage";
import ReportPage from "./components/ReportsPage/ReportsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MessagesPage from "./components/MessagesPage/MessagesPage";
import ManagementPage from "./components/ManagementPage/ManagementPage";

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [mainPage, setMainPage] = useState(false);
  const [renderDropDown, setRenderDropDown] = useState(false);
  const [employeePage, setEmployeePage] = useState(false);
  const [schedulePage, setSchedulePage] = useState(false);
  const [reportsPage, setReportsPage] = useState(false);
  const [profilePage, setProfilePage] = useState(false);
  const [messagesPage, setMessagesPage] = useState(false);
  const [managementPage, setManagementPage] = useState(false);
  const [searchValueSchedulePage, setSearchValueSchedulePage] = useState("");
  const [recievedJson, setRecievedJson] = useState({
    topPart: { name: { firstName: "Hugo", surname: "Duran" } },
    mainPage: {
      shifts: [
        {
          date: "2024-03-10",
          start: "14:40",
          end: "22:10",
          place: "Hälsohuset",
        },
        {
          date: "2024-02-10",
          start: "14:40",
          end: "22:10",
          place: "Hälsohuset",
        },
        {
          date: "2024-01-10",
          start: "14:40",
          end: "22:10",
          place: "Hälsohuset",
        },
        {
          date: "2023-05-20",
          start: "14:40",
          end: "22:10",
          place: "Hälsohuset",
        },
        {
          date: "2023-05-19",
          start: "14:20",
          end: "20:10",
          place: "Hälsohuset",
        },
        {
          date: "2023-05-18",
          start: "14:40",
          end: "22:10",
          place: "Hälsohuset",
        },
        { date: "2023-05-15", start: "14:40", end: "22:10", place: "Ica" },
        {
          date: "2023-05-10",
          start: "14:40",
          end: "22:10",
          place: "Hälsohuset",
        },
        { date: "2023-05-02", start: "14:40", end: "22:10", place: "Ica" },
      ],
      reports: [
        {
          shortText: "Nya stolar på gymmet",
          sender: { firstName: "Hugo", surname: "Duran" },
          longText: "jdskadasdjksajdksajdslakd",
          date: "2023-07-13",
        },
      ],
    },
    employeePage: {
      employees: [
        {
          date: "2023-07-15",
          name: { firstName: "Hugo", surname: "Duran" },
          id: "07231",
          employeeType: "CEO",
          shiftGroups: ["Group 1", "Group 2", "Group 3", "Group 4"],
          shifts: [
            {
              date: "2024-09-12",
              time: "17:00 - 20:00",
              place: "Hälsohuset",
              additionalInformation: "Remember to bring waterbottle",
              shiftID: "000000001",
            },
            {
              date: "2024-09-11",
              time: "17:00 - 20:00",
              place: "Hälsohuset",
              additionalInformation: "Remember to bring waterbottle",
              shiftID: "000000002",
            },
            {
              date: "2023-09-11",
              time: "17:00 - 20:00",
              place: "Hälsohuset",
              additionalInformation: "Remember to bring waterbottle",
              shiftID: "000000003",
            },
          ],
          reports: [
            {
              shortText: "Nya stolar på gymmet",
              sender: { firstName: "Hugo", surname: "Duran" },
              longText:
                "jdskadasdjk j ioh udjsil iji isi jos jkdij ijdisj ijdi jisj ijsij jdisk oko ji ji skj dsjl  kodösk oökdsi jidj iajdi jsi djilsdji lsjild jsi jdisjd ijsod sljd jsko dijhsu ijdosi dhsj doisjdi sjd oisidhjsiaj hdiusahji dhsuih dishdu hajsi dhsuihd ijasjhud isjidhjsiuo djis h sdsajdksajdslakd",
              date: "2023-07-13",
            },
          ],
        },
        {
          date: "2023-07-15",
          name: { firstName: "Ulrica", surname: "Duran" },
          id: "07231",
          employeeType: "Programmer",
          shiftGroups: ["Group 1", "Group 2", "Group 3", "Group 4"],
          shifts: [
            {
              date: "2024-09-120",
              time: "17:00 - 20:00",
              place: "Hälsohuset",
              additionalInformation: "Remember to bring waterbottle",
              shiftID: "000000004",
            },
            {
              date: "2024-08-11",
              time: "17:00 - 20:00",
              place: "Hälsohuset",
              additionalInformation: "Remember to bring waterbottle",
              shiftID: "000000005",
            },
            {
              date: "2023-02-120",
              time: "17:00 - 20:00",
              place: "Hälsohuset",
              additionalInformation: "Remember to bring waterbottle",
              shiftID: "000000006",
            },
          ],
          reports: [
            {
              shortText: "Nya stolar på gymmet",
              sender: { firstName: "Ulrica", surname: "Duran" },
              longText: "Vi har fått nya stolar från Ikea på gymmet",
              date: "2023-07-10",
            },
          ],
        },
        {
          date: "2023-07-15",
          name: { firstName: "Ernesto", surname: "Duran" },
          id: "07232",
          employeeType: "Programmer",
          shiftGroups: ["Group 1", "Group 3", "Group 4"],
          shifts: [
            {
              date: "2024-09-120",
              time: "17:00 - 20:00",
              place: "Hälsohuset",
            },
            {
              date: "2024-08-11",
              time: "17:00 - 20:00",
              place: "Hälsohuset",
            },
            {
              date: "2023-02-120",
              time: "17:00 - 20:00",
              place: "Hälsohuset",
            },
          ],
          reports: [
            {
              shortText: "Nya stolar på gymmet",
              sender: { firstName: "Ulrica", surname: "Duran" },
              longText: "Vi har fått nya stolar från Ikea på gymmet",
              date: "2023-07-10",
            },
          ],
        },
      ],
      employeeTypes: ["CEO", "Programmer", "Finance administrator"],
      employeeGroups: ["Group 1", "Group 2", "Group 3"],
    },
    schedulePage: {
      employees: [
        {
          date: "2023-07-15",
          name: { firstName: "Hugo", surname: "Duran" },
          id: "07231",
          employeeType: "CEO",
          shiftGroups: ["Group 1", "Group 2", "Group 3", "Group 4"],
          shifts: [
            {
              date: "2024-01-13",
              time: "14:40 - 22:10",
              place: "Hälsohuset",
            },
          ],
        },
        {
          date: "2023-07-15",
          name: { firstName: "Ulrica", surname: "Duran" },
          id: "09999",
          employeeType: "Programmer",
          shiftGroups: ["Group 1", "Group 2", "Group 3", "Group 4"],
          shifts: [
            {
              date: "2024-01-13",
              time: "14:40 - 22:10",
              place: "Hälsohuset",
            },
          ],
        },
      ],
    },
    reportsPage: {
      reports: [
        {
          id: "07645",
          reportType: "New Equipment",
          description: "Nya stolar på gymmet",
          sender: { firstName: "Hugo", surname: "Duran", id: "07231" },
          date: "2023-07-13",
          text: "jdskadasdjksajddjksahdiusaiud",
        },
      ],
    },
    profilePage: {
      name: { firstName: "Hugo", surname: "Duran" },
      id: "70653",
      position: "CEO",
      timeWorked: { hours: "150", minutes: "20" },
      dateOfEmployment: "2022-07-14",
      shiftGroups: ["Group 1", "Group 2", "Group 3"],
    },
    messagesPage: {
      currentChats: [
        {
          id: "07630",
          name: { firstName: "Ernesto", surname: "Duran" },
          employeeType: "Software Developer",
          messages: [
            {
              messageId: "076301",
              sender: "07630",
              message:
                "hdusaguydgsauihdsyagud",
              dateAndTime: { date: "2023-06-02", time: "17-06" },
            },
          ],
        },
        {
          id: "09999",
          name: { firstName: "Ulrica", surname: "Duran" },
          employeeType: "Software Developer",
          messages: [
            {
              messageId: "086211",
              sender: "08621",
              message: "jdskadjsdakdoaks ods id jodsja ",
              dateAndTime: { date: "2023-06-02", time: "17-06" },
            },
            {
              messageId: "099991",
              sender: "09999",
              message: "jdskadjsdakdoaks ods id jodsja ",
              dateAndTime: { date: "2023-06-02", time: "17-06" },
            },
            {
              messageId: "099992",
              sender: "09999",
              message: "jdskadjsdakdoaks ods id jodsja ",
              dateAndTime: { date: "2023-06-02", time: "17-06" },
            },
            {
              messageId: "086212",
              sender: "08621",
              message: "jdskadjsdakdoaks ods id jodsja ",
              dateAndTime: { date: "2023-06-02", time: "17-06" },
            },
            {
              messageId: "099993",
              sender: "09999",
              message: "jdskadjsdakdoaks ods id jodsja ",
              dateAndTime: { date: "2023-06-02", time: "17-06" },
            },
            {
              messageId: "099994",
              sender: "09999",
              message: "jdskadjsdakdoaks ods id jodsja ",
              dateAndTime: { date: "2023-06-02", time: "17-06" },
            },
            {
              messageId: "099994",
              sender: "09999",
              message: "jdskadjsdakdoaks ods id jodsja ",
              dateAndTime: { date: "2024-01-10", time: "17-06" },
            },
            {
              messageId: "099994",
              sender: "09999",
              message: "jdskadjsdakdoaks ods id jodsja ",
              dateAndTime: { date: "2024-01-11", time: "12-06" },
            },
            {
              messageId: "099994",
              sender: "09999",
              message: "jdskadjsdakdoaks ods id jodsja ",
              dateAndTime: { date: "2024-01-11", time: "17-06" },
            },
          ],
        },
      ],
      currentEmployees: [
        {
          id: "07630",
          name: { firstName: "Ernesto", surname: "Duran" },
          employeeType: "Software Developer",
        },
        {
          id: "09999",
          name: { firstName: "Ulrica", surname: "Duran" },
          employeeType: "Software Developer",
        },
      ],
    },
  });

  const handleEnter = () => {
    setHasEntered(true);
    setMainPage(true);
  };

  const handleExit = () => {
    setRenderDropDown(false);
    setHasEntered(false);
    setMainPage(false);
    setEmployeePage(false);
    setSchedulePage(false);
    setReportsPage(false);
    setProfilePage(false);
    setMessagesPage(false);
    setManagementPage(false);
  };

  const changeRenderDropDown = () => {
    setRenderDropDown(!renderDropDown);
  };

  const closeRenderDropDownIfOpen = () => {
    if (renderDropDown === true) {
      setRenderDropDown(false);
    }
  };

  const handleOpenMainPage = () => {
    setRenderDropDown(false);
    setMainPage(true);
    setEmployeePage(false);
    setSchedulePage(false);
    setReportsPage(false);
    setProfilePage(false);
    setMessagesPage(false);
    setManagementPage(false);
  };

  const handleOpenEmployeePage = () => {
    setRenderDropDown(false);
    setMainPage(false);
    setEmployeePage(true);
    setSchedulePage(false);
    setReportsPage(false);
    setProfilePage(false);
    setMessagesPage(false);
    setManagementPage(false);
  };

  const handleOpenSchedulePage = (searchValue) => {
    setRenderDropDown(false);
    setMainPage(false);
    setEmployeePage(false);
    setSchedulePage(true);
    setReportsPage(false);
    setProfilePage(false);
    setMessagesPage(false);
    setManagementPage(false);
    setSearchValueSchedulePage(searchValue);
  };

  const handleOpenReportsPage = () => {
    setRenderDropDown(false);
    setMainPage(false);
    setEmployeePage(false);
    setSchedulePage(false);
    setReportsPage(true);
    setProfilePage(false);
    setMessagesPage(false);
    setManagementPage(false);
  };

  const handleOpenProfilePage = () => {
    setRenderDropDown(false);
    setMainPage(false);
    setEmployeePage(false);
    setSchedulePage(false);
    setReportsPage(false);
    setProfilePage(true);
    setMessagesPage(false);
    setManagementPage(false);
  };

  const handleOpenMessagesPage = () => {
    setRenderDropDown(false);
    setMainPage(false);
    setEmployeePage(false);
    setSchedulePage(false);
    setReportsPage(false);
    setProfilePage(false);
    setMessagesPage(true);
    setManagementPage(false);
  };

  const handleOpenManagementPage = () => {
    setRenderDropDown(false);
    setMainPage(false);
    setEmployeePage(false);
    setSchedulePage(false);
    setReportsPage(false);
    setProfilePage(false);
    setMessagesPage(false);
    setManagementPage(true);
  };

  const updateEmployee = (newEmployeeInfo) => {
    setRecievedJson((prevState) => {
      const newState = { ...prevState };

      const employeeToUpdate = newState.employeePage.employees.find(
        (employee) => employee.id === newEmployeeInfo.id
      );

      if (employeeToUpdate) {
        employeeToUpdate.name.firstName = newEmployeeInfo.firstName;
        employeeToUpdate.name.surname = newEmployeeInfo.surname;
        employeeToUpdate.employeeType = newEmployeeInfo.employeeType;
        employeeToUpdate.shiftGroups = newEmployeeInfo.employeeGroups;
      }

      return newState;
    });
  };

  const removeShifts = (updatedEmployee) => {
    setRecievedJson((prevState) => {
      const newState = { ...prevState };

      const employeeToUpdate = newState.employeePage.employees.find(
        (employee) => employee.id === updatedEmployee.id
      );
      if (employeeToUpdate) {
        employeeToUpdate.shifts = updatedEmployee.shifts;
      }

      return newState;
    });
  };

  return (
    <>
      <div onClick={() => closeRenderDropDownIfOpen()} className="WholeScreen">
        {hasEntered ? (
          <div>
            <TopPart
              topPartJson={recievedJson.topPart}
              logOut={handleExit}
              renderDropDown={renderDropDown}
              changeRenderDropDown={changeRenderDropDown}
              openMainPage={handleOpenMainPage}
              openEmployeePage={handleOpenEmployeePage}
              openSchedulePage={handleOpenSchedulePage}
              openReportPage={handleOpenReportsPage}
              openProfilePage={handleOpenProfilePage}
              openMessagesPage={handleOpenMessagesPage}
              openManagementPage={handleOpenManagementPage}
            ></TopPart>
            {mainPage ? (
              <MainPage
                mainPageJson={recievedJson.mainPage}
                openSchedulePage={handleOpenSchedulePage}
              ></MainPage>
            ) : null}
            {employeePage ? (
              <EmployeePage
                removeShifts={removeShifts}
                updateEmployee={updateEmployee}
                employeePageJson={recievedJson.employeePage}
                handleOpenSchedulePage={handleOpenSchedulePage}
              ></EmployeePage>
            ) : null}
            {schedulePage ? (
              <SchedulePage
                schedulePageJson={recievedJson.schedulePage}
                searchValueSchedulePage={searchValueSchedulePage}
              ></SchedulePage>
            ) : null}
            {reportsPage ? (
              <ReportPage
                reportsPageJson={recievedJson.reportsPage}
              ></ReportPage>
            ) : null}
            {profilePage ? (
              <ProfilePage
                profilePageJson={recievedJson.profilePage}
              ></ProfilePage>
            ) : null}
            {messagesPage ? (
              <MessagesPage
                messagesPageJson={recievedJson.messagesPage}
              ></MessagesPage>
            ) : null}
            {managementPage ? <ManagementPage></ManagementPage> : null}
          </div>
        ) : (
          <FirstPage EnterProp={handleEnter}></FirstPage>
        )}
      </div>
    </>
  );
}

export default App;
