import React from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi"; 
import profileImage from "./profile.jpg";

const SidebarWrapper = styled.div`
  background-color: #f0f0f0;
  width: 250px;
  height: 130%;
  padding: 20px;
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 70px; 
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 70px;
  position: relative; 
  top: 73px;
`;

const UserInfo = styled.div`
  margin-top: 70px; 
  text-align: center;
  font-size: 14px;
  margin-bottom: 210px; 
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px; 
`;

const SidebarMenuItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  height: 24px;
`;

const ExternalLink = styled.a`
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <ProfileImage src={profileImage} alt="Profile" />
        <UserInfo>
          <div>김이름</div>
          <div>123456789</div>
          <div>컴퓨터공학과</div>
          <button>정보 수정하기</button>
        </UserInfo>
      </SidebarHeader>
      
      <SidebarMenu>
        <SidebarMenuItem>
          <ExternalLink href="https://intranet.hsu.ac.kr/" target="_blank" rel="noopener noreferrer">
            <SidebarIcon><FiHome /></SidebarIcon>
            호서대 통합정보시스템
          </ExternalLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <ExternalLink href="https://learn.hoseo.ac.kr/login/index.php" target="_blank" rel="noopener noreferrer">
            <SidebarIcon><FiHome /></SidebarIcon>
            호서대 LMS
          </ExternalLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <ExternalLink href="https://sso.hoseo.edu/svc/tk/Auth.do?id=NEW_PORTAL&ac=Y&ifa=N&" target="_blank" rel="noopener noreferrer">
            <SidebarIcon><FiHome /></SidebarIcon>
            호서대 포털시스템
          </ExternalLink>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default Sidebar;















