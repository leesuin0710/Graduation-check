import React, { useState,useEffect } from 'react';
import styled from 'styled-components';

const BoxWrapper = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 600px;
  height: 300px;
`;

const Title = styled.h3`
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0;
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

const SubtitleWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Subtitle = styled.p`
  margin: 5px 10px;
  color: ${({ IsGeneral }) => (IsGeneral ? 'black' : 'gray')};
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 400px; /* Set a fixed width for the Subtitle */
`;

const CreditWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Credit = styled.p`
  margin: 5px 0;
  color: ${({ isIncomplete }) => (isIncomplete ? 'red' : 'inherit')};
  font-weight: bold;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
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
const LiberalArts = () => {
  return (
    <BoxWrapper>
      <Title>교양</Title>
      <SubtitleWrapper>
        <Subtitle IsGeneral>필수 교양</Subtitle>
        <Subtitle IsGeneral>자유 교양</Subtitle>
        <Subtitle IsGeneral>일반 교양</Subtitle>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '450px', marginTop: '-90px' }}>
          <div style={{ marginBottom: '10px' }}>
            <EditableCredit value="6/10" onChange={(newValue) => console.log(newValue)} style={{ color: 'red' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <EditableCredit value="18/18" onChange={(newValue) => console.log(newValue)} style={{ color: 'blue' }} />
          </div>
          <div>
            <EditableCredit value="12/14" onChange={(newValue) => console.log(newValue)} style={{ color: 'red' }} />
          </div>
        </div>
        <Subtitle style={{ marginTop: '30px' }}>1영역 교양</Subtitle>
        <Subtitle>2영역 교양</Subtitle>
        <Subtitle>3영역 교양</Subtitle>
        <Subtitle>4영역 교양</Subtitle>
      </SubtitleWrapper>
      <EditButton>수정하기</EditButton>
      <CreditWrapper>
        <Credit style={{ marginTop: '15px' }}>학점</Credit>
        <Credit>학점</Credit>
        <Credit>학점</Credit>
        <Credit isIncomplete style={{ marginTop: '30px' }}>미이수</Credit>
        <Credit isIncomplete>미이수</Credit>
        <Credit isIncomplete>미이수</Credit>
        <Credit isIncomplete>미이수</Credit>
      </CreditWrapper>
    </BoxWrapper>
  );
};

export default LiberalArts;





















