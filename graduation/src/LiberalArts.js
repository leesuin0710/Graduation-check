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
      <h3 className="LibTitle">교양</h3>
      <div className="LibCreditContain">
        <div className="LibCreditItem">
          <span className="LibCreditTitle">필수 교양</span>
          <span className="LibCreditValue">{credits.required.value} / {credits.required.total}</span>
        </div>
        <div className="LibCreditItem">
          <span className="LibCreditTitle">자유 교양</span>
          <span className="LibCreditValue">{credits.elective.value} / {credits.elective.total}</span>
        </div>
        <div className="LibCreditItem">
          <span className="LibCreditTitle">일반 교양</span>
          <span className="LibCreditValue">{credits.general.value} / {credits.general.total}</span>
        </div>
        <div className="LibCreditItem">
          <span className="LibCreditLabel">1영역 교양</span>
        </div>
        <div className="LibCreditItem">
          <span className="LibCreditLabel">2영역 교양</span>
        </div>
        <div className="LibCreditItem">
          <span className="LibCreditLabel">3영역 교양</span>
        </div>
        <div className="LibCreditItem">
          <span className="LibCreditLabel">4영역 교양</span>
        </div>
      </div>
      <button className="LibEditButton">수정하기</button>
      <div className="LibCreditWrap">
        <p className="LibCredit">학점</p>
        <p className="LibCredit">학점</p>
        <p className="LibCredit">학점</p>
        <p className="LibCredit LibisIncomplete">미이수</p>
        <p className="LibCredit LibisIncomplete">미이수</p>
        <p className="LibCredit LibisIncomplete">미이수</p>
        <p className="LibCredit LibisIncomplete">미이수</p>
      </div>
    </div>
  );
}

export default LiberalArts;


























