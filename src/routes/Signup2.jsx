import Navbar from "../components/Navbar2";
import { useState } from "react";
import Select from "react-select";

import user_icon from "../assets/user-icon.png";
import student_icon from "../assets/student-icon.png";
import major_icon from "../assets/major-icon.png";

function Signup() {
  const [action, setAction] = useState("회원가입");

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
            <img src={student_icon} alt="" className="icon" />
            <input type="tel" placeholder="학번" />
          </div>

          <div className="input">
            <img src={major_icon} alt="" className="icon" />
            <Select
              //여기서,, 하면 안될 거 같다 만들어 둔 css랑 섞이질 못함, 수정이 필요한 부분~
              options={[
                { value: "major1", label: "컴퓨터공학부" },
                { value: "major2", label: "간호학과" },
                { value: "major3", label: "빅데이터학과" },
              ]}
              placeholder="전공"
            />
          </div>
        </div>

        <div className="submit-container">
          <div className="submit">다음</div>
        </div>
      </div>
    </>
  );
}

export default Signup;
