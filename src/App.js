// App.js

import React from 'react';
import { Layout, Button } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar2';
import Footer from './components/Footer';
import './components/MenuItems';

const { Content } = Layout;

const App = () => {
  const handleCheck = () => {
    console.log('검사하기 버튼 클릭됨');
  };

  return (
    <Router>
      <Navbar />
      <Layout>
        <Content>
          <div className="image-container">
            <div className="big-title">Graduation, the moment</div>
            <div className="small-title">Never give up, you will dreams come true</div>
            <img
              src="https://cdn.pixabay.com/photo/2019/02/07/11/22/learn-3980941_1280.jpg"
              alt="사진"
              style={{ margin: 'auto', display: 'block' }}
            />
            <div className="button-container">
              <Button className="primary-button" onClick={handleCheck}>
                검사하기
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
      <Footer />
    </Router> 
  );
};

export default App;




































