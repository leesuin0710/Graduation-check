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
  flex-direction: column;
  justify-content: center;
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

const Title = styled.h3`
  margin: 0;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Description = styled.p`
  margin: 5px 0; 
  text-align: center; 
  margin-right: 15px; 
  font-weight: bold; 
  top: 50px;
  left: 10px;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%; 
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
        <span onClick={handleEdit} style={{ color: isValid ? 'blue' : 'red' }}>{editValue}/{totalValue}</span>
      )}
    </>
  );
};

const Major = () => {
  return (
    <BoxWrapper>
      <Title>전공</Title>
      <EditButton>수정하기</EditButton>
      <RowContainer>
        <div>
          <Description style={{marginTop: '20px'}}>전공 필수</Description>
          <Description>전공 선택</Description>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '450px', marginTop: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <EditableCredit value="25/30" onChange={(newValue) => console.log(newValue)} style={{ color: 'red' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <EditableCredit value="20/20" onChange={(newValue) => console.log(newValue)} style={{ color: 'blue' }} />
          </div>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <Description style={{marginTop: '20px'}}>학점</Description>
          <Description>학점</Description>
        </div>
      </RowContainer>
    </BoxWrapper>
  );
};

export default Major;















