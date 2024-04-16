import React from 'react';
import './Requirements.css';

const Requirements = () => {
  return (
    <div className="BoxWrapperse">
      <h2 className="Title">학과 졸업요건</h2>
      <button className="EditButton">수정하기</button>
      <div className="Text">
        <span>&nbsp;&nbsp;&nbsp;</span><span className="OptionalText">(선택)</span> TOEIC <span style={{ marginRight: '100px' }}></span> <span className="Achievement">달성</span><span style={{ marginRight: '450px' }}></span>
        <span className="MandatoryText">(필수)</span> 캡스톤 디자인<span style={{ marginRight: '100px' }}></span> <span className="Unachieved">미달성</span>
      </div>
    </div>
  );
};

export default Requirements;








