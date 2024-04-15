import React, { useState, useEffect } from 'react';
import './Activity.css'; // CSS 파일 import

const Activity = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (!isNaN(newValue)) {
      setEditValue(newValue);
    }
    setIsValid(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    // onBlur 이벤트에서 editValue를 totalValue와 합쳐서 onChange를 호출합니다.
    console.log(editValue + '/' + totalValue);
  };

  useEffect(() => {
    // editValue와 totalValue를 비교하여 isValid를 업데이트합니다.
    if (parseInt(editValue) === parseInt(totalValue)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [editValue, totalValue]);

  return (
    <div className="BoxWrapper">
      <div>
        <h3 className="ActivityTitle">활동</h3>
        <button className="EditButton" onClick={handleEdit}>수정하기</button>
      </div>
      <div className="TagContainer">
        <span className="Tag">채플</span>
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
          <span
            className={isValid ? "Progress blue" : "Progress red"}
            onClick={handleEdit}
          >
            {editValue || '3'}/{totalValue || '4'}
          </span>
        )}
      </div>
      <div className="TagContainer">
        <span className="Tag">봉사</span>
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
          <span
            className={isValid ? "Progress blue" : "Progress red"}
            onClick={handleEdit}
          >
            {editValue || '1'}/{totalValue || '1'}
          </span>
        )}
      </div>
    </div>
  );
};

export default Activity;










