import "./MainPage.css";
import MainPageMainArea from "./MainPageMainArea/MainPageMainArea";
import TopSeperator from "../TopSeperator/TopSeperator";

const MainPage = (props) => {
  return (
    <div className="MainPage">
      <div className="BehindTopPart"></div>
      <div className="MainPageTitle">
        <div>Home</div>
      </div>
      <TopSeperator></TopSeperator>
      <MainPageMainArea
        mainPageMainAreaJson={props.mainPageJson}
        openSchedulePage={props.openSchedulePage}
      ></MainPageMainArea>
    </div>
  );
};

export default MainPage;
