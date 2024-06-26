import { useState, useEffect } from "react";
import Navbar from "../components/Navbar2";
import user_icon from "../assets/user_icon.png";
import email_icon from "../assets/email_icon.png"; // 이메일 아이콘 이미지
import password_icon from "../assets/password_icon.png"; // 비밀번호 아이콘 이미지
import major_icon from "../assets/major_icon.png";
import DropdownBtn from "../components/Dropdown_btn";
import "../styles/SignupStyles.css";
import "../styles/Signup_dropbtn.css";
import api from '../api'; // API 

function Signup() {
  const [checkList, setCheckList] = useState([]); // 이용약관 하려고..

  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState(""); // 이름 입력 상태 변수
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [major, setMajor] = useState(null); // 선택된 학과

  const [emailMsg, setEmailMsg] = useState("");
  const [studentIdMsg, setStudentIdMsg] = useState("");
  const [nameMsg, setNameMsg] = useState(""); // 이름 입력 여부 메세지
  const [pwdMsg, setPwdMsg] = useState("");
  const [confirmPwdMsg, setConfirmPwdMsg] = useState("");
  const [majorMsg, setMajorMsg] = useState(""); // 학과 선택 여부 메시지

  const [isEmailCheck, setIsEmailCheck] = useState(false); // 중복 검사를 했는지 안했는지
  const [isEmailAvailable, setIsEmailAvailable] = useState(false); // 아이디 사용 가능한지 아닌지

  const [departmentGroups, setDepartmentGroups] = useState([])
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    api.departmentGroups.findAll().then((departmentGroups) => setDepartmentGroups(departmentGroups))
  }, [])

  // 체크박스 전체선택시 모두선택 체크박스 활성화시키기
  const handleCheck = (e) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((el) => el !== e.target.name));
  };

  // 전체체크 선택시 전체 선택 or 전체해제
  const checkAll = (e) => {
    e.target.checked ? setCheckList(["terms", "privacy"]) : setCheckList([]);
  };



  const onChangeEmailHandler = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    emailCheckHandler(emailValue);
  };

  const onChangeStudentIdHandler = (e) => {
    const studentId = e.target.value;
    setStudentId(studentId);
    studentIdCheckHandler(studentId); // 학번 유효성 확인 함수 호출
  };

  const onChangeNameHandler = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    nameCheckHandler(nameValue); // 이름 유효성 확인 함수 호출
  };

  const onChangePwdHandler = (e) => {
    const { name, value } = e.target;
    if (name === "pwd") {
      setPwd(value);
      pwdCheckHandler(value, confirmPwd);
    } else {
      setConfirmPwd(value);
      pwdCheckHandler(pwd, value);
    }
  };


  const handleSelectDepartmentGroup = (departmentGroup) => {
    setDepartments(departmentGroup.departments);
  };

  const handleResetForDepartmentGroup = () => {
    setDepartments([])
  };

  const handleSelect = (department) => {
    console.log("Selected item:", department);
    setMajor(department.id); // 선택된 학과 저장
    setMajorMsg(""); // 메시지 초기화
  };
  
  const handleResetForDepartments = () => {
    setMajor(null)
  };


  const handleSubmit = async () => {
    if (!major) {
      setMajorMsg("학과를 선택해주세요.");
      return;
    }
    // 유효성 검사
    if (!emailCheckHandler(email) || !studentIdCheckHandler(studentId) || !nameCheckHandler(name) || !pwdCheckHandler(pwd, confirmPwd)) {
      return;
    }

    const id = parseInt(studentId, 10);

    const MemberCreateOptions = {
      id,
      email,
      name,
      password: pwd,
      departmentId: major, // major 값을 departmentId로 사용
    };

    console.log("Sending data to server:", MemberCreateOptions);

    try {
      const response = await api.members.create(MemberCreateOptions);
      if (response.status === 201) {
        alert('회원가입이 성공적으로 완료되었습니다.');
        // 회원가입 성공 후 추가 작업 (마이 페이지로 이동)
        localStorage.setItem('token',response.token);
        window.location.href = '/mypage';
      } else if (response.status === 409) {
        alert(`회원가입 실패: ${response.message}`);
      } else {
        alert('회원가입 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  const emailCheckHandler = async (email) => {
    // 이메일 유효성 검사 Handler 구현
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
      setEmailMsg("이메일을 입력해주세요.");
      setIsEmailAvailable(false);
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailMsg("유효한 이메일 형식을 입력해주세요.");
      setIsEmailAvailable(false);
      return false;
    }
    setEmailMsg("");
    setIsEmailAvailable(true);
    return true;
  };

  const studentIdCheckHandler = (studentId) => {
    // 학번 유효성 검사 Handler 구현
    const studentIdRegex = /^\d{8}$/; // 8자리의 숫자인지 확인하는 정규식

    if (studentId === "") {
      setStudentIdMsg("학번을 입력해주세요.");
      return false;
    } else if (!studentIdRegex.test(studentId)) {
      setStudentIdMsg("학번은 8자리의 숫자로 입력해주세요.");
      return false;
    } else {
      setStudentIdMsg("");
      return true;
    }
  };

  const nameCheckHandler = (name) => {
    // 이름 유효성 검사 Handler 구현
    if (name === "") {
      setNameMsg("이름을 입력해주세요.");
      return false;
    } else {
      setNameMsg("");
      return true;
    }
  };

  const pwdCheckHandler = (pwd, confirmPwd) => {
    // 비밀번호 유효성 검사 Handler 구현
    const pwdRegex = /^[a-z\d!@*&-_]{8,16}$/;
    if (pwd === "") {
      setPwdMsg("비밀번호를 입력해주세요.");
      return false;
    } else if (!pwdRegex.test(pwd)) {
      setPwdMsg(
        "비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다."
      );
      return false;
    } else if (confirmPwd !== pwd) {
      setPwdMsg("");
      setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
      return false;
    } else {
      setPwdMsg("");
      setConfirmPwdMsg("");
      return true;
    }
  };

  return (
    <>
      <div className="SignupContainer">
        <div className="SingnupTextHeader">
          <div className="SingupText">회원가입</div>
        </div>

        <div className="s_InputWrapper">
          <div className="s_InputContainer">
            <div className="s_input">
              <img src={email_icon} alt="" className="icon" />
              <input
                type="text"
                placeholder="이메일"
                onChange={onChangeEmailHandler}
              />
            </div>
            {emailMsg && (
              <p className={emailMsg ? "s_message" : ""}>{emailMsg}</p>
            )}
          </div>

          <div className="s_InputContainer">
            <div className="s_input">
              <img src={user_icon} alt="" className="icon" />
              <input
                type="text"
                placeholder="이름"
                onChange={onChangeNameHandler}
              />
            </div>
            {nameMsg && <p className={nameMsg ? "s_message" : ""}>{nameMsg}</p>}
          </div>

          <div className="s_InputContainer">
            <div className="s_input">
              <img src={user_icon} alt="" className="icon" />
              <input
                type="text"
                placeholder="학번"
                maxLength={8}
                onChange={onChangeStudentIdHandler}
              />
            </div>
            {studentIdMsg && <p className="s_message">{studentIdMsg}</p>}
          </div>

          <div className="s_InputContainer">
            <div className="s_input">
              <img src={password_icon} alt="" className="icon" />
              <input
                type="password"
                id="pwd"
                name="pwd"
                value={pwd}
                placeholder="비밀번호"
                maxLength={16}
                onChange={onChangePwdHandler}
              />
            </div>
            {pwdMsg && <p className="s_message">{pwdMsg}</p>}
          </div>

          <div className="s_InputContainer">
            <div className="s_input">
              <img src={password_icon} alt="" className="icon" />
              <input
                type="password"
                id="confirmPwd"
                name="confirmPwd"
                value={confirmPwd}
                placeholder="비밀번호 확인"
                maxLength={16}
                onChange={onChangePwdHandler}
              />
            </div>
            {confirmPwdMsg && <p className="s_message">{confirmPwdMsg}</p>}
          </div>

          <div className="s_InputContainer">
            <div className="s_input">
              <img src={major_icon} alt="" className="icon" />
              <DropdownBtn
                drBtn_title={"학과"}
                items={departmentGroups.map(item => item.name)}
                type={"signup"}
                onSelect={(item) => {
                  const departmentGroup = departmentGroups.find(dept => dept.name === item);
                  handleSelectDepartmentGroup(departmentGroup);
                }}
                onReset={handleResetForDepartmentGroup}
              />
            </div>
            {majorMsg && <p className="s_message">{majorMsg}</p>}
          </div>


          {departments.length > 0 && <div className="s_InputContainer">
            <div className="s_input">
              <img src={major_icon} alt="" className="icon" />
              <DropdownBtn
                drBtn_title={"학과"}
                items={departments.map(item => item.name)}
                type={"signup"}
                onSelect={(item) => {
                  const department = departments.find(dept => dept.name === item);
                  handleSelect(department);
                }}
                onReset={handleResetForDepartments}
              />
            </div>
            {majorMsg && <p className="s_message">{majorMsg}</p>}
          </div>}

          <div className="Agreement">
            <div className="agree1">
              <div>
                <input
                  type="checkbox"
                  name="checkAll"
                  onChange={checkAll}
                  checked={checkList.length === 2 ? true : false}
                />
                아래 내용에 모두 동의합니다.
              </div>
            </div>

            <div className="line"></div>

            <div className="agree2">
              <div>
                <input
                  type="checkbox"
                  name="terms"
                  onChange={handleCheck}
                  checked={checkList.includes("terms") ? true : false}
                />
                [필수] 이용약관 동의
              </div>
              <div className="showMore2">상세보기</div>
            </div>

            <div className="agree3-box">
              <div className="agree3">
                <div>
                  <input
                    type="checkbox"
                    name="privacy"
                    onChange={handleCheck}
                    checked={checkList.includes("privacy") ? true : false}
                  />
                  [필수] 개인정보 수집 이용 동의
                </div>
              </div>
              <div className="showMore3">상세보기</div>
            </div>
          </div>
          <div className="s_submit-container">
            <button className="s_submit" onClick={handleSubmit}>
              가입하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
