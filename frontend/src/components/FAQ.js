import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Navigation from './Navigation';
import Footer from './Footer';

function FAQPage() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "서비스 구독 및 해지는 어떻게 하나요?",
      answer: "서비스 신청 페이지에서 원하시는 요금제를 선택하여 구독하실 수 있습니다. 해지는 마이페이지에서 언제든지 가능하며, 해지 시점까지 이용하신 서비스 요금만 청구됩니다."
    },
    {
      question: "모니터링은 실시간으로 이루어지나요?",
      answer: "Basic 요금제는 정기적인 모니터링을, Professional과 Enterprise 요금제는 실시간 모니터링을 제공합니다. 악성 댓글이 발견되면 설정하신 방식으로 즉시 알림을 보내드립니다."
    },
    {
      question: "모니터링 대상 사이트는 어떻게 변경하나요?",
      answer: "마이페이지에서 모니터링 중인 사이트 목록을 확인하고 추가/변경/삭제하실 수 있습니다. 요금제별 모니터링 가능한 사이트 수 제한이 있으니 참고해 주시기 바랍니다."
    },
    {
      question: "악성 댓글 발견 시 어떤 조치가 가능한가요?",
      answer: "발견된 악성 댓글에 대해 법적 대응이 가능한지 자동으로 분석해 드립니다. Professional 이상의 요금제에서는 관련 법률 검토 서비스도 제공되어 즉각적인 법적 대응이 가능합니다."
    },
    {
      question: "리포트는 어떤 내용을 포함하나요?",
      answer: "리포트에는 발견된 악성 댓글의 수, 유형별 분류, 위험도 분석, 주요 키워드, 발생 추이 등이 포함됩니다. Enterprise 요금제는 고객 맞춤형 리포트 작성도 가능하며, 관련 법률 조항도 분석합니다."
    },
    {
      question: "여러 계정을 한 번에 모니터링할 수 있나요?",
      answer: "네, 가능합니다. 단일 구독으로 여러 소셜 미디어 계정이나 웹사이트를 모니터링할 수 있습니다. 단, 요금제별로 모니터링 가능한 사이트 수에 제한이 있습니다."
    },
    {
      question: "오탐(잘못된 감지)은 어떻게 처리되나요?",
      answer: "AI가 지속적으로 학습하여 오탐률을 최소화하고 있습니다. 오탐으로 판단되는 경우 피드백을 주시면 시스템 개선에 반영되며, Enterprise 요금제는 전담 매니저가 직접 검토합니다."
    },
    {
      question: "개인정보는 어떻게 보호되나요?",
      answer: "모든 데이터는 암호화되어 저장되며, 철저한 보안 정책에 따라 관리됩니다. 수집된 정보는 악성 댓글 모니터링 목적으로만 사용되며 제3자에게 제공되지 않습니다."
    }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper>
      <Navigation />
      <ContentWrapper>
        <Title>자주 묻는 질문</Title>
        <FAQContainer>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <QuestionButton 
                onClick={() => toggleAnswer(index)}
                isOpen={openIndex === index}
              >
                <QuestionText>{faq.question}</QuestionText>
                <Arrow isOpen={openIndex === index}>▼</Arrow>
              </QuestionButton>
              <AnswerPanel isOpen={openIndex === index}>
                {faq.answer}
              </AnswerPanel>
            </FAQItem>
          ))}
        </FAQContainer>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}

export default FAQPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 120px 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
`;

const FAQContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQItem = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const QuestionButton = styled.button`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  background-color: ${props => props.isOpen ? '#f5f5f5' : 'white'};
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const QuestionText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-align: left;
`;

const Arrow = styled.span`
  color: #666;
  transition: transform 0.2s;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const AnswerPanel = styled.div`
  padding: ${props => props.isOpen ? '20px' : '0 20px'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;