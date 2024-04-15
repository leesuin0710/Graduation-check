import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BoxWrapper = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 650px;
  height: 133px;
  display: flex; /* 가로로 정렬을 위한 flex 설정 */
  justify-content: space-between; /* 요소 사이의 간격을 균등하게 배분 */
  align-items: center; /* 수직 정렬 */
`;

const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: black;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;

const ActivityTitle = styled.h3`
  margin: 0; 
  position: absolute; 
  top: 10px; 
  left: 10px; 
`;

const Tag = styled.span`
  margin-right: 10px; 
  font-weight: bold; 
`;

const Progress = styled.span`
  color: ${props => (props.isValid ? 'blue' : 'red')}; // 유효성에 따라 색상 변경
  position: relative; // 상대 위치 지정
`;

// Removed ProgressText styling as it's not used

const EditableCredit = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value.split('/')[0]);
  const [totalValue] = useState(value.split('/')[1]); // '/' 뒤의 숫자는 고정시킵니다.
  const [isValid, setIsValid] = useState(true);


  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    // 입력값이 비어있지 않고 숫자로 구성되어 있을 때만 값을 변경합니다.
    if (!isNaN(newValue)) {
      setEditValue(newValue);
      onChange(newValue + '/' + totalValue);
    }
    setIsValid(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    onChange(editValue + '/' + totalValue); // 수정된 숫자와 '/' 뒤의 숫자를 합쳐서 변경합니다.
  };

  useEffect(() => {
    if (parseInt(editValue) === parseInt(totalValue)) {
      setIsValid(true); // 앞의 숫자와 뒤의 숫자가 같으면 유효한 상태로 설정합니다.
    } else {
      setIsValid(false); // 앞의 숫자와 뒤의 숫자가 다르면 유효하지 않은 상태로 설정합니다.
    }
  }, [editValue, totalValue]);

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
          style={{ width: '40px' }}
        />
      ) : (
        <Progress isValid={isValid} onClick={handleEdit}>
          {editValue}
        </Progress>
      )}
    </>
  );
};

const Activity = () => {
  return (
    <BoxWrapper>
      <div> {/* 첫 번째 요소 */}
        <ActivityTitle>활동</ActivityTitle>
        <EditButton>수정하기</EditButton>
      </div>
      <div style={{ marginRight: '200px', display: 'flex' }}>
        <Tag>채플</Tag>
        <EditableCredit value="3/4" onChange={(newValue) => console.log(newValue)} />
      </div>
      <div style={{ marginLeft: '-130px', display: 'flex' }}>
        <Tag>봉사</Tag>
        <EditableCredit value="1/1" onChange={(newValue) => console.log(newValue)} />
      </div>
    </BoxWrapper>
  );
};

export default Activity;






