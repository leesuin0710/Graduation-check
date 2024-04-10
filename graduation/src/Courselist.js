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
  height: 4000px;
`;

const CourseList = () => {
  return (
    <BoxWrapper>
      <h3>수강과목 리스트</h3>
      <p>수강과목 리스트 내용</p>
    </BoxWrapper>
  );
};

export default CourseList;
