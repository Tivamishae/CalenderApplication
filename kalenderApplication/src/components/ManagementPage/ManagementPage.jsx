import "./ManagementPage.css";
import TopSeperator from "../TopSeperator/TopSeperator";

const ManagementPage = () => {
  return (
    <div className="ManagementPage">
      <div className="BehindTopPart"></div>
      <div className="ManagementPageTitleArea">
        <div>Management</div>
      </div>
      <TopSeperator></TopSeperator>
      <div className="ManagementPageBody">
        <button className="ManagementPageBodyLeft">
          <div className="ManagementPageBodyTitle">Create new employee</div>
          <div className="ManagementPageSeparation"></div>
          <div className="ManagementPageCreateEmployee"></div>
        </button>
        <button className="ManagementPageBodyMiddle">
          <div className="ManagementPageBodyTitle">Expand company data</div>
          <div className="ManagementPageSeparation"></div>
          <div className="ManagementPageExpandData"></div>
        </button>
        <button className="ManagementPageBodyRight">
          <div className="ManagementPageBodyTitle">Global actions</div>
          <div className="ManagementPageSeparation"></div>
          <div className="ManagementPageGlobalActions"></div>
        </button>
      </div>
    </div>
  );
};

export default ManagementPage;
