import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ServicePage from './components/ServicePage';
import ServiceApplicationPage from './components/ServiceApplicationPage';
import PartnerPage from './components/PartnerPage';
import FeaturesPage from './components/FeaturesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/service" />} /> {/* 홈을 서비스로 리다이렉트 */}
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service-application" element={<ServiceApplicationPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/partners" element={<PartnerPage />} />
      </Routes>
    </Router>
  );
}

export default App;