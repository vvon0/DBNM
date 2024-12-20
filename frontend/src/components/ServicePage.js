import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';

function ServicePage() {
  const navigate = useNavigate();

  const handleServiceApplicationClick = () => {
    navigate('/service-application');
  };

  const pricePackages = [
    {
      name: "Basic",
      price: "300,000원",
      period: "월",
      features: [
        "기본 모니터링 서비스",
        "월 1회 리포트",
        "이메일 알림",
        "5개 사이트 모니터링"
      ]
    },
    {
      name: "Professional",
      price: "500,000원",
      period: "월",
      features: [
        "실시간 모니터링",
        "주간 리포트",
        "실시간 알림",
        "15개 사이트 모니터링",
        "법률 검토 서비스"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "1,000,000원",
      period: "월",
      features: [
        "24/7 실시간 모니터링",
        "맞춤형 리포트",
        "실시간 알림",
        "무제한 사이트 모니터링",
        "법률 검토 서비스",
        "전담 매니저 배정",
        "관련 법 조항 매칭"
      ]
    }
  ];

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

      <PricingSection>
        <PricingTitle>요금제 안내</PricingTitle>
        <PricingContainer>
          {pricePackages.map((pkg, index) => (
            <PriceCard key={index} recommended={pkg.recommended}>
              {pkg.recommended && <RecommendBadge>추천</RecommendBadge>}
              <PackageName>{pkg.name}</PackageName>
              <PriceWrapper>
                <Price>{pkg.price}</Price>
                <Period>/ {pkg.period}</Period>
              </PriceWrapper>
              <FeatureList>
                {pkg.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    ✓ {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
              <ApplyButton onClick={handleServiceApplicationClick}>
                신청하기
              </ApplyButton>
            </PriceCard>
          ))}
        </PricingContainer>
      </PricingSection>

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

      <Footer />
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

const PricingSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fafafa;
`;

const PricingTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
`;

const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  padding: 20px;
`;

const PriceCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  width: 350px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  transform: ${props => props.recommended ? 'scale(1.05)' : 'scale(1)'};
  border: ${props => props.recommended ? '2px solid #007bff' : 'none'};
  
  @media (max-width: 768px) {
    width: 100%;
    transform: scale(1);
    margin-bottom: 20px;
  }
`;

const RecommendBadge = styled.div`
  position: absolute;
  top: -15px;
  right: 20px;
  background: #007bff;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
`;

const PackageName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

const PriceWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
`;

const Price = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #333;
`;

const Period = styled.span`
  font-size: 16px;
  color: #666;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const FeatureItem = styled.li`
  color: #666;
  margin-bottom: 15px;
  font-size: 16px;
  display: flex;
  align-items: center;
  
  &:before {
    margin-right: 10px;
  }
`;

const ApplyButton = styled(ServiceButton)`
  margin-top: 30px;
  width: 100%;
`;