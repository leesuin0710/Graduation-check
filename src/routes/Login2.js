import Navbar from "../components/Navbar2";
import { Link } from "react-router-dom";
import { useState } from "react";

import user_icon from "../assets/user-icon.png";
import password_icon from "../assets/password-icon.png";

//import Hero from "../components/Hero";

function Login() {
  const [action, setAction] = useState("Login");

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" className="icon" />
            <input type="text" placeholder="아이디" />
          </div>

          <div className="input">
            <img src={password_icon} alt="" className="icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className="forgot-password">
          비밀번호를 잊으셨나요?{" "}
          <Link to="/reset-password">
            <span> Click Here!</span>
          </Link>
        </div>

        <div className="submit-container">
          <div className="submit" onClick={() => setAction("Signup")}>
            Sign Up
          </div>
          <div className="submit gray" onClick={() => setAction("Login")}>
            Login
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

// 홈에서 로그인 눌렀을 때 연결되도록,, 손봐야함
// 밑에 submit-container도 손을 봐야한다..
