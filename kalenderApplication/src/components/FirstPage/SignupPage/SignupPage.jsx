import "./SignupPage.css";

const SignupPage = (props) => {
  return (
    <div className="SignupPage">
      <div className="SignupPageTitle">SIGNUP</div>
      <input placeholder="Username"></input>
      <input placeholder="Password"></input>
      <br></br>
      <div style={{ fontSize: 15 }}>Already have an account?</div>
      <button onClick={() => props.onClickButton()} className="LoginButton">
        Login
      </button>
    </div>
  );
};

export default SignupPage;
