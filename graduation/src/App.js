import React from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar';
import LiberalArts from './LiberalArts';
import Major from './Major';
import Activity from './Activity';
import Requirements from './Requirements'; 
import CourseList from './Courselist'; 

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column; 
`;

const MainContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const SubjectList = styled.p`
  align-self: flex-start; 
  margin-top: 10px; 
  font-weight: bold;
  font-size: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; 
  margin-top: 10px; 
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: black; 
  color: white; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const App = () => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <ContentWrapper>
        <Title>마이페이지</Title>
        <p>상세지표</p>
        <MainContentWrapper>
          <LiberalArts />
          <div>
            <Major />
            <Activity />
          </div>
        </MainContentWrapper>
        <Requirements />
        <SubjectList>수강 과목 등록</SubjectList>
        <ButtonContainer>
          <Button>파일 업로드</Button>
          <Button>직접 추가</Button>
        </ButtonContainer>
        <CourseList /> 
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default App;

























