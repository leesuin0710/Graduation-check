import React, { useState } from 'react';
import { Layout, Button, Modal, Flex } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link, BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter 및 Link 컴포넌트 import
import './App.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  const handleCheck = () => {
    if (loggedIn) {
      setModalOpen(true);
    } else {
      // 경로를 설정할 때 문자열 '/login' 대신 Link 컴포넌트를 사용하여 리액트 라우터로 이동하도록 수정
      // window.location.href = '/login'; <- 이 부분을 아래와 같이 수정
      // react-router-dom의 Link 컴포넌트를 사용하여 리액트 라우터로 이동하도록 수정
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Router> {/* BrowserRouter로 감싸기 */}
      <Layout className="layout">
        <Header className="header">
          <div className="logo"></div>
          {/* 홈 버튼 */}
          <Button type="link" className="home-Button">
            <Link to="/">
              <HomeOutlined /> 홈
            </Link>
          </Button>
          {/* 로그인 버튼 */}
          <Button type="link" onClick={handleLogin} className="login-Button">
            {loggedIn ? '로그아웃' : '로그인'}
          </Button>
        </Header>
        {/* 사진을 표시하는 부분 */}
        <Content className="content" style={{ position: 'relative' }}>
          <div className="image-container">
            <img src="https://cdn.pixabay.com/photo/2019/02/07/11/22/learn-3980941_1280.jpg" alt="사진" style={{ maxHeight: '80vh' }} />
            {/* 검사하기 버튼 */}
            <Button type="primary" onClick={handleCheck} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              검사하기
            </Button>
          </div>
          <Flex wrap="wrap" gap="small" className="site-button-ghost-wrapper">
           <Button type="primary" ghost>
             공지사항
           </Button>
           <Button>마이페이지</Button>
           <Button type="dashed">
             게시판
           </Button>
           <Button type="primary" danger ghost>
             Notice
           </Button>
         </Flex>
        </Content>
        <Footer className="footer">
          연락처: abc@hoseo.edu | 출처: 호서대학교 홈페이지 | 개발자 정보: 개발자명
        </Footer>
        <Modal
          title="파일 삽입"
          open={modalOpen}
          onCancel={closeModal}
          footer={[
            <Button key="cancel" onClick={closeModal}>
              취소
            </Button>,
            <Button key="submit" type="primary" onClick={closeModal}>
              확인
            </Button>,
          ]}
        >
          파일 삽입 창 내용
        </Modal>
      </Layout>
    </Router> 
  );
};

export default App;

































