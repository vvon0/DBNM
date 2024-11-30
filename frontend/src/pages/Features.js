import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';

const images = {
  image1: require('../assets/images/기능 소개 이미지.png'), 
};


const featuresData = [
  {
    title: '악플 수집 및 정리',
    description: '저희 기술은 악플을 효과적으로 수집하고 분석하여 의뢰인에게 필요한 정보를 제공합니다.',
    imageUrl: images.image1,
    steps: [
      '0단계: 의뢰인이 사이트와 타겟 정보를 입력합니다.',
      '1단계: 주어진 사이트에서 악플을 수집합니다.',
      '2단계: 주어진 의뢰인 정보를 기반으로 악플을 분석합니다.',
      '3단계: 수집된 악플을 정리하고 분류합니다.',
      '4단계: 해당 악플이 법적 고소 가능성이 있는지를 고려합니다.',
      '5단계: 필터링된 결과를 정리하여 의뢰인에게 전송합니다.',
    ],
  },
  {
    title: '24시간 모니터링',
    description: '저희 시스템은 24시간 동안 지속적으로 악플을 모니터링하여 실시간으로 정보를 제공합니다.',
    steps: [
      '1단계: 설정된 키워드와 플랫폼에 따라 실시간 모니터링을 시작합니다.',
      '2단계: 새로운 악플이 발견되면 즉시 알림을 전송합니다.',
      '3단계: 수집된 악플을 분석하여 의뢰인에게 정기적으로 보고합니다.',
      '4단계: 악플의 추세를 분석하여 필요한 대응 방안을 제시합니다.',
    ],
  },
];

function Features() {
  return (
    <div className="features-container">
      <h1>기술 기능 소개</h1>
      <div className="features-list">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
            {feature.imageUrl && ( 
              <img src={feature.imageUrl} alt={feature.title} className="feature-image" />
            )}
            <h3>진행 단계</h3>
            <ul>
              {feature.steps.map((step, stepIndex) => (
                <li key={stepIndex}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 메인 페이지로 돌아가기 링크 추가 */}
      <Link to="/">메인 페이지로 돌아가기</Link>
    </div>
  );
}

export default Features;