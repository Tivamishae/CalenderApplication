import "./LoginPage.css";

const LoginPage = (props) => {
  return (
    <div className="LoginPage">
      <div className="LoginPageTitle">LOGIN</div>
      <input placeholder="Username"></input>
      <input placeholder="Password"></input>
      <br></br>
      <div style={{ fontSize: 15 }}>Dont have an account?</div>
      <button onClick={() => props.onClickButton()} className="SignupButton">
        Signup
      </button>
    </div>
  );
};

export default LoginPage;
