import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ServiceApplicationPage() {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <Wrapper>
      <Navigation>
        <NavigationItem onClick={() => handleTabClick('/service')}>서비스 소개</NavigationItem>
        <NavigationItem onClick={() => handleTabClick('/features')}>기능</NavigationItem>
        <NavigationItem onClick={() => handleTabClick('/partners')}>협력업체</NavigationItem>
      </Navigation>
      
      <ContentWrapper>
        <Title>서비스 신청</Title>
        {/* 여기에 서비스 신청 폼을 추가하세요 */}
      </ContentWrapper>
    </Wrapper>
  );
}

export default ServiceApplicationPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white;
`;

const Navigation = styled.div`
  position: absolute;
  top: 40px;
  right: 60px;
  display: flex;
  gap: 40px;
`;

const NavigationItem = styled.div`
  font-size: 20px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    font-weight: 700;
    color: #000;
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;