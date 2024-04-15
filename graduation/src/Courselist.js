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
  height: auto;
  text-align: center;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  position: relative; 
`;

const LineWrapper = styled.div`
  width: 100%; 
  margin: 55px auto; 
  text-align: center; 
`;


const Line = styled.div`
  width: 1000px; 
  height: 1px;
  background-color: #000; 
  margin: 35px 120px; 
  position: relative; 
`;

const RowText = styled.div`
  position: absolute;
  top: 15px; 
  left: 20px; 
  transform: translateY(-50%); 
`;

const Col = styled.div`
  position: absolute;
  top: 60px;
  text-align: center;
  color: #666;
  right: 20px;
`;

const CourseList = () => {
  return (
    <BoxWrapper>
      <div>
        <h3>수강과목 리스트</h3>
        <LineWrapper>
          <Line>
            <RowText>Row1</RowText>
          </Line>
          <Line>
            <RowText>Row2</RowText>
          </Line>
          <Line>
            <RowText>Row3</RowText>
          </Line>
          <Line>
            <RowText>Row4</RowText>
          </Line>
          <Line>
            <RowText>Row5</RowText>
          </Line>
          <Line>
            <RowText>Row6</RowText>
          </Line>
          <Line>
            <RowText>Row7</RowText>
          </Line>
        </LineWrapper>
      </div>
      <Col style={{ right: '350px' }}>
        <div>Col2</div>
      </Col>
      <Col style={{ right: '200px' }}>
        <div>Col3</div>
      </Col>
    </BoxWrapper>
  );
};

export default CourseList; 



















