import React from 'react';
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
  background-color: black; /* 검정색으로 변경 */
  color: white; /* 텍스트 색상을 흰색으로 변경 */
  border: none; /* 테두리 제거 */
  padding: 5px 10px; /* 내부 여백 설정 */
  border-radius: 3px; /* 버튼 모서리를 둥글게 설정 */
  cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능한 상태로 표시 */
`;

const LiberalArts = () => {
  const handleEdit = () => {
    console.log('Edit button clicked');
  };

  return (
    <BoxWrapper>
      <Title>교양</Title>
      <EditButton onClick={handleEdit}>수정하기</EditButton>
      <p>Liberal Arts 내용</p>
    </BoxWrapper>
  );
};

export default LiberalArts;



