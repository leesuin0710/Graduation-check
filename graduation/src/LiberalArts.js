// LiberalArts.js

import React, { useState } from 'react';
import './LiberalArts.css'; // 외부 CSS 파일 import

const LiberalArts = () => {
  // 각 학점의 초기값 설정
  const [credits, setCredits] = useState({
    required: { value: 6, total: 10 },
    elective: { value: 18, total: 18 },
    general: { value: 12, total: 14 }
  });

  // 학점 수정 함수
  const handleCreditChange = (type, newValue) => {
    // 입력된 값이 숫자인지 확인
    if (!isNaN(newValue)) {
      // 새로운 값이 총 학점보다 작거나 같은지 확인
      if (newValue <= credits[type].total) {
        // 새로운 값을 반영하여 상태 업데이트
        setCredits({ ...credits, [type]: { ...credits[type], value: newValue } });
      } else {
        alert(`총 학점은 ${credits[type].total}을(를) 넘을 수 없습니다.`);
      }
    } else {
      alert('숫자를 입력해주세요.');
    }
  };

  return (
    <div className="BoxWrapper">
      <h3 className="Title">교양</h3>
      <div className="CreditContainer">
        <div className="CreditItem">
          <span className="CreditLabel">필수 교양</span>
          <span className="CreditValue">{credits.required.value} / {credits.required.total}</span>
        </div>
        <div className="CreditItem">
          <span className="CreditLabel">자유 교양</span>
          <span className="CreditValue">{credits.elective.value} / {credits.elective.total}</span>
        </div>
        <div className="CreditItem">
          <span className="CreditLabel">일반 교양</span>
          <span className="CreditValue">{credits.general.value} / {credits.general.total}</span>
        </div>
      </div>
      <button className="EditButton">수정하기</button>
      <div className="CreditWrapper">
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

























