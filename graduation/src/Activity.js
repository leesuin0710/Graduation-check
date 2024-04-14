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

const ActivityTitle = styled.h3`
  margin: 0; 
  position: absolute; 
  top: 10px; 
  left: 10px; 
`;

const Tag = styled.span`
  margin-right: 250px; 
  font-weight: bold; 
`;

const Activity = () => {
  return (
    <BoxWrapper>
      <ActivityTitle>활동</ActivityTitle>
      <EditButton>수정하기</EditButton>
      <div>
        <Tag>채플</Tag>
        <Tag>봉사</Tag>
      </div>
    </BoxWrapper>
  );
};

export default Activity;





