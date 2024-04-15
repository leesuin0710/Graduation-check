import React from 'react';
import styled from 'styled-components';

const BoxWrapper = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 1310px;
  height: 134px;
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
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

const Text = styled.p`
  margin: 0;
  font-weight: bold; 
`;

const Achievement = styled.span`
  color: blue; 
`;

const Unachieved = styled.span`
  color: red; 
`;

const Title = styled.h3`
  margin: 10px 0; 
`;

const OptionalText = styled.span`
  color: gray; 
`;

const MandatoryText = styled.span`
  color: gray; 
`;

const Requirements = () => {
  return (
    <BoxWrapper>
      <Title>학과 졸업요건</Title>
      <EditButton>수정하기</EditButton>
      <Text>
        <span>&nbsp;&nbsp;&nbsp;</span><OptionalText>(선택)</OptionalText> TOEIC <span style={{ marginRight: '100px' }}></span> <Achievement>달성</Achievement><span style={{ marginRight: '450px' }}></span>
        <MandatoryText>(필수)</MandatoryText> 캡스톤 디자인<span style={{ marginRight: '100px' }}></span> <Unachieved>미달성</Unachieved>
      </Text>
    </BoxWrapper>
  );
};

export default Requirements;






