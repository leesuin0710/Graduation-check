import Navbar from "../components/Navbar2";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import user_icon from "../assets/user-icon.png";
import password_icon from "../assets/password-icon.png";

//import Hero from "../components/Hero";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태

  const handleLogin = () => {
    // 로그인 처리 로직을 추가하고 성공하면 isLoggedIn 상태를 true로 변경
    setIsLoggedIn(true);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />{" "}
      {/* Navbar에 isLoggedIn 상태를 props로 전달 */}
      <div className="container">
        <div className="header">
          <div className="text">로그인</div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" className="icon" />
            <input type="text" placeholder="아이디" />
          </div>

          <div className="input">
            <img src={password_icon} alt="" className="icon" />
            <input type="password" placeholder="비밀번호" />
          </div>
        </div>

        <div className="forgot-password">
          비밀번호를 잊으셨나요?{" "}
          <Link to="/reset-password" style={{ textDecoration: "none" }}>
            <span> Click Here!</span>
          </Link>
        </div>

        <div className="submit-container">
          <div className="submit" onClick={handleLogin}>
            로그인
          </div>{" "}
          {/* 로그인 버튼 클릭 시 handleLogin 함수 호출 */}
        </div>

        <div className="go-signup">
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span>회원가입</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
// 홈에서 로그인 눌렀을 때 연결되도록,, 손봐야함
// 밑에 submit-container도 손을 봐야한다..
