import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';

function FeaturePage() {
  const navigate = useNavigate();

  const features = [
    {
      title: "AI 사용",
      description: "최신 AI 기술을 활용하여 텍스트의 맥락과 뉘앙스를 정확하게 파악하고, 악의적인 댓글을 효과적으로 식별합니다. 다양한 웹 스크래핑 기술과 정서 분석을 통해 악플을 필터링 및 분류합니다.",
      icon: "ai_icon.png"
    },
    {
      title: "악플 수집 및 법률 분석",

      description: "온라인 상의 악성 댓글을 자동으로 수집하고 분류하며, 자연어 처리를 활용해 법률 DB 기반으로 법적 고소 가능성 확인 후 해당 댓글 관련 법률을 나열해 줍니다.",
      icon: "legal_icon.png"
    },
    {
      title: "24시간 모니터링",
      description: "낮 말은 새가 듣고, 밤 말은 쥐가 듣는다. 연중무휴 24시간 실시간 모니터링 시스템을 통해 악성 댓글 발생 즉시 감지하고 대응합니다. 신속한 알림 시스템으로 즉각적인 조치가 가능합니다.",
      icon: "monitoring_icon.png"
    }
  ];

  return (
    <Wrapper>
      <Navigation />
      
      <ContentWrapper>
        <PageTitle>주요 기능</PageTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconContainer>
                <img src={feature.icon} alt={feature.title} />
              </IconContainer>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>
                {feature.description}
              </FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}

export default FeaturePage;

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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FeatureTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

