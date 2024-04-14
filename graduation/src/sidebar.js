import React from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi"; // react-icons에서 FiHome 아이콘을 import합니다.
import profileImage from "./profile.jpg";

// Styled-components를 사용하여 스타일을 정의합니다.
const SidebarWrapper = styled.div`
  background-color: #f0f0f0; /* 사이드바의 배경색을 설정합니다. */
  width: 250px;
  height: 100%;
  padding: 20px;
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬하기 위해 column으로 설정합니다. */
  align-items: center; /* 가운데 정렬하기 위해 추가합니다. */
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 70px; /* 헤더와 메뉴 사이에 간격을 설정합니다. */
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 70px; /* 프로필 이미지 아래 간격 조정 */
  position: relative; /* 상대적 위치 지정 */
  top: 73px;
`;

const UserInfo = styled.div`
  margin-top: 70px; /* 프로필 이미지와 유저 정보 사이 간격 조정 */
  text-align: center;
  font-size: 14px;
  margin-bottom: 210px; /* 유저 정보와 정보 수정하기 버튼 사이 간격 조정 */
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

// 실제 사이드바 컴포넌트
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <ProfileImage src={profileImage} alt="Profile" /> {/* 프로필 이미지 추가 */}
        <UserInfo>
          <div>김이름</div>
          <div>123456789</div>
          <div>컴퓨터공학과</div>
          <button>정보 수정하기</button>
        </UserInfo>
      </SidebarHeader>
      
      <SidebarMenu>
        {/* 각 사이트 이름 앞에 집 모양 아이콘을 추가합니다. */}
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
        {/* 필요한 만큼 메뉴 아이템을 추가하세요 */}
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default Sidebar;















