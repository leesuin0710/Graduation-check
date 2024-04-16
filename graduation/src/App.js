import React from 'react';
import './App.css';
import Sidebar from './sidebar';
import LiberalArts from './LiberalArts';
import Major from './Major';
import Activity from './Activity';
import Requirements from './Requirements'; 
import CourseList from './Courselist'; 

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="ContentWrapper">
        <title>마이페이지</title>
        <div className="MainContentWrapper">
          <LiberalArts />
          <div>
            <Major />
            <Activity />
          </div>
        </div>
        <Requirements />
        <div className="Subjectlist">수강 과목 등록</div>
        <div className="ButtonContainer">
          <button className="Button">파일 업로드</button>
          <button className="Button">직접 추가</button>
        </div>
        <CourseList /> 
      </div>
    </div>
  );
};

export default App;



























