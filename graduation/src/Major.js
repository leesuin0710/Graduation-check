import React from 'react';
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
  margin-right: 5px; 
  font-weight: bold; 
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%; 
`;

const Major = () => {
  return (
    <BoxWrapper>
      <Title>전공</Title>
      <EditButton>수정하기</EditButton>
      <RowContainer>
        <div>
          <Description>전공 필수</Description>
          <Description>전공 선택</Description>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <Description>학점</Description>
          <Description>학점</Description>
        </div>
      </RowContainer>
    </BoxWrapper>
  );
};

export default Major;














