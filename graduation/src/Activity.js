import React, { useState, useEffect } from 'react';
import './Activity.css';

const EditableCredit = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value.split('/')[0]);
  const [totalValue] = useState(value.split('/')[1]);
  const [isValid, setIsValid] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (!isNaN(newValue)) {
      setEditValue(newValue);
      onChange(newValue + '/' + totalValue);
    }
    setIsValid(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    onChange(editValue + '/' + totalValue);
  };

  useEffect(() => {
    if (parseInt(editValue) === parseInt(totalValue)) {
      setIsValid(true);
    } else {
      setIsValid(false);
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
        <div className="Progress" isValid={isValid} onClick={handleEdit}>
          {editValue}/{totalValue}
        </div>
      )}
    </>
  );
};

const Activity = () => {
  return (
    <div className="BoxWrappe">
      <div>
        <h2 className="ActivityTitle">활동</h2>
        <button className="EditButton">수정하기</button>
      </div>
      <div className="TagContainer">
        <span className="Tag">채플</span>
        <EditableCredit value="3/4" onChange={(newValue) => console.log(newValue)} />
      </div>
      <div className="TagContainer">
        <span className="Tag">봉사</span>
        <EditableCredit value="1/1" onChange={(newValue) => console.log(newValue)} />
      </div>
    </div>
  );
};

export default Activity;













