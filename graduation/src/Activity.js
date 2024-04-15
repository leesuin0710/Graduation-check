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
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
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
  color: ${props => (props.isValid ? 'blue' : 'red')}; 
  position: relative;
`;

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
        <Progress isValid={isValid} onClick={handleEdit}>
          {editValue}/{totalValue}
        </Progress>
      )}
    </>
  );
};

const Activity = () => {
  return (
    <BoxWrapper>
      <div>
        <ActivityTitle>활동</ActivityTitle>
        <EditButton>수정하기</EditButton>
      </div>
      <div style={{ marginLeft: '-150px', display: 'flex' }}>
        <Tag>채플</Tag>
        <EditableCredit value="3/4" onChange={(newValue) => console.log(newValue)} />
      </div>
      <div style={{ marginRight: '200px', display: 'flex' }}>
        <Tag>봉사</Tag>
        <EditableCredit value="1/1" onChange={(newValue) => console.log(newValue)} />
      </div>
    </BoxWrapper>
  );
};

export default Activity;






