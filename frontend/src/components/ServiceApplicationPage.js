
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navigation from './Navigation';
import { submitServiceRequest } from '../api';

function ServiceApplicationPage() {
  const navigate = useNavigate();
  const [targetName, setTargetName] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [targetDescription, setTargetDescription] = useState('');
  const [siteUrls, setSiteUrls] = useState(['']);
  const [siteDescription, setSiteDescription] = useState('');
  const [output, setOutput] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddUrl = () => {
    setSiteUrls([...siteUrls, '']);
  };

  const handleUrlChange = (index, value) => {
    const newUrls = [...siteUrls];
    newUrls[index] = value;
    setSiteUrls(newUrls);
  };

  const getPricingTier = (urlCount) => {
    if (urlCount <= 5) return 'basic';
    if (urlCount <= 15) return 'pro';
    return 'enterprise';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        targetName,
        socialMedia,
        targetDescription,
        siteUrls: siteUrls.filter(url => url.trim() !== ''),
        siteDescription,
      };

      const response = await submitServiceRequest(formData);
      
      if (response.status === 201) {
        setOutput(formData);
        setTargetName('');
        setSocialMedia('');
        setTargetDescription('');
        setSiteUrls(['']);
        setSiteDescription('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Wrapper>
      <Navigation />
      
      <ContentWrapper>
        <Title>서비스 신청</Title>
        <FormContainer onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>타겟 정보 입력</SectionTitle>
            <FormGroup>
              <Label htmlFor="targetName">이름:</Label>
              <Input
                type="text"
                id="targetName"
                value={targetName}
                onChange={(e) => setTargetName(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="socialMedia">소셜 미디어 계정:</Label>
              <Input
                type="text"
                id="socialMedia"
                value={socialMedia}
                onChange={(e) => setSocialMedia(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="targetDescription">기타 관련 정보:</Label>
              <TextArea
                id="targetDescription"
                value={targetDescription}
                onChange={(e) => setTargetDescription(e.target.value)}
              />
            </FormGroup>
          </FormSection>

          <FormSection>
            <SectionTitle>악플을 찾을 사이트 입력</SectionTitle>
            {siteUrls.map((url, index) => (
              <FormGroup key={index}>
                <Label>사이트 URL {index + 1}:</Label>
                <UrlInputWrapper tier={getPricingTier(index + 1)}>
                  <Input
                    type="text"
                    value={url}
                    onChange={(e) => handleUrlChange(index, e.target.value)}
                    required
                  />
                </UrlInputWrapper>
              </FormGroup>
            ))}
            <AddUrlButton type="button" onClick={handleAddUrl}>
              + 사이트 URL 추가하기
            </AddUrlButton>
            {siteUrls.length === 5 && (
              <PricingMessage tier="pro">
                이후 추가되는 URL은 Pro 요금제가 적용됩니다.
              </PricingMessage>
            )}
            {siteUrls.length === 15 && (
              <PricingMessage tier="enterprise">
                이후 추가되는 URL은 Enterprise 요금제가 적용됩니다.
              </PricingMessage>
            )}

            <FormGroup>
              <Label htmlFor="siteDescription">사이트 설명:</Label>
              <TextArea
                id="siteDescription"
                value={siteDescription}
                onChange={(e) => setSiteDescription(e.target.value)}
              />
            </FormGroup>

            <SubmitButton type="submit">정보 제출</SubmitButton>
          </FormSection>
        </FormContainer>

        {output && (
          <OutputContainer>
            <SectionTitle>입력한 정보</SectionTitle>
            <OutputItem><Strong>이름:</Strong> {output.targetName}</OutputItem>
            <OutputItem><Strong>소셜 미디어 계정:</Strong> {output.socialMedia}</OutputItem>
            <OutputItem><Strong>기타 관련 정보:</Strong> {output.targetDescription}</OutputItem>
            <OutputItem><Strong>사이트 URL:</Strong> {output.siteUrls.join(', ')}</OutputItem>
            <OutputItem><Strong>사이트 설명:</Strong> {output.siteDescription}</OutputItem>
          </OutputContainer>
        )}
      </ContentWrapper>
    </Wrapper>
  );
}

export default ServiceApplicationPage;

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
  margin-bottom: 40px;
  text-align: center;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FormSection = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

const SmallText = styled.small`
  display: block;
  margin-top: 4px;
  color: #666;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  padding: 16px 48px;
  font-size: 18px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;
  
  &:hover {
    background-color: #eee;
  }
`;

const OutputContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const OutputItem = styled.p`
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

const Strong = styled.strong`
  font-weight: 600;
`;

const UrlInputWrapper = styled.div`
  position: relative;
  width: 100%;
  
  input {
    border-color: ${props => {
      switch(props.tier) {
        case 'pro':
          return '#007bff';
        case 'enterprise':
          return '#7B3FE4';
        default:
          return '#ddd';
      }
    }};
    border-width: 2px;
  }
`;

const AddUrlButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 15px 0;
  margin: 10 px 0;

  &:hover {
    text-decoration: underline;
  }
`;

const PricingMessage = styled.div`
  margin: 10px 0;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  background-color: ${props => {
    switch(props.tier) {
      case 'pro':
        return '#E6F0FF';
      case 'enterprise':
        return '#F0E6FF';
      default:
        return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch(props.tier) {
      case 'pro':
        return '#007bff';
      case 'enterprise':
        return '#7B3FE4';
      default:
        return '#666';
    }
  }};
`;