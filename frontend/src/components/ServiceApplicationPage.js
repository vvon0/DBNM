import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navigation from './Navigation';
import { submitServiceRequest } from '../api';

function ServiceApplicationPage() {
  const navigate = useNavigate();
  const [targetName, setTargetName] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [targetDescription, setTargetDescription] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [siteDescription, setSiteDescription] = useState('');
  const [output, setOutput] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        targetName,
        socialMedia,
        targetDescription,
        siteUrls: siteUrl.split(',').map(url => url.trim()),
        siteDescription,
      };

      const response = await submitServiceRequest(formData);
      
      if (response.status === 201) {
        setOutput(formData);
        // 폼 초기화
        setTargetName('');
        setSocialMedia('');
        setTargetDescription('');
        setSiteUrl('');
        setSiteDescription('');
        // 성공 메시지 표시 가능
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // 에러 메시지 표시 가능
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
            <FormGroup>
              <Label htmlFor="siteUrl">사이트 URL:</Label>
              <Input
                type="text"
                id="siteUrl"
                value={siteUrl}
                onChange={(e) => setSiteUrl(e.target.value)}
                required
              />
              <SmallText>여러 개의 URL을 입력하려면 쉼표로 구분하세요.</SmallText>
            </FormGroup>

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