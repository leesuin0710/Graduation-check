import React from "react";
import "../css/menuStyles.css";

//구조 분해 할당, 함수의 인자 안에서 분해... 본문 안에서 분해와 뭐가 더 괜찮을지...?
const Navbar = ({ isLoggedIn }) => {
  return (
    <nav>
      <ul>
        <li>홈</li>
        <li>꿀교양 찾기</li>
        {isLoggedIn ? (
          <>
            <li>마이 페이지</li>
            <li>로그아웃</li>
          </>
        ) : (
          <li>로그인</li>
        )}
      </ul>
    </nav>
  );
};
