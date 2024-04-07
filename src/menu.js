import React from 'react';
import { Layout } from 'antd';
import './App.css'; // CSS 파일 가져오기

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Content className="content">
        {/* Content component */}
      </Content>
      <Footer className="footer">
        {/* Footer component */}
      </Footer>
    </Layout>
  );
};

export default App;

