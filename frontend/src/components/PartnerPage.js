// src/components/PartnerPage.js
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';
import { useEffect } from 'react';

function PartnerPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const partners = [
    {
      name: "업체 A",
      logo: "1_logo.png",
      description: "업체 A는 우리의 기술을 도입하여 활용하여 악플 모니터링시스템을 도입합니다."
    },
    {
      name: "업체 B",
      logo: "2_logo.png",
      description: "업체 B는 소셜 미디어에서의 악플을 분석하여 고객 피드백을 개선했습니다."
    },
    {
      name: "업체 C",
      logo: "3_logo.png",
      description: "업체 C는 악플 데이터를 기반으로 법적 대응 전략을 수립했습니다."
    }
  ];

  return (
    <Wrapper>
      <Navigation /> {/* Navigation 컴포넌트 추가 */}

      <ContentWrapper>
        <PageTitle>협력 업체 사례</PageTitle>
        <CompanyGrid>
          {partners.map((partner, index) => (
            <CompanyCard key={index}>
              <CardContent>
                <LogoSection>
                  <CompanyLogo>
                    <img src={partner.logo} alt={partner.name} />
                  </CompanyLogo>
                </LogoSection>
                <InfoSection>
                  <CompanyName>{partner.name}</CompanyName>
                  <CompanyDescription>
                    {partner.description}
                  </CompanyDescription>
                </InfoSection>
              </CardContent>
            </CompanyCard>
          ))}
        </CompanyGrid>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}

export default PartnerPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 120px 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
`;

const CompanyGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding: 0 20px;
`;

const CompanyCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const LogoSection = styled.div`
  flex-shrink: 0;
`;

const CompanyLogo = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const InfoSection = styled.div`
  flex-grow: 1;
`;

const CompanyName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const CompanyDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;