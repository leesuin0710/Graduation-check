import React from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar';
import LiberalArts from './LiberalArts';
import Major from './Major';
import Activity from './Activity';
import Requirements from './Requirements'; // Requirements 컴포넌트 추가
import CourseList from './Courselist';

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column; /* 요소들을 세로로 정렬하기 위해 column으로 설정 */
`;

const MainContentWrapper = styled.div`
  display: flex;
  gap: 20px; /* 요소 사이의 간격을 설정 */
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const SubjectList = styled.p`
  align-self: flex-start; /* 수강 과목 리스트를 컨텐츠의 오른쪽에 배치 */
  margin-top: 40px; /* 위쪽 여백 추가 */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* 버튼 사이의 간격을 설정 */
  margin-top: 20px; /* 위쪽 여백 추가 */
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: black; /* 버튼 배경색 설정 */
  color: white; /* 버튼 텍스트 색상 설정 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// 메인 앱 컴포넌트
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
        <Requirements /> {/* 요구사항 컴포넌트를 교양 컴포넌트 아래에 배치 */}
        <Title>수강 과목 등록</Title>
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
















