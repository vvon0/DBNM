import React from 'react';
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <CompanyInfo>
          <CompanyName>DBNM</CompanyName>
          <div>
            <p>주소: 대구광역시 북구 대학로 80</p>
            <p>이메일: contact@dbnm.com</p>
            <p>전화: 02-123-4567</p>
          </div>
        </CompanyInfo>
      </FooterContent>
      <Copyright>
        © 2024 DBNM. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #f5f5f5;
  padding: 60px 0 20px;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
  
  p {
    color: #666;
    line-height: 1.6;
    font-size: 14px;
  }
`;

const CompanyName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const Copyright = styled.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
`;