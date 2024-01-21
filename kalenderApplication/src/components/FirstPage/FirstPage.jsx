import { useState } from "react";
import "./FirstPage.css";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";

const FirstPage = (props) => {
  const [attemptingLogin, setAttemptingLogin] = useState(true);

  return (
    <div className="FirstPage">
      <div className="FirstPageContentContainer">
        <div className="LeftContainer">
          <div className="FirstPageLogo"></div>
        </div>
        <div className="FirstPageInteractableArea">
          <div>
            {attemptingLogin ? (
              <LoginPage
                onClickButton={() => setAttemptingLogin(false)}
              ></LoginPage>
            ) : (
              <SignupPage
                onClickButton={() => setAttemptingLogin(true)}
              ></SignupPage>
            )}
          </div>
          <button
            onClick={() => props.EnterProp()}
            className="FirstPageButton from-top"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
