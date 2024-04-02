import React from 'react';
import { Layout } from 'antd';
import MenuComponent from './MenuComponent'; // MenuComponent import
import './App.css'; // CSS 파일 가져오기

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        {/* MenuComponent 통합 */}
        <MenuComponent theme="dark" />
      </Header>
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

