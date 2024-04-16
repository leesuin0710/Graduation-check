// LiberalArts.js

import React, { useState } from 'react';
import './LiberalArts.css'; // 외부 CSS 파일 import

const LiberalArts = () => {
  // 각 학점의 초기값 설정
  const [credits] = useState({
    required: { value: 6, total: 10 },
    elective: { value: 18, total: 18 },
    general: { value: 12, total: 14 }
  });

  return (
    <div className="BoxWrap">
      <h3 className="Title">교양</h3>
      <div className="CreditContain">
        <div className="CreditItem">
          <span className="CreditTitle">필수 교양</span>
          <span className="CreditValue">{credits.required.value} / {credits.required.total}</span>
        </div>
        <div className="CreditItem">
          <span className="CreditTitle">자유 교양</span>
          <span className="CreditValue">{credits.elective.value} / {credits.elective.total}</span>
        </div>
        <div className="CreditItem">
          <span className="CreditTitle">일반 교양</span>
          <span className="CreditValue">{credits.general.value} / {credits.general.total}</span>
        </div>
        <div className="CreditItem">
          <span className="CreditLabel">1영역 교양</span>
        </div>
        <div className="CreditItem">
          <span className="CreditLabel">2영역 교양</span>
        </div>
        <div className="CreditItem">
          <span className="CreditLabel">3영역 교양</span>
        </div>
        <div className="CreditItem">
          <span className="CreditLabel">4영역 교양</span>
        </div>
      </div>
      <button className="EditButton">수정하기</button>
      <div className="CreditWrap">
        <p className="Credit">학점</p>
        <p className="Credit">학점</p>
        <p className="Credit">학점</p>
        <p className="Credit isIncomplete">미이수</p>
        <p className="Credit isIncomplete">미이수</p>
        <p className="Credit isIncomplete">미이수</p>
        <p className="Credit isIncomplete">미이수</p>
      </div>
    </div>
  );
}

export default LiberalArts;


























