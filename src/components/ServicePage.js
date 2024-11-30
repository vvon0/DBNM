import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navigation from './Navigation';

function ServicePage() {
  const navigate = useNavigate();

  const handleServiceApplicationClick = () => {
    navigate('/service-application');
  };

  return (
    <PageContainer>
      <MainSection>
        <Navigation />
        
        <ContentWrapper>
          <Title>디지털 비난 네트워크 매니저</Title>
          <SubTitle>DBNM</SubTitle>
          <Description>Day by Bird, Night by Mouse</Description>
          <ServiceButton onClick={handleServiceApplicationClick}>
            서비스 신청
          </ServiceButton>
        </ContentWrapper>
      </MainSection>

      <PartnerSection>
        <PartnerTitle>DBNM은 3가지 대형 회사와 협업합니다.</PartnerTitle>
        <LogoContainer>
          <CompanyLogo>
            <img src="1_logo.png" alt="회사 1" />
          </CompanyLogo>
          <CompanyLogo>
            <img src="2_logo.png" alt="회사 2" />
          </CompanyLogo>
          <CompanyLogo>
            <img src="3_logo.png" alt="회사 3" />
          </CompanyLogo>
        </LogoContainer>
      </PartnerSection>
    </PageContainer>
  );
}

export default ServicePage;

const PageContainer = styled.div`
  width: 100%;
  background-color: white;
`;

const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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

const SubTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 0;
`;

const Description = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ServiceButton = styled.button`
  padding: 16px 48px;
  font-size: 18px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: #eee;
  }
`;

const PartnerSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
`;

const PartnerTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 80px;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
`;

const CompanyLogo = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;